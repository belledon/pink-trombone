var Feeding = require('./feeding.js');

var feeder = Feeding();

feeder.on('data', function(temp) {  
  console.log('temp:', temp);
});
