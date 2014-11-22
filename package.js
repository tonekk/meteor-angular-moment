Package.describe({
  name: 'tonekk:angular-moment',
  summary: 'moment.js AngularJS directives in MeteorJS. What else.',
  version: '1.0.0',
  git: 'https://github.com/tonekk/meteor-angular-moment'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('mrt:moment', 'client');
  api.use('urigo:angular', 'client');
  api.addFiles('lib/angular-moment/angular-moment.js', 'client');
});
