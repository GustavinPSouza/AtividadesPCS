var carro="";//Define uma variável chamada "carro" que recebe "".
var vetorCarros = [];//Define uma variável chamada "vetorCarros" que recebe os itens salvos pelo usuario.
var stringCarros = "";//Define uma variável chamada "stringCarros" que recebe "".

function preencheObjeto(){//Inicia a função "preencherObjeto".
    
    var Marca = document.getElementById("txtMarca").value;//Define uma variável chamada "Marca" que recebe o elemento atraves do id definido como "txtMarca"
    var Modelo = document.getElementById("txtModelo").value;//Declara uma variável chamada "Modelo" e atribui a ela o valor do campo de entrada de texto com o id "txtModelo" no documento HTML.
    var Ano = parseInt(document.getElementById("txtAno").value);//Declara uma variável chamada "Ano" e atribui a ela o valor do campo de entrada de texto com o id "txtAno" no documento HTML. O valor é convertido para um número inteiro usando a função parseInt.
    var Cor = document.getElementById("txtColor").value;//Declara uma variável chamada "Cor" e atribui a ela o valor do campo de entrada de texto com o id "txtColor" no documento HTML.

    carro = ["Marca: " + marca, "Modelo: " + modelo, "Ano: " + Ano, "Cor: " + Cor];//Cria um array chamado "carro" que contém quatro elementos. Os elementos são strings concatenadas que representam a marca, modelo, ano e cor do carro. No entanto, observe que as variáveis "marca" e "modelo" não foram definidas anteriormente, então pode haver um erro nessa linha.
    vetorCarros.push(carro);//Adiciona o array "carro" ao final do array "vetorCarros". 

    
    
}

function mostrarCarro(){//Inicia a função "mostrarCarro".
	stringCarros = vetorCarros.join(' <br> ');//Cria uma nova string chamada "stringCarros" concatenando todos os elementos do array "vetorCarros" separados por um espaço seguido de uma quebra de linha HTML ("<br>"). O resultado é uma representação formatada dos carros armazenados no array.
	
	
    var lblMostrarCarro = document.getElementById("lblMostrarCarro");//Declara uma variável chamada "lblMostrarCarro" e atribui a ela o elemento com o id "lblMostrarCarro" no documento HTML. Provavelmente é uma etiqueta (label) usada para exibir o resultado.

    lblMostrarCarro.innerHTML = stringCarros;//Atribui a propriedade "innerHTML" do elemento "lblMostrarCarro" com o valor da string "stringCarros". Isso atualiza o conteúdo exibido no elemento com a representação formatada dos carros.
}

function limpaTxt(){//Inicia a função "limpaTxt".
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtModelo").value = "";
    document.getElementById("txtAno").value = "";
    document.getElementById("txtColor").value = "";
	//Essas linhas atribuem uma string vazia aos campos de entrada de texto com os ids "txtMarca", "txtModelo", "txtAno" e "txtColor" no documento HTML. Essa ação efetivamente limpa os valores dos campos após a execução do código.
}