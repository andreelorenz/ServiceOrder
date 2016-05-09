angular.module("serviceOrder").directive("titleDiving", function () {
    return {
        templateUrl: "app/directives/directivesComponents/titleDiving.html",
        scope: {
            icon: "@",
            text: "@"
        }
    };
});