'use strict'

var JT = angular.module("JT", ['ngRoute'])

JT.config(function($routeProvider) {
	$routeProvider.
	when('/index', {
		templateUrl: 'template/index.html',
		controller: "c_index"
	}).
	when('/menu', {
		templateUrl: 'template/menu.html',
		controller: "c_menu"
	}).
	when('/login', {
		templateUrl: 'template/login.html',
		controller: "c_login"
	}).
	when('/register', {
		templateUrl: 'template/register.html',
		controller: "c_register"
	}).
	otherwise({
		redirectTo: '/index'
	});
})