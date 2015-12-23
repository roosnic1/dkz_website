import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	//session: Ember.inject.service(),


	actions: {
		goToPost: function(id) {
			this.transitionTo('posts.post',id);
		},
		goToPlay: function(id) {
			this.transitionTo('plays.play',id);
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
              session.set('loginError','');
						}).catch(function(error) {
              session.set('loginError','Backend: ' + error);
							console.log('custom token authentication failed!',error);
						});
				}, function(error) {
          session.set('loginError','Google: ' + error.message);
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
