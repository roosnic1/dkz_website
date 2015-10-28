import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'playpre',

	click: function(event) {
		this.sendAction('action',this.get('model.id'));
	}
});
