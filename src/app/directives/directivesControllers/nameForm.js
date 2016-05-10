angular.module("serviceOrder").directive("wiNameForm", function () {
    return {
        templateUrl: "app/directives/directivesComponents/wiNameForm.html",
        scope: {
            required: "@",
            label: "@",
            placeholderfirst: "@",
            valuefirst: "@",
            placeholderlast: "@",
            valuelast: "@",
            object: "="
        }
    };
});