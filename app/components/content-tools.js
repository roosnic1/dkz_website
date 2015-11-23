import Ember from 'ember';

export default Ember.Component.extend({

	editor: undefined,
	content: '',
	model: undefined,
	name: '',

	init: function() {
		this._super();
		this.set('content',this.get('model'));
	},

	initEditor: function() {
		var ed = ContentTools.EditorApp.get();
		ed.init('[data-editable]','data-name');
		this.set('editor',ed);

		var self = this;
		ed.bind('save',function(regions) {
			self.set('model',regions[self.get('name')]);
		});

		ContentTools.IMAGE_UPLOADER = this.get('imageUploader');

	}.on('didInsertElement'),


	imageUploader: function(dialog) {
		var image, xhr, xhrComplete, xhrProgress;

		dialog.bind('imageUploader.cancelUpload', function() {
			console.log('cancel upload');
			if(xhr) {
				xhr.upload.removeEventlistener('progress',xhrProgress);
				xhr.removeEventlistener('readystatechange',xhrComplete);
				xhr.abort();
			}
			dialog.state('empty')
		});

		dialog.bind('imageUploader.clear', function() {
			dialog.clear();
			image = null;
		});

		dialog.bind('imageUploader.fileReady',function(file) {
			var formData;

			xhrProgress = function(ev) {
				dialog.progress((ev.loaded / ev.total) * 100);
			}

			xhrComplete = function(ev) {
				var response;

				if(ev.target.readyState != 4) {
					return;
				}

				xhr = null;
				xhrProgress = null;
				xhrComplete = null;

				if(parseInt(ev.target.status) === 200) {
					response = JSON.parse(ev.target.responseText);

					image = {
						size: response.size,
						url: response.url
					};

					console.log(image);

					dialog.populate(image.url,image.size);

				} else {
					new ContentTools.FlashUI('no');
				}
			}

			dialog.state('uploading');
			dialog.progress(0);

			formData = new FormData();
			formData.append('image',file);

			xhr = new XMLHttpRequest();
			xhr.upload.addEventListener('progress',xhrProgress);
			xhr.addEventListener('readystatechange',xhrComplete);
			xhr.open('POST','/api/upload_image',true);
			xhr.send(formData);
		});


		dialog.bind('imageUploader.save', function() {
			var crop, cropRegion, formData;

			xhrComplete = function(ev) {
				if(ev.target.readyState !== 4) {
					return;
				}

				xhr = null;
				xhrComplete = null;

				dialog.busy(false);

				if(parseInt(ev.target.status) === 200) {
					var response = JSON.parse(ev.target.responseText);
					console.log(response);
					dialog.save(response.url,response.size,{'alt': response.alt, 'data-ce-max-width': image.size[0]});
				} else {
					new ContentTools.FlashUI('no');
				}
			};

			dialog.busy(true);

			xhr = new XMLHttpRequest();
			xhr.addEventListener('readystatechange', xhrComplete);
        	xhr.open('POST', '/api/insert_image', true);
        	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        	xhr.send(JSON.stringify({
        		url: image.url,
        		width: 600
        	}));

		});

	},

	willDestroy: function() {
		this._super();
		this.get('editor').unbind('save');
		this.get('editor').destroy();
	}

});
