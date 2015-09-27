import Ember from 'ember';

export default Ember.Component.extend({

	created: Ember.computed('model.created',function() {
		return new Date(this.get('model.created')).toString();
	}),


	click: function(event) {
		console.log(event);
		this.sendAction('action',this.get('model.id'));
	}
});
