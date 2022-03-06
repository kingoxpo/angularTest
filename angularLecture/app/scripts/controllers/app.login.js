"use strict";

angular
  .module("SampleApp")
  .controller("LoginCtrl", function ($scope, loginModel, $state, commonSVC) {
    $scope.form_data = {
      username: "",
      password: "",
    };

    // 로그인
    $scope.onSubmit = function () {
      loginModel.login($scope.form_data, function (state, result) {
        if (state === "success") {
          // 로그인 성공 후 홈화면으로 이동.
          // location.href = "/#!/home";
          $state.go("home");
        }
      });
    };

    // 비밀번호 찾기
    $scope.findpwd = function () {
      commonSVC.openModal("md", {}, "FindPWDCtrl", "views/findpwd.html");
    };
  });
