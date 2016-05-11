angular.module("serviceOrder").directive("wiHeaderDiving", function () {
    return {
        templateUrl: "app/wi-framework/wi-directives/wi-directives-partials/wi-header-diving.html",
        scope: {
            icon: "@",
            text: "@"
        }
    };
});