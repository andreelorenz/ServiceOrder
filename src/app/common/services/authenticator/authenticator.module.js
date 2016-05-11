import { Authenticator }  from './jsonWebToken.service';

export default angular
  .module('serviceOrder.services.JsonWebTokenService', [])
  .service('authenticator', Authenticator)
  .name;