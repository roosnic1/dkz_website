import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
	//session: Ember.inject.service('session'),


	actions: {
		goToPost: function(id) {
			this.transitionTo('posts.post',id);
		},

		sessionRequiresAuthentication: function() {
			var self = this;
			this.get('session').authenticate('authenticator:torii','google-oauth2-bearer').then(function(data) {
				console.log('suc');
			}, function(error) {
				console.log(error);
			});

			/*this.get('torii')
				.open('google-oauth2-bearer')
				.then(function(googleAuth) {
					var googleToken = googleAuth.authorizationToken.access_token;
					console.log('Google authentication successful');

					session
						.authenticate('simple-auth-authenticator:jwt', {password: googleToken})
						.then(function() {
							console.log('custom token authentication successful!');
						}, function(error) {
							console.log('custom token authentication failed!',error);
						});
				},function(error) {
					console.error('Google auth failed: ',error.message);
				});*/
		}
	}
});
