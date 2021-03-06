var CatchClause = module.exports = function(param, guard, body) {
  this.type = 'CatchClause';
  this.param = param;
  this.guard = guard;
  this.body = body;
  this.async = false;
};

CatchClause.prototype.normalize = function (place) {
  this.param.normalize();
  this.body.normalize();
};

CatchClause.prototype.transform = function (place) {
  var newPlace = this.body.transform(place);
  if (this.body.async) {
    this.async = true;
    return newPlace;
  }
  return place;
};
