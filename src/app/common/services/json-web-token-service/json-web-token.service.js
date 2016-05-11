export function JsonWebTokenService ($http, $q) {
    'ngInject';

    this.getSecretOrPrivateKey = getSecretOrPrivateKey;

    function getSecretOrPrivateKey() {
        var deferred = $q.defer();
        $http.post('./api/generateSecretOrPrivateKey')
                .then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response.status);
                        });
        return deferred;
    }
}