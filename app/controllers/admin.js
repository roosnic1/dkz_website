import Ember from 'ember';

export default Ember.Controller.extend({

	playToEdit: null,
	memberToEdit: null,

	init: function() {
		this._super();
	},


	actions: {
		add: function(type) {
			var nType = this.store.createRecord(type,{});
			this.set(type+'ToEdit',nType);
		},
		save: function(type) {
			// TODO: validate play edits
			var self = this;
			this.get(type+'ToEdit').save().then(function() {
				// TODO: fix duplicate adding. Check github issue.
				self.get(type+'ToEdit.images').forEach(function(item,index,length) {
					item.save();
				});

				self.set(type+'ToEdit',null);

				console.log('Saved ' + type);

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
			item.get('images').forEach(function(item) {
				item.destroyRecord();
			});

			item.destroyRecord().then(function() {
				console.log('Deleted item');
			}, function(err) {
				console.warn('Could not delete item',err);
			});
		},
		addImgToMember: function(base64) {
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
		}
	}


});
