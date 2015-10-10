import Ember from 'ember';

export default Ember.Controller.extend({
	newestPost: Ember.computed('model.posts.[]',function() {
		return this.get('model.posts').sortBy('created').get('lastObject');
	}),

	newestPlay: Ember.computed('model.plays.[]', function() {
		return this.get('model.plays').sortBy('created').get('lastObject');
	})

});
