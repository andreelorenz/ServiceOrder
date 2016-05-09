angular.module("serviceOrder").directive("buttonSave", function () {
    return {
        templateUrl: "app/directives/directivesComponents/buttonSave.html",
        scope: {
            object: "@",
            action: "@",
            color: "@",
            icon: "@"
        },
        link: function (scope, element, attb, ctrl){
          scope.save = function (){
              console.log(scope);
              console.log(element);
              console.log(attb);
              console.log(ctrl);
          };
        }
    };
});