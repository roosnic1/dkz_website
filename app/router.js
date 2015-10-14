import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('plays');
  this.route('members');
  this.route('admin');
  this.route('posts', function() {
  	this.route('post',{path: ':post_id' });
  });

  this.route('history');
});

export default Router;
