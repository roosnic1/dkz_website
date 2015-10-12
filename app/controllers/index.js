import Ember from 'ember';

export default Ember.Controller.extend({
	newestPost: Ember.computed('model.posts.[]',function() {
		return this.get('model.posts').sortBy('created').get('lastObject');
	}),

	playIndex: 0,

	play: Ember.computed('model.plays.[]', 'playIndex', function() {
		//Use reverse() to get the youngest play first.
		return this.get('model.plays').sortBy('year').reverse()[this.get('playIndex')];
	}),

	actions: {
		nextPlay: function(back) {
			var pi = this.get('playIndex');
			if(!back && pi++ === this.get('model.plays.length')) {
				pi = 0;
			} else if(back && pi-- === 0) {
				pi = this.get('model.plays.length') - 1;
			}
			this.set('playIndex',pi);
		}
	}

});
