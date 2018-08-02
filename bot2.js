console.log("chal gya and it is starting");
var Config=require('./config');
var Twit=require('twit');
var T=new Twit(Config);

T.get('search/tweets', { q: 'rainbow since:2011-07-11', count: 2 }, function(err, data, response) {

    var tweets=data.statuses;
    for(var i=0;i<tweets.length;i++){
        console.log(tweets[i].text);
    }
});