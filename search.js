console.log("start the bot");
var Twit = require('twit');

var config = require('./config');
var params = { 
    q: '@Nigella_Lawson ', 
    count: 3 
};

//console.log(config);

var T = new Twit(config);

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
    }
//console.log(data)
}





