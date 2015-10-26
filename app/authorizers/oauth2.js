/*import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

export default OAuth2Bearer.extend();*/

import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
	authorize: function(sessionData, block) {
		if(sessionData.authorizationToken && sessionData.authorizationToken.access_token !== '') {
			block('Authorization', 'Bearer ' + sessionData.authorizationToken.access_token);
		}
	}
});