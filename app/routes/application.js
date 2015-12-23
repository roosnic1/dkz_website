import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	//session: Ember.inject.service(),


	actions: {
		goToPost: function(id) {
			this.transitionTo('posts.post',id);
		},

		sessionRequiresAuthentication: function() {
      var session = this.get('session');
			this.get('torii')
				.open('google-oauth2-bearer')
				.then(function(googleAuth) {
					var googleToken = googleAuth.authorizationToken.access_token;
					console.log('Google authentication successful');

					session
						.authenticate('authenticator:jwt', {password: googleToken})
						.then(function() {
							console.log('custom token authentication successful!');
						}, function(error) {
							console.log('custom token authentication failed!',error);
						});
				}, function(error) {
					console.error('Google auth failed: ',error.message);
				});
		},

    logout: function() {
      this.get('session').invalidate().then(function() {
        console.log('logout');
      });
    },

    printAuth: function() {
      console.log(this.get('session.isAuthenticated'));
    }
	}
});
