import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'posit',
	classNameBindings: ['collapsed:collapsed-post'],

	collapsed: true,

	created: Ember.computed('model.created',function() {
		return moment(this.get('model.created')).format('DD.MM.YYYY');
	}),


	click: function(event) {
		console.log(event);
		this.sendAction('action',this.get('model.id'));
	}
});
