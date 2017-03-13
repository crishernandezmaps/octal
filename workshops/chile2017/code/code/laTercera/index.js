// Modulos npm
let request = require('request');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const tm = require('text-miner');

request = request.defaults({jar: true});

// Búsqueda de Google
let search =
'https://www.google.co.uk/search?q=educacion+gratuita+site:latercera.com&num=100&tbs=qdr:y&source=lnt&sa=X&ved=0ahUKEwi6vK-c49HSAhUpAcAKHSluDf0QpwUIFA&biw=1329&bih=678';

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
            urls.push(url);
        });
        for (let i = 0; i < 50; i++) {
            axios.get(urls[i]).then( (response) => {
              let $ = cheerio.load(response.data);
              let not = [];
              $('.contenido').each( (i, elm) => {
                not.push({texto:($(elm).text()).trim()});
              });
              return(not);
            })
            .then ( (not) => {
                // console.log(not);
                //Text Analysis
                let corp = [];
                for (let i = 0; i < not.length; i++) {
                    corp.push(not[i].texto);
                };
                let corpus = new tm.Corpus(corp)
                            .clean()
                            .removeInterpunctuation()
                            .removeNewlines()
                            .removeWords(tm.STOPWORDS.ES);
                console.log(corpus);
                let terms = new tm.Terms(corpus).findFreqTerms(1);
                let feq = terms.sort(function(a, b) {
                    return parseFloat(a.count) - parseFloat(b.count);
                });

                fs.writeFile("data/palabras-laTercera.json" , JSON.stringify(feq), function (err){
        			if (err) {console.log(err);}
                });
            });
        };
        // console.log('Todo OK!');
    });
});
