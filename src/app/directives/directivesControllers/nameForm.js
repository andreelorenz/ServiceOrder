angular.module("serviceOrder").directive("nameForm", function () {
    return {
        templateUrl: "app/directives/directivesComponents/nameForm.html",
        scope: {
            required: "@",
            label: "@",
            placeholderfirst: "@",
            valuefirst: "@",
            placeholderlast: "@",
            valuelast: "@",
            object: "@"
        }
    };
});