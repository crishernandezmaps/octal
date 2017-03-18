// require('events').EventEmitter.prototype._maxListeners = 100;
const fs = require('fs');
const Twit = require('twit');
const config = require('./conf/config2.js');
const T = new Twit(config);

const santiago = [-70.906448, -33.691781, -70.311813, -33.267972];
const stream = T.stream('statuses/filter', {locations: santiago});

function searchTweets() {
    stream.on('tweet', function(tweet) {
        // Basic Information
        let time = tweet.created_at,
            day = time.slice(8,10),
            month = time.slice(4,7),
            year = time.slice(26,30),
            date = day + ' ' + month + ' ' + year,
            h = time.slice(11,19),
            ha = parseInt(h.split(':')[0])-3,
            hb = parseInt(h.split(':')[1]),
            hc = parseInt(h.split(':')[2]),
            hour = ha + ':' + hb + ':' + hc;
        let name = tweet.user.screen_name;
        let followers = tweet.user.followers_count;
        let place = tweet.place.name;
        let source = tweet.source;

        /// OTROS DATOS UTILES
        // let url = tweet.user.url;
        // let idnum = tweet.user.id_str;
        // let t = tweet.text;
        // let tns = t.trim();
        // let texto = tns.replace(/(\r\n|\n|\r)/gm, " ");

        // Conditions
        let c = tweet.place.country;
        let p = tweet.place;
        let l = tweet.lang;
        let s = tweet.max_id_str;
        let v = tweet.user.verified;

        let resultado = name + ',' + followers + ',' + place + ',' + hour + ',' + date + ',' + source + '\n'; // just for console

        if (c == 'Chile' && s == undefined && v == false) {
            fs.open("data/resultados.csv", 'a', 0666, function(err, fd) {
                fs.appendFile("data/resultados.csv", resultado, (err) => {
                    if (err) throw err;
                });
            });
            console.log(resultado);
        };

    });
}
searchTweets();
