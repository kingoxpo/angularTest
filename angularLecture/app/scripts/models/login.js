"use strict";

angular.module("SampleApp").service("loginModel", function (commonSVC) {
  return {
    /**
     * 로그인
     */
    login: function (params, next) {
      const url = `http://localhost:8080/api/loginTest`;

      commonSVC.sendUrl("POST", url, params, function (state, data) {
        next(state, data);
      });
    },
  };
});
