angular.module("serviceOrder").directive("addressForm", function () {
    return {
        templateUrl: "app/directives/directivesComponents/addressForm.html",
        scope: {
            object: "@"
        }
    };
});