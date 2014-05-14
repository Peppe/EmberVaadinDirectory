App.Router.map(function() {
  this.resource('listing', { path: '/' });
  this.resource('addon', { path: ':addon_id' });
});

App.ListingRoute = Ember.Route.extend({
  model: function() {
    return {
      "page" : page,
      "search" : search,
      "addons" : this.store.find('addon')
    }
  }
});
