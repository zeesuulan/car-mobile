var JT = angular.module("JT", ['ngRoute'])

JT.config(['$routeProvider',
	function($routeProvider) {

		$routeProvider.
		when('/index', {
			templateUrl: 'template/index.html',
			controller: "c_index"
		}).
		otherwise({
			redirectTo: '/index'
		});
	}
])