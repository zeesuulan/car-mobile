'use strict'
angular.module("JT")
	.controller("c_active", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 查看活动"
			$rootScope.backURL = "/#/menu"
			$rootScope.showNav = true
			
		}
	);
'use strict'
angular.module("JT")
	.controller("c_addcar", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 增加车辆信息"
			$rootScope.backURL = "/#/car"
			$rootScope.showNav = true
		}
	);
'use strict'
angular.module("JT")
	.controller("c_bl", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 预约查询"
			$rootScope.backURL = "/#/menu"
			$rootScope.showNav = true
			
		}
	);
'use strict'
angular.module("JT")
	.controller("c_car", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 车辆信息"
			$rootScope.backURL = "/#/menu"
			$rootScope.showNav = true
		}
	);
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
	.controller("c_intro", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 查看活动"
			$rootScope.backURL = "/#/menu"
			$rootScope.showNav = true
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
'use strict'
angular.module("JT")
	.controller("c_sb", 
		function($scope, $rootScope) {
			$rootScope.pageTitle = PAGE_TITLE + "-- 预约服务"
			$rootScope.backURL = "/#/menu"
			$rootScope.showNav = true

			
		}
	);