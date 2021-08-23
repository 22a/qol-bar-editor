import EmberRouter from '@ember/routing/router';
import config from 'qol-bar-editor/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('to-json');
  this.route('from-json');
  this.route('from-schema');
});
