angular.module("serviceOrder").directive("wiBasicUser", function () {
    return {
        templateUrl: "app/directives/directivesComponents/wiBasicUserForm.html",
        scope: {
            object: "="
        }
    };
});