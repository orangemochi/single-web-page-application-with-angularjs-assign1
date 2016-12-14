var app = angular.module('Lunchbox', []);
app.controller('LunchController', LunchController);

function LunchController($scope) {
  $scope.checklunch = function(){
      $scope.msg = "";
      var lunch_menu = $scope.lunchmenu;
      if(!lunch_menu || !lunch_menu.trim()) {
        $scope.msg = "Please enter data first";
      } else {
        var lunch_menu_arr = lunch_menu.split(",");

        // remove empty elements
        for(var i = 0; i<lunch_menu_arr.length; i++) {
          if(!lunch_menu_arr[i]) {
            lunch_menu_arr.splice(i,1);
          }
        }

        if(lunch_menu_arr.length <= 3) {
          $scope.msg = "Enjoy!";
        } else {
          $scope.msg = "Too much!";
        }
      }
  };
};
