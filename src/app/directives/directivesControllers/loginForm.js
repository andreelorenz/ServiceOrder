angular.module("serviceOrder").directive("loginForm", function () {
    return {
        templateUrl: "app/directives/directivesComponents/loginForm.html",
        scope: {
            object: "@",
            typePassword: "@",
        }
    };
});