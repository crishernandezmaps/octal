// Modulos npm
let request = require('request');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const colors = require('colors');
const natural = require('natural'),
    TfIdf = natural.TfIdf,
    tfidf = new TfIdf();

request = request.defaults({jar: true});

// OPCIONES
let search = 'https://www.google.co.uk/search?q=politica+site%3Alatercera.com&oq=politica+site%3Alatercera.com&aqs=chrome..69i57.17611j0j7&sourceid=chrome&ie=UTF-8';
let word = 'campaña';

// Opciones de la búsqueda
let options = {
    url: 'http://www.google.com/',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16'
    }
};

// Obtener links de la búsqueda en Google - Google Scraping ;)
request(options, function () {
    request(search, function (error, response, body) {
        var $ = cheerio.load(body);
        let urls = []
        $(".r").each(function() {
            var a = $(this);
            var u = a.children().attr('href');
            let ux = u.split('/&sa=')[0]
            let url = ux.split('/url?q=')[1]
            if (url.slice(25,32) === 'noticia') {
                urls.push(url);
            }
        });
        for (let i = 0; i < urls.length; i++) {
            axios.get(urls[i]).then( (response) => {
              let $ = cheerio.load(response.data);
              let not = [];
              $('.contenido').each( (i, elm) => {
                  let z = $(elm).parent().parent().prev().prev().prev().children().children().children().eq(1).children().children().children().children().attr('href');
                  let url = z.split('https://www.facebook.com/sharer.php?u=')[1];
                  let date = $(elm).parent().parent().prev().prev().prev().children().children().children().eq(3).children().children().text();
                  let title = $(elm).parent().children().eq(1).text();
                  let texto = ($(elm).text()).trim().replace(/(\r\n|\n|\r)/gm,"");
                  not.push({
                      titulo: title,
                      fecha: date,
                      texto: texto,
                      url: url
                  })
              });
              return(not);
            })
            .then ( (not) => {
                for (let i = 0; i < not.length; i++) {
                    let ti = not[i].titulo;
                    let fe = not[i].fecha;
                    let te = not[i].texto;
                    let ur = not[i].url;
                    tfidf.addDocument(te);
                    tfidf.tfidfs(word, function(i, measure) {
                        if (measure > 0) {
                            let f = measure + ',' + fe + ',' + ti + ',' + ur + '\n';
                            // Writing down results
                            fs.appendFile('data/resultados.csv', f, (err) => {
                                if (err) throw err;
                            });
                        };
                    });
                };
            })
            .catch(error=>{});
        };
    });
});
