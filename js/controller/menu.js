'use strict'
angular.module("JT")
	.controller("c_menu", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 目录"
			$rootScope.backURL = "/#/index"
			$rootScope.showNav = true
			
		}
	);