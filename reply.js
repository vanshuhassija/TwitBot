console.log("replying the twitter bot");
var Twit=require('twit');
var config=require('./config');
var T=new Twit(config);
var stream=T.stream('user');
stream.on('tweet',tweetEvent);
function tweetEvent(eventMsg){
    var replyto=eventMsg.in_reply_to_screen_name;
    var text=eventMsg.text;
    var from=eventMsg.user.screen_name;
    var time=new Date().getSeconds();
    if(replyto=='Trial99699012')
    {
        var newtweet='@'+from+'Thanku for tweeting me #shootwithvansh have a nice day at'+time;
        tweetIt(newtweet);
    }
}
function tweetIt(txt){
    var tweet={
        status:txt
    }
    T.post('statuses/update',tweet,tweeted);
    function tweeted(err,data,response){
        if(err){
            console.log("An error occured");
        }
        else{
            console.log("Hurray it worked!");
        }

    }
}