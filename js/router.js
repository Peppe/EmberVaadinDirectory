App.AddonSerializer = DS.JSONSerializer.extend({
  primaryKey: 'name'
});

App.Router.map(function() {
  this.resource('addons', { path: '/' }, function () {
    this.resource('addon', { 'path' : '/:addon_id' });
  });
});

App.AddonsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('addon');
  }
});

App.AddonsIndexRoute = Ember.Route.extend({
   controllerName: 'addons'
  /*model: function () {
    return this.modelFor('addons');
  },
  conroller: function () {
    return this.controllerFor('addons');
  }*/
});
