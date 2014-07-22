'use strict'
angular.module("JT")
	.controller("c_login", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 登录"
			$rootScope.backURL = "/#/index"
			$rootScope.showNav = true
		}
	);