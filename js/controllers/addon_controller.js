App.AddonsController = Ember.ObjectController.extend({
  /* properties */
  search: '',
  sortProperty: 'released',
  sortAscending: true,

  /* sorting and filtering of result */
  sortedAddons: (function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: [this.get('sortProperty')],
      sortAscending: this.get('sortAscending'),
      content: this.get('filteredAddons')
    });
  }).property('filteredAddons','sortProperty'),
  filteredAddons: function() {
    var search = this.get('search');
    var result = this.get('content');
    if(search){
      result = this.get('content').filter(function(addon) {
        var lcSearch = search.toLowerCase();
        var searchableFields = '';
        searchableFields += addon.get('name');
        searchableFields += addon.get('summary');
        searchableFields += addon.get('artifactId');
        searchableFields += addon.get('groupId');
        searchableFields = searchableFields.toLowerCase();
        return searchableFields.indexOf(lcSearch) != -1;
      });
    }
    return result;

  }.property('addon', 'search'),
  /* Counting the filtered addons to show how many results we have */
  addonCount: function() {
    var count = this.get('filteredAddons').get('length');
    return count;
  }.property('filteredAddons'),

  /* Button actions */
  actions: {
    mostRecent: function(){
      $('.sorting-buttons .active').removeClass('active');
      $('#btn-mostRecent').addClass('active');
      this.set('sortProperty', 'released');
      this.set('sortAscending', false);
    },
    highestRated: function(){
      $('.sorting-buttons .active').removeClass('active');
      $('#btn-highestRated').addClass('active');
      this.set('sortProperty', 'avgRating');
      this.set('sortAscending', false);
    },
    topDownloads: function(){
      $('.sorting-buttons .active').removeClass('active');
      $('#btn-topDownloads').addClass('active');
      this.set('sortProperty', 'name');
      this.set('sortAscending', true);
    }
  }
})
