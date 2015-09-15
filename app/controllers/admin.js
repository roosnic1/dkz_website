import Ember from 'ember';

export default Ember.Controller.extend({

	nplay: null,

	init: function() {
		this._super();
		if(this.get('nplay') === null) {
			this.set('nplay',{});
		}
	},



	actions: {
		savePlay: function() {
			var np = this.get('nplay');
			console.log(np);
			if(np.title.length > 0 && np.description.length > 0) {
				var p = this.store.createRecord('play',np);
				p.save();
				console.log('saved record');
			}
		},
		testAction: function() {
			console.log(this.get('model'));
		}
	}


});
