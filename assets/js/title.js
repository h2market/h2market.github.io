// Array containing different titles to cycle through
var titles = [
  "$ h2market > all", 
  "$ h2market = cheap", 
  "$ h2market = better", 
  "$ h2market is just the best", 
  "$ h2market...", 
  "$ h2market..",
  "$ h2market.", 
  "$ buy from h2market"  
];

function changeTitle() {
  var index = 0; 
  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  },
  2000); 
}

changeTitle();
