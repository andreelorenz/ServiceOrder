angular.module("serviceOrder").directive("wiBtnSave", function () {
    return {
        templateUrl: "app/wi-framework/wi-directives/wi-directives-partials/wi-btn-save.html",
        scope: {
            object: "=",
            uiForm: "=",
            action: "@",
            color: "@",
            icon: "@"
        },
        link: function (scope, element, attb, ctrl){
          scope.save = function (object, uiform){
              console.info('onClick wiBtnSave');
              console.log(object);
              console.log(uiform);
          };
        }
    };
});