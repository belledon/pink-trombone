

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
})

export var Toucher =
{
	reader : rl
	touches : []

	init : function()
	{
		
	}

};

export var Touch =
{
	x : 0.0,
	y : 0.0,
};