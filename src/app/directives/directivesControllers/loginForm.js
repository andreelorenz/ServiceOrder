angular.module("serviceOrder").directive("wiLoginForm", function () {
    return {
        templateUrl: "app/directives/directivesComponents/wiLoginForm.html",
        scope: {
            object: "=",
            typePassword: "@"
        }
    };
});
