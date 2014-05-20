Ember.Handlebars.helper('stars', function(value, options) {
  var stars = '';
  for(var i = 0; i < 5; i++){
    if(value>=0.5){
      stars += '<span class="glyphicon glyphicon-star"></span>';
    } else {
      stars += '<span class="glyphicon glyphicon-star-empty"></span>';
    }
    value--;
  }
  return new Ember.Handlebars.SafeString(stars);
});
