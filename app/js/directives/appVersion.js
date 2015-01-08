angular.module('app').directive('appVersion', function(version) {
	return function(scope, elm, attrs) {
		return elm.text(version);
	};
});
