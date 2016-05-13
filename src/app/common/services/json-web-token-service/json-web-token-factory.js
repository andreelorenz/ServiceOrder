export function JsonWebTokenFactory(JsonWebTokenService, $q) {
    'ngInject';
    var jwt = require('jsonwebtoken');
    
    return {
        create: create,
        verify: verify
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
    
    function verify(token, options) {
        var deferred = $q.defer();
        JsonWebTokenService.getSecretOrPrivateKey().then(
                function (secretOrPrivateKey) {
                    jwt.sign(token, secretOrPrivateKey, options, function (err, response) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            deferred.resolve(response);
                        }
                    });
                });
        return deferred.promise;
    }
}