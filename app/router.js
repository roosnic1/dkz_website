import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview,{
  location: config.locationType
});

Router.map(function() {
  this.route('plays', function() {
    this.route('play',{ path: ':play_id' });
  });
  this.route('members');
  //this.route('admin');
  this.route('posts', function() {
  	this.route('post',{ path: ':post_id' });
  });

  this.route('history');
  this.route('aboutus');
  this.route('sponsor');
  this.route('login');
});

export default Router;
