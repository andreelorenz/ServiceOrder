export function Authenticator ($http, $q, $localStorage) {
    'ngInject';

    this.doLogin = doLogin;

    function doLogin(username, password) {
        var deferred = $q.defer();
        var user = {
            'nmUsuario': username,
            'dsSenha': password
        };
        $http.post('./api/login', JSON.stringify(user))
                .then(
                        function success(response) {
                            if (response.token) {
                                $localStorage.currentUser = {username: username, token: response.token});
//                                var token = jwt.sign(response, secret, {expiresInMinutes: 60 * 5});
                                // add jwt token to auth header for all requests made by the $http service
                                $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
                                deferred.resolve(response.data);
                            } else {
                                deferred.reject('Login request error');
                            }
                        },
                        function error() {
                            deferred.reject('Login request error');
                        });
        return deferred;
    }
}