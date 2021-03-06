import DS from 'ember-data';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.RESTAdapter.extend(DataAdapterMixin,{
	host: ENV.backendURL,
	namespace: 'api',
	authorizer: 'authorizer:token'
});
