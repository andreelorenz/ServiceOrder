angular.module("serviceOrder").directive("wiField", function () {
    return {
        templateUrl: "app/wi-framework/wi-directives/wi-directives-partials/wi-field.html",
        scope: {
            object: "=",
            required: "@",
            label: "@",
            name: "@",
            minlength: "@",
            maxlength: "@",
            type: "@",
            size: "@",
            state: "@",
            class: "@",
            placeholder: "@",
            icon: "@"
        }
    };
});