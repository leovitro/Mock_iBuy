 
angular.module('mock_ibuy').controller('produtos', function($scope, $window){
	
	var login = JSON.parse(localStorage.getItem("login"));
	if(login==undefined||login==null){
		$window.location.href = "login.html";
	}
	
	$scope.titulo = "Produtos - iBuy";
	
	//TODO alterar fonte de dados
	$scope.produtos = [
		{id: 1	, nome: "Martelo"			, quantidade: 10	, preco: 9.50},
		{id: 2	, nome: "Chave de fenda"	, quantidade: 16	, preco: 7.50},
		{id: 3	, nome: "Furadeira"			, quantidade: 4		, preco: 199.99},
		{id: 4	, nome: "Escada"			, quantidade: 2		, preco: 65.50},
		{id: 5	, nome: "Maleta"			, quantidade: 1		, preco: 40.00},
		{id: 6	, nome: "Pá"				, quantidade: 10	, preco: 10.0},
		{id: 7	, nome: "Serrote"			, quantidade: 7		, preco: 15.50},
		{id: 8	, nome: "Prego"				, quantidade: 1000	, preco: 0.20},		
		{id: 9	, nome: "Madeira 10x20"		, quantidade: 5		, preco: 17.90},
		{id: 10	, nome: "Arame mt."			, quantidade: 100	, preco: 0.50}, 
		{id: 11	, nome: "Plumo"				, quantidade: 10	, preco: 10.50}
	];
	
	$scope.ordenarProdutos = function (campo) {
		$scope.ordenacaoProdutos = campo;
		$scope.direcaoProdutos = !$scope.direcaoProdutos;
	};
	
	$scope.adicionarProduto = function(produto){
		var carrinho = JSON.parse(localStorage.getItem("carrinho"));
		if(carrinho==undefined||carrinho==null){
			carrinho = new Array();
		} 
		
		var existeProduto = carrinho.some(function(prod){
			if(produto.id == prod.id){
				prod.quantidadeRequerida = prod.quantidadeRequerida + 1; 
				return true;
			}
		});
		
		if(!existeProduto){
			produto.quantidadeRequerida = 1;
			carrinho.push(produto);
		} 
		
		localStorage.setItem("carrinho", JSON.stringify(carrinho));
		
		//pseudo callback
	    alert("Produto adicionado com sucesso!");
	};
	
});