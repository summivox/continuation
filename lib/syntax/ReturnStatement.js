var ReturnStatement = module.exports = function(argument) {
  this.type = 'ReturnStatement';
  this.argument = argument;
  this.async = false;
};

ReturnStatement.prototype.normalize = function (place) {
  place.push(this);
  return place;
};

ReturnStatement.prototype.transform = function (place) {
  place.push(this);
  return place;
};
