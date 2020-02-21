console.log("start the bot");
var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg){
    console.log("Follow event");
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('.@' + screenName + ' Welcome to my new follower');
}

//tweetIt();
//milisecond*sec*min
//setInterval(tweetIt,1000*60*10);

function tweetIt(){
    var tweet = {
        status: txt
    }
    T.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) {
       // console.log(data)
    
        if(err){
            console.log('some error')
        }else{
            console.log('no error')
        }
      }
}






