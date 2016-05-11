import { JsonWebTokenService }  from './json-web-token.service';
import { JsonWebTokenFactory }  from './json-web-token-factory';

export default angular
  .module('serviceOrder.services.json-web-token', [])
  .service('JsonWebTokenService', JsonWebTokenService)
  .factory('JsonWebTokenFactory', JsonWebTokenFactory)
  .name;