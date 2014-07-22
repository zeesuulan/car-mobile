'use strict'
angular.module("JT")
	.controller("c_index", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 首页"
			$rootScope.showNav = false

			
		}
	);
'use strict'
angular.module("JT")
	.controller("c_login", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 登录"
			$rootScope.backURL = "/#/index"
			$rootScope.showNav = true
		}
	);
'use strict'
angular.module("JT")
	.controller("c_menu", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 目录"
			$rootScope.backURL = "/#/index"
			$rootScope.showNav = true
			
		}
	);
'use strict'
angular.module("JT")
	.controller("c_register", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 激活"
			$rootScope.backURL = "/#/index"
			$rootScope.showNav = true
			
		}
	);