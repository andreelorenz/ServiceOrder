angular.module("serviceOrder").directive("basicUser", function () {
    return {
        templateUrl: "app/directives/directivesComponents/basicUser.html",
        scope: {
            object: "@"
        }
    };
});