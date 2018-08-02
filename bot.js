

console.log("chal gya and it is starting");
var Config=require('./config');

var Twit=require('twit');
var T=new Twit(Config);
var fs=require('fs');
var exec=require('child_process').exec;


// var stream=T.stream('user');
//
// stream.on('follow',tweeted);
// function tweeted(eventMsg){
//     var name=eventMsg.source.name;
//     var screenName=eventMsg.source.screen_name;
//     tweetIt('.@'+screenName+'Thanks for following me');
// }
tweets();
// //setInterval(tweets,20000);
// //tweets();
function tweets(txt){
    var cmd='processing-java --sketch=rainbow --run';
    console.log("aane de yaar");

    console.log("aa bhi gya");
    exec(cmd,function()
    {
        var fileName='rainbow/output.png';
        var b64=fs.readFileSync(fileName,{encoding:'base64'});
        T.post('media/upload',{media_data:b64},uploaded);

    });
    function uploaded(err,data,response){
        var id=data.media_id_string;
        var tweet={
            status:'#shootwithvansh live from node.js and yet again',
                media_ids:[id]
        };
        T.post('statuses/update',tweet, function (err, data, response) {
            console.log(data)
        })
    }
}