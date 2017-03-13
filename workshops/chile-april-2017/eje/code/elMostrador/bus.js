// Modulos npm
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const tm = require('text-miner');
const data = require('./data/urls.json');

console.log(data[0].url);

// let urls = [];
//
// for (let i = 0; i < urls.length; i++) {
//     axios.get(urls[i]).then( (response) => {
//       let $ = cheerio.load(response.data);
//       let not = [];
//       $('.cuerpo-noticia').each( (i, elm) => {
//           not.push({texto:($(elm).text()).trim()});
//       });
//       return(not);
//     })
//     .then ( (not) => {
//         // Análisis de Texto
//         let corp = [];
//         for (let i = 0; i < not.length; i++) {
//             corp.push(not[i].texto);
//         };
//         let corpus = new tm.Corpus(corp)
//                     .clean()
//                     .removeInterpunctuation()
//                     .removeNewlines()
//                     .removeWords(tm.STOPWORDS.ES);
//         let terms = new tm.Terms(corpus).findFreqTerms(1);
//         let feq = terms.sort(function(a, b) {
//             return parseFloat(a.count) - parseFloat(b.count);
//         });
//         fs.writeFile("data/palabras-elMostrador.json" , JSON.stringify(feq), function (err){
//       if (err) {console.log(err);}
//         });
//     });
// };
