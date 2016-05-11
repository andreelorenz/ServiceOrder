angular.module("serviceOrder").directive("wiLogin", function () {
    return {
        templateUrl: "app/directives/directivesComponents/wiLoginPanel.html",
        scope: {
            object: "=",
            typePassword: "@",
        }
    };
});
