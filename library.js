var unirest = require('unirest');
var fs = require('fs');
module.exports.save = function(postData) {
	sentiment(postData.content, function(result) {
		if(result.pos > result.neg) {
			// positive
			console.log('Positive-' + postData.content);
			// do your business
		} else {
			// negative
			console.log('Negative-' + postData.content);
			// do your business
		}
	});
}

var sentiment = function(text, callback) {
  // These code snippets use an open-source library. http://unirest.io/nodejs
unirest.post("https://text-sentiment.p.mashape.com/analyze")
.header("X-Mashape-Key", "Ri4j5gX4ORmshweHbjBSUUMevXWIp1i0xRujsnjCz7wW9w5zLB")
.field("text", text)
.end(function (result) {
  callback(JSON.parse(result.body));
});
}

/**
 * Sample Response:
 { text: 'i am happy guy',
  totalLines: 1,
  pos: 1,
  neg: 0,
  mid: 0,
  pos_percent: '100%',
  neg_percent: '0%',
  mid_percent: '0%' }
 */