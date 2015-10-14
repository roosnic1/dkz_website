import Ember from 'ember';

export default Ember.Controller.extend({

	mediumEditorOptions: {
        "buttons": ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"],
	},

	playToEdit: null,
	memberToEdit: null,
	postToEdit: null,
	historyToEdit: null,

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
		imageChanged: function(file,whereTo) {
			console.log(file);
			console.log(whereTo);
			if(file.type.indexOf('image') > -1) {
				this.set(whereTo,file.dataURL);
			} else {
				console.log('not an image');
			}
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
	}


});
