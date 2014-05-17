App.AddonsController = Ember.ObjectController.extend({
  /* properties */
  search: '',
  sortProperty: 'released',
  sortAscending: true,
  maturity: '',

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
    var maturity = this.get('maturity');
    var result = this.get('content');
    if(search){
      result = result.filter(function(addon) {
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

    if(maturity){
      result = result.filter(function(addon) {
        var maturityFilter = ''
        if(maturity === 'certified'){
          maturityFilter = 'certified';
        } else if(maturity === 'stable') {
          maturityFilter = 'certified stable';
        } else if(maturity === 'beta') {
          maturityFilter = 'certified stable beta';
        }
        return maturityFilter.indexOf(addon.get('maturity').toLowerCase()) != -1;
      });
    }
    return result;

  }.property('addon', 'search', 'maturity'),
  /* Counting the filtered addons to show how many results we have */
  addonCount: function() {
    var count = this.get('filteredAddons').get('length');
    return count;
  }.property('filteredAddons'),

  /* Button actions */
  actions: {
    /* sorting */
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
    },
    /* maturity filters */
    certified: function(){
      $('.maturity-filter .last-active').removeClass('last-active');
      $('#btn-certified').addClass('active');
      $('#btn-stable').removeClass('active');
      $('#btn-beta').removeClass('active');
      $('#btn-experimental').removeClass('active');
      $('#btn-certified').addClass('last-active');
      this.set('maturity', 'certified');
    },
    stable: function(){
      $('.maturity-filter .last-active').removeClass('last-active');
      $('#btn-certified').addClass('active');
      $('#btn-stable').addClass('active');
      $('#btn-beta').removeClass('active');
      $('#btn-experimental').removeClass('active');
      $('#btn-stable').addClass('last-active');
      this.set('maturity', 'stable');
    },
    beta: function(){
      $('.maturity-filter .last-active').removeClass('last-active');
      $('#btn-certified').addClass('active');
      $('#btn-stable').addClass('active');
      $('#btn-beta').addClass('active');
      $('#btn-experimental').removeClass('active');
      $('#btn-beta').addClass('last-active');
      this.set('maturity', 'beta');
    },
    experimental: function(){
      $('.maturity-filter .last-active').removeClass('last-active');
      $('#btn-certified').addClass('active');
      $('#btn-stable').addClass('active');
      $('#btn-beta').addClass('active');
      $('#btn-experimental').addClass('active');
      $('#btn-experimental').addClass('last-active');
      this.set('maturity', '');
    }
  }
})
