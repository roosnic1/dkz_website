import Ember from 'ember';

export default Ember.Controller.extend({

	playToEdit: null,
	memberToEdit: null,
	postToEdit: null,

	init: function() {
		this._super();
	},


	actions: {
		add: function(type) {
			var nType = this.store.createRecord(type,{
				created: new Date().getTime(),
				updated: new Date().getTime()
			});
			this.set(type+'ToEdit',nType);
		},
		save: function(type) {
			// TODO: validate edits bevore save
			var self = this;
			var toSave = this.get(type+'ToEdit');
			toSave.set('updated',new Date().getTime());
			toSave.save().then(function() {
				self.set(type+'ToEdit',null);
			}, function(err) {
				console.warn('Could not save ' + type,err);
			});
		},
		edit: function(type,item) {
			this.set(type+'ToEdit',item);
		},
		cancel: function(type,item) {
			item.rollback();
			this.set(type+'ToEdit',null);
		},
		delete: function(item) {
			item.destroyRecord().then(function() {
				console.log('Deleted item');
			}, function(err) {
				console.warn('Could not delete item',err);
			});
		}
		/*addImgToMember: function(base64) {
			var img = this.store.createRecord('image',{
				name: '',
				description: '',
				createdAt: new Date().getTime(),
				imgData: base64
			});
			this.get('memberToEdit.images').addObject(img);
		},
		addImgToPlay: function(base64) {
			var img = this.store.createRecord('image',{
				name: '',
				description: '',
				createdAt: new Date().getTime(),
				imgData: base64
			});
			this.get('playToEdit.images').addObject(img);
		}*/
	}


});
