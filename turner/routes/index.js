
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.cnnbrktweets = function(req, res){
  res.render('cnnbrktweets',{title:'CNN Tweets',noOfTweets:10});
};



