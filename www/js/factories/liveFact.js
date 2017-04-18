angular.module('starter').factory('liveFact', function($http,CONFIG){
	var fact = {};

	fact.getUpdate = function(){
		var req = {
			method: 'GET',
			url: CONFIG.URL + '/api/latest_update',
			headers: {
				'Content-Type':"application/json",
				'Accept':"application/vnd.cricket.v1"
			}
		};
		return $http(req)
};
	return fact;
});