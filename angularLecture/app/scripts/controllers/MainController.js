"use strict";

//Load controller
angular.module("SampleApp").controller("MainCtrl", [
  "$scope",
  function ($scope) {
    $scope.test = "메인컨트롤러 테스트...";
  },
]);
