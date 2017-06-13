 
angular.module('mock_ibuy').controller('login', function($scope, $window){
	$scope.titulo = "Login - iBuy";
	
	$scope.efetuarLogin = function(usuario){
		localStorage.setItem("login", JSON.stringify(usuario));
		$window.location.href = "produtos.html";
	};
});