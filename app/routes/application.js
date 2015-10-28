import Ember from 'ember';

export default Ember.Route.extend({


	actions: {
		goToPost: function(id) {
			this.transitionTo('posts.post',id);
		},
		goToPlay: function(id) {
			this.transitionTo('plays.play',id);
		}
	}
});
