import Ember from 'ember';

export default Ember.Component.extend({

	init: function() {
		this._super();
	},

	onModelChange: Ember.computed('model.images.[]',function(item) {
		console.log('changed');
		console.log(item);
	}),

	dragOver: function(event) {
        event.preventDefault();
    },

    dragEnter: function(event) {
        event.preventDefault();
    },

    dragLeave: function(event) {
        event.preventDefault();
    },

    drop: function(event) {
        event.stopPropagation();
        event.preventDefault();

        var data = event.dataTransfer.files;
        console.log(data);
        var self = this;
        for(var i=0;i<data.length;i++) {
            console.log(data[i]);
            if(data[i].type.indexOf('image') > -1) {
            	var fileReader = new FileReader();
            	fileReader.onload = function(event) {
            		console.log(event);
            		self.sendAction('action',event.target.result);
            	}
            	fileReader.readAsDataURL(data[i]);
            }
        }
    },



})
