import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			plays: this.store.findAll('play'),
			members: this.store.findAll('member'),
			posts: this.store.findAll('post')
		});
	}
});
