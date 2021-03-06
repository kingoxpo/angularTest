"use strict";

angular
  .module("SampleApp", ["ui.router", "ui.bootstrap"])
  .config(function ($stateProvider, $urlRouterProvider) {
    // 매칭되지 않는 뷰로 요청이 오면 보여줄 기본 뷰
    $urlRouterProvider.otherwise("/login");
    // 뷰와 url, html파일, 컨트롤러 연결
    $stateProvider
      .state("login", {
        url: "/login",
        templateUrl: "views/login.html",
        controller: "LoginCtrl",
      })
      .state("home", {
        url: "/home",
        templateUrl: "views/home.html",
        controller: "HomeCtrl",
      })
      .state("main", {
        url: "/main",
        templateUrl: "views/main.html",
        controller: "MainCtrl",
      });
  });
