angular.module("serviceOrder").directive("wiTitleDiving", function () {
    return {
        templateUrl: "app/directives/directivesComponents/wiTitleDiving.html",
        scope: {
            icon: "@",
            text: "@"
        }
    };
});