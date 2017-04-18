angular.module('starter').config(function($stateProvider, $urlRouterProvider,$httpProvider) {

	$urlRouterProvider.otherwise('live');
	$stateProvider
		.state('live', {
			url: '/live',
			templateUrl: 'templates/live.html',
			controller: 'liveCtrl',
			controllerAs: 'liveCtrl'
		})

		.state('liveline', {
			url: '/liveline',
			templateUrl: 'templates/liveline.html',
			controller: 'livelineCtrl',
			controllerAs: 'lineCtrl'
		})
	});
