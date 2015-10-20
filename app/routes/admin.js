import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend({
	session: Ember.inject.service('session'),

	model: function() {
		return Ember.RSVP.hash({
			plays: this.store.findAll('play'),
			members: this.store.findAll('member'),
			posts: this.store.findAll('post'),
			histories: this.store.findAll('history')
		});
	},

	init: function() {
		this._super();
		console.log('admin route init',this.get('session'));
	},

	actions: {
		logout: function() {
			this.get('session').invalidate().then(function() {
				console.log('logout');
			});
		}
	}

});
