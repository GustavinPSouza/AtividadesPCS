var carro="";
 
var vetorCarros = [];

var stringCarros = "";

function preencheObjeto(){
        var Marca = document.getElementById("txtMarca").value;
        var Modelo = document.getElementById("txtModelo").value;
        var Ano = parseInt(document.getElementById("txtAno").value);
        var Cor = document.getElementById("txtCor").value;
		
		carro = ["Marca: " + Marca, "   Modelo: " + Modelo, "   Ano: " + Ano, "   Cor: " + Cor];
		
		vetorCarros.push(carro);
		
		
}

function mostrarCarro(){
	stringCarros = vetorCarros.join(' <br><br> ');
	
    var lblMostrarCarro = document.getElementById("lblMostrarCarro");
    lblMostrarCarro.innerHTML = stringCarros;
}


function procuraCarro() {
	var idCarro = document.getElementById("mostrarId").value;
	for (i = 0; i = carro.length; i++){
		
	}
	automovel(){
		if(carro)
	}
}


function limpaTxt() {
	document.getElementById("txtMarca").value = "";
	document.getElementById("txtModelo").value = "";
	document.getElementById("txtAno").value = "";
	document.getElementById("txtCor").value = "";
}