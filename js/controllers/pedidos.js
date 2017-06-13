 
angular.module('mock_ibuy').controller('pedidos', function($scope, $window){
	
	var login = JSON.parse(localStorage.getItem("login"));
	if(login==undefined||login==null){
		$window.location.href = "login.html";
	}
	
	$scope.titulo = "Pedidos - iBuy";
	
	var pedidos = JSON.parse(localStorage.getItem("pedidos"));
	if(pedidos==undefined||pedidos==null){
		pedidos = new Array();
	}
	
	$scope.meusPedidos = pedidos;
	
	$scope.ordenarPedidos = function (campo) {
		$scope.ordenacaoPedidos = campo; 
		$scope.direcaoPedidos = !$scope.direcaoPedidos;
	};
	
});