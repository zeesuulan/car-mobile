'use strict'
angular.module("JT")
	.controller("c_index", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 首页"

			
		}
	);
'use strict'
angular.module("JT")
	.controller("c_login", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 登录"

			
		}
	);
'use strict'
angular.module("JT")
	.controller("c_menu", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 目录"

			
		}
	);
'use strict'
angular.module("JT")
	.controller("c_register", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 激活"

			
		}
	);