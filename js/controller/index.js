'use strict'
angular.module("JT")
	.controller("c_index", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 首页"
			$rootScope.showNav = false

			
		}
	);