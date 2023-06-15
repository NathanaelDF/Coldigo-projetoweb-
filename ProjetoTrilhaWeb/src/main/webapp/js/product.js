COLDIGO.produto = new Object();

$(document).ready(function() {
	// carrega as marcas registradas no BD no select do formulario de inserir
	COLDIGO.produto.carregaMarcas = function() {
		$.ajax({
			type: "GET",
			url: "/ProjetoTrilhaWeb/rest/marca/buscar",
			success: function (){
				
			},
			error: function(){
				
			}
		})
	}
});