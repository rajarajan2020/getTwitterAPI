console.log("start the bot");
var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var tweet = {
    status: 'Testing this today'
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





