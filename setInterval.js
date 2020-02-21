console.log("start the bot");
var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

tweetIt();

//milisecond*sec*min
setInterval(tweetIt,1000*60*10);

function tweetIt(){

var r = Math.floor(Math.random()*100);

    var tweet = {
        status: 'This is a randon tweet ' + r + ' Testing this today'
    }
    T.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) {
        console.log(data)
    
        if(err){
            console.log('some error')
        }else{
            console.log('no error')
        }
      }
}






