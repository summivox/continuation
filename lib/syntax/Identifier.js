var Identifier = module.exports = function(name) {
  this.type = 'Identifier';
  this.name = name;
  this.async = false;
};

Identifier.prototype.normalize = function () {
};

Identifier.prototype.transform = function (place) {
  return place;
};
