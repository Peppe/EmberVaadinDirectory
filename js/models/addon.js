App.Addon = DS.Model.extend({
  id: function() {
    return this.get('artifcatId');
  },
  artifactId: DS.attr('string'),
  avgRating: DS.attr('number'),
  groupId: DS.attr('string'),
  linkUrl: DS.attr('string'),
  /* licenses missing here */
  licenses: DS.attr('App.Licenses'),
  maturity: DS.attr('string'),
  name: DS.attr('string'),
  oldestRelease: DS.attr('date'),
  proAccount: DS.attr('boolean'),
  released: DS.attr('date'),
  summary: DS.attr('string'),
  version: DS.attr('string'),
});

App.Licenses = DS.Model.extend({
  artifactId: DS.attr('string'),
  free: DS.attr('boolean'),
  licenseFileUri: DS.attr('string'),
  name: DS.attr('string')
});

App.Addon.FIXTURES = [
 {
   id:1,
   "artifactId":"clara",
   "avgRating":"4.875",
   "groupId":"org.vaadin.addons",
   "licenses": {
     "artifactId":"clara",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0" },
   "linkUrl":"http://vaadin.com/addon/clara",
   "maturity":"STABLE",
   "name":"Clara",
   "oldestRelease":"2012-06-12T16:59:33+00:00",
   "proAccount":"false",
   "released":"2014-05-09T12:46:34+00:00",
   "summary":"Declarative UI and Bindings for Vaadin",
   "version":"1.1.0"
 },{
   id: 3,
   "artifactId":"broadcaster",
   "avgRating":"0.0",
   "groupId":"name.oam",
   "licenses":{
     "artifactId":"broadcaster",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0" },
   "linkUrl":"http://vaadin.com/addon/sigslotcustom",
   "maturity":"BETA",
   "name":"SigSlotCustom",
   "oldestRelease":"2014-05-09T04:24:03+00:00",
   "proAccount":"false",
   "released":"2014-05-09T04:24:03+00:00",
   "summary":"realization of Signal-Slot paradigm for Vaadin",
   "version":"1.0.4"
 },{
   id: 4,
   "avgRating":"0.0",
   "licenses":{
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0" },
   "linkUrl":"http://vaadin.com/addon/spring-for-vaadin",
   "maturity":"EXPERIMENTAL",
   "name":"Spring for Vaadin",
   "oldestRelease":"2014-05-07T14:19:10+00:00",
   "proAccount":"false",
   "released":"2014-05-07T14:19:10+00:00",
   "summary":"Vaadin meets with Spring with vaadin-s4v",
   "version":"1.0.0-SNAPSHOT"
 },{
   id: 5,
   "artifactId":"dellroad-stuff-vaadin",
   "avgRating":"5.0",
   "groupId":"org.dellroad",
   "licenses":{
     "artifactId":"dellroad-stuff-vaadin",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0"
   },
   "linkUrl":"http://vaadin.com/addon/spring-stuff",
   "maturity":"STABLE",
   "name":"Spring Stuff",
   "oldestRelease":"2011-10-31T15:41:07+00:00",
   "proAccount":"false",
   "released":"2014-05-07T02:48:52+00:00",
   "summary":"Makes Vaadin and Spring eternally happy together",
   "version":"1.0.882"
 },{
   id: 6,
   "artifactId":"vaadin-cdi",
   "avgRating":"4.2222",
   "groupId":"com.vaadin",
   "licenses":{
     "artifactId":"vaadin-cdi",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0"
   },
   "linkUrl":"http://vaadin.com/addon/vaadin-cdi",
   "maturity":"EXPERIMENTAL",
   "name":"Vaadin CDI",
   "oldestRelease":"2013-04-09T11:53:44+00:00",
   "proAccount":"false",
   "released":"2014-05-05T11:45:56+00:00",
   "summary":"Vaadin CDI",
   "version":"1.0.0.alpha2"
 },{
   id: 7,
   "artifactId":"toggle-button",
   "avgRating":"0.0",
   "groupId":"org.vaadin.pmatti.v7",
   "licenses":{
     "artifactId":"toggle-button",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0"
   },
   "linkUrl":"http://vaadin.com/addon/tgglbttn-v7-add-on",
   "maturity":"STABLE",
   "name":"tgglbttn-v7 Add-on",
   "oldestRelease":"2013-12-18T13:35:57+00:00",
   "proAccount":"false",
   "released":"2014-05-05T11:09:16+00:00",
   "summary":"tgglbttn-v7 is a toggle button widget for Vaadin 7",
   "version":"1.0.2"
 },{
   id: 8,
   "artifactId":"wcslib-vaadin-widget-multifileupload",
   "avgRating":"4.5",
   "groupId":"com.wcs.wcslib",
   "licenses":{
     "artifactId":"wcslib-vaadin-widget-multifileupload",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0"
   },
   "linkUrl":"http://vaadin.com/addon/multifileupload",
   "maturity":"STABLE",
   "name":"MultiFileUpload",
   "oldestRelease":"2013-06-06T10:25:11+00:00",
   "proAccount":"false",
   "released":"2014-05-05T07:17:59+00:00",
   "summary":"Upload multiple files at once and monitor the upload progress or cancel them in a shared window.",
   "version":"1.7.1"
 },{
   id: 9,
   "artifactId":"dawn",
   "avgRating":"4.0",
   "groupId":"org.peimari",
   "licenses":{
     "artifactId":"dawn",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0"
   },
   "linkUrl":"http://vaadin.com/addon/dawn",
   "maturity":"BETA",
   "name":"dawn",
   "oldestRelease":"2014-05-01T20:46:16+00:00",
   "proAccount":"false",
   "released":"2014-05-01T20:46:16+00:00",
   "summary":"Unofficial build of the upcoming Valo theme",
   "version":"1"
 },{
   id: 10,
   "artifactId":"maddon",
   "avgRating":"5.0",
   "groupId":"org.peimari",
   "licenses":{
     "artifactId":"maddon",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0"
   },
   "linkUrl":"http://vaadin.com/addon/maddon",
   "maturity":"STABLE",
   "name":"Maddon",
   "oldestRelease":"2014-02-14T13:58:33+00:00",
   "proAccount":"false",
   "released":"2014-05-01T20:37:33+00:00",
   "summary":"The \"commons library\" for Vaadin, small helpers to avoid amazing amount of boiler plate code.",
   "version":"1.5"
 },{
   id: 11,
   "artifactId":"diagram-builder","avgRating":"0.0",
   "groupId":"org.vaadin",
   "licenses":{
     "artifactId":"diagram-builder",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0"
   },
   "linkUrl":"http://vaadin.com/addon/diagram-builder",
   "maturity":"EXPERIMENTAL",
   "name":"diagram-builder","oldestRelease":"2014-04-25T09:52:26+00:00",
   "proAccount":"false",
   "released":"2014-05-01T19:42:34+00:00",
   "summary":"Component to help designing flow charts in your Vaadin app",
   "version":"1.1"
 },{
   id: 12,
   "artifactId":"itemgrid",
   "avgRating":"3.0",
   "groupId":"org.vaadin.addons",
   "licenses":{
     "artifactId":"itemgrid",
     "free":"true",
     "licenseFileUri":"http://www.apache.org/licenses/LICENSE-2.0.html",
     "name":"Apache License 2.0"
   },
   "linkUrl":"http://vaadin.com/addon/itemgrid",
   "maturity":"BETA",
   "name":"ItemGrid",
   "oldestRelease":"2013-02-04T02:50:46+00:00",
   "proAccount":"false",
   "released":"2014-05-01T19:03:33+00:00",
   "summary":"Item Grid displays items of a container in a grid. Each cell can be rendered individually with a dedicated component.",
   "version":"0.2.1"}
];
