//Cria o objeto COLDIGO, que será usado como identificador do projeto
COLDIGO = new Object();


$(document).ready(function(){
	$("header").load("/ProjetoTrilhaWeb/pages/admin/general/header.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/admin/general/footer.html");
	
	// função para carregamento de páginas de conteúdo, que recebe como parâmetro o nome da 
	//pasta com a pagina a ser carregada
	COLDIGO.carregaPagina = function(pagename){
		//limpa a tag section, excluindo todo o conteúdo dentro dela
		$("section").empty();
		// carrega a página solicitada dento da tag section
		$("section").load(pagename+"/", function(response, status, info){
			if(status == "erro"){
				var msg = "Houve um erro ao encontrar a página: " + info.status+ " - " + info.statusText;
				$("section").html(msg);
			}
		});
	}

	



});

