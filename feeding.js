var Readable = require('stream').Readable;  
var util = require('util');

module.exports = Feeding;

function Feeding(options) {  
  if (! (this instanceof Feeding)) return new Feeding(options);
  if (! options) options = {};
  options.objectMode = true;
  Readable.call(this, options);
}

util.inherits(Feeding, Readable);

Feeding.prototype._read = function read() {  
  var self = this;

  getReadingFromFeeding(function(err, feeds) {
    if (err) self.emit('error', err);
    else self.push(feeds);
  });
};