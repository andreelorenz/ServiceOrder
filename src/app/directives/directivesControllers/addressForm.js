angular.module("serviceOrder").directive("wiAddressForm", function () {
    return {
        templateUrl: "app/directives/directivesComponents/wiAddressForm.html",
        scope: {
            object: "="
        }
    };
});