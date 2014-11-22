Package.describe({
  name: 'tonekk:angular-moment',
  summary: 'moment.js AngularJS directives in MeteorJS. What else.',
  version: '1.0.2',
  git: 'https://github.com/tonekk/meteor-angular-moment'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('mrt:moment@1.7.0', 'client');
  api.use('urigo:angular@0.5.7', 'client');
  api.addFiles('lib/angular-moment/angular-moment.js', 'client');
});
