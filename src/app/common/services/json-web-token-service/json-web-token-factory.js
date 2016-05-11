export function JsonWebTokenFactory(JsonWebTokenService, $q) {
    'ngInject';
    var jwt = require('jsonwebtoken');
    
    return {
        create: create
    };

    function create(payload, options) {
        var deferred = $q.defer();
        JsonWebTokenService.getSecretOrPrivateKey().then(
                function (secretOrPrivateKey) {
                    jwt.sign(payload, secretOrPrivateKey, options, function (err, token) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            deferred.resolve(token);
                        }
                    });
                });
        return deferred.promise;
    }
}