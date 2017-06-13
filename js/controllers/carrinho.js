 
angular.module('mock_ibuy').controller('carrinho', function($scope, $window){
	
	var login = JSON.parse(localStorage.getItem("login"));
	if(login==undefined||login==null){
		$window.location.href = "login.html";
	}
	
	$scope.titulo = "Carrinho - iBuy";
	
	var pedidos = JSON.parse(localStorage.getItem("carrinho"));
	if(pedidos==undefined||pedidos==null){
		pedidos = new Array();
	}
	
	$scope.produtos = pedidos;
	
	$scope.removerProduto = function(produto){
		$scope.produtos = $scope.produtos.filter(function(prod){
			if(produto.id != prod.id) return prod;
		}); 
		localStorage.setItem("carrinho", JSON.stringify($scope.produtos)); 
	};
	
	$scope.diminuirQuantidade = function(produto){
		if(produto.quantidadeRequerida > 0){
			produto.quantidadeRequerida = produto.quantidadeRequerida-1;
		}	
	};
	
	$scope.aumentarQuantidade = function(produto){
		if(produto.quantidade > produto.quantidadeRequerida){
			produto.quantidadeRequerida = produto.quantidadeRequerida+1;
		} 
	};
	
	$scope.getTotalProdutos = function(produtos){
		var total = 0;
		produtos.forEach(function (produto){
			total += produto.quantidadeRequerida*produto.preco;
		});
		return total;
	}
	
	var getNumeracaoPedido = function(){

		var nrPedido = JSON.parse(localStorage.getItem("nrPedido"));
		if(nrPedido==undefined||nrPedido==null){
			nrPedido = 1;
		}else{
			nrPedido++;
		}
		localStorage.setItem("nrPedido", JSON.stringify(nrPedido));
		
		return nrPedido;
		
	}
	
	$scope.fecharPedido = function(produtos){
		if (confirm("Deseja fechar o pedido?") == false) {
			return;
		}
		
		var pedidos = JSON.parse(localStorage.getItem("pedidos"));
		if(pedidos==undefined||pedidos==null){
			pedidos = new Array();
		}
		
		$scope.produtos = $scope.produtos.filter(function(produto){
			if(produto.quantidadeRequerida > 0) return produto;
		});
		
		$scope.nrPedido++;
		var pedido = {
				numero   : getNumeracaoPedido(),
				data     : new Date(), 
				produtos : $scope.produtos,
				total    : $scope.getTotalProdutos($scope.produtos)
		};
		
		pedidos.push(pedido);
		localStorage.setItem("pedidos", JSON.stringify(pedidos)); 

		$scope.produtos = [];
		localStorage.setItem("carrinho", JSON.stringify($scope.produtos));

		
	};
	
});