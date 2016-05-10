angular.module("serviceOrder").directive("wiBtnSave", function () {
    return {
        templateUrl: "app/directives/directivesComponents/wiBtnSave.html",
        scope: {
            object: "=",
            action: "@",
            color: "@",
            icon: "@"
        },
        link: function (scope, element, attb, ctrl){
          scope.save = function (){
              console.info('onClick wiBtnSave');
              console.log(scope.object);
          };
        }
    };
});