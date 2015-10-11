import Ember from 'ember';

export default Ember.TextField.extend({
	type: 'file',

	toValue: undefined,

	change: function(e) {
		var self = this;

		var inputFiles = e.target.files;
		if(inputFiles.length < 1) {
			return;
		}

		var inputFile = inputFiles[0];

		var fileInfo = {
			name: inputFile.name,
			type: inputFile.type || 'n/a',
			size: inputFile.size,
			date: inputFile.lastModifiedDate ? inputFile.lastModifiedDate.toLocaleDateString() : 'n/a'
		}

		var fileReader = new FileReader();

		fileReader.onload = function(e) {
			var fileReader = e.target;
			fileInfo.dataURL = fileReader.result;

			self.sendAction('fileChange',fileInfo,self.get('toValue'));
		}

		fileReader.readAsDataURL(e.target.files[0]);
	}
});
