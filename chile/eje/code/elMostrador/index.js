// Modulos npm
let request = require('request');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const tm = require('text-miner');

request = request.defaults({jar: true});

// Búsqueda de Google
let search =
'https://www.google.co.uk/search?num=100&biw=1329&bih=678&tbs=qdr%3Ay&q=educacion+gratuita+site%3Aelmostrador.cl&oq=educacion+gratuita+site%3Aelmostrador.cl&gs_l=serp.3...127110.129373.0.139206.14.14.0.0.0.0.277.1194.12j1j1.14.0....0...1c.1.64.serp..0.0.0.tvyKh457-so';

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
        for (let i = 0; i < urls.length; i++) {
            axios.get(urls[i]).then( (response) => {
              let $ = cheerio.load(response.data);
              let not = [];
              $('.cuerpo-noticia').each( (i, elm) => {
                  not.push({texto:($(elm).text()).trim()});
              });
              return(not);
            })
            .then ( (not) => {
                // Análisis de Texto
                let corp = [];
                for (let i = 0; i < not.length; i++) {
                    corp.push(not[i].texto);
                };
                let corpus = new tm.Corpus(corp)
                            .clean()
                            .removeInterpunctuation()
                            .removeNewlines()
                            .removeWords(tm.STOPWORDS.ES);
                let terms = new tm.Terms(corpus).findFreqTerms(1);
                let feq = terms.sort(function(a, b) {
                    return parseFloat(a.count) - parseFloat(b.count);
                });
                fs.writeFile("data/palabras-elMostrador.json" , JSON.stringify(feq), function (err){
        			if (err) {console.log(err);}
                });
            });
        };
        console.log('Todo OK!');
    });
});
