var carro = ""

function salvar() {
	carro = {
	marca : document.getElementById("marca").value,
	modelo : document.getElementById("modelo").value,
	ano : document.getElementById("ano").value,
	ano : parseInt(document.getElementById("ano").value),
	cor : document.getElementById("cor").value
	}
}

function informacoes() {
	var labelResultado = document.getElementById("resultado");
	labelResultado.innerHTML = ("O carro é um " + carro.marca + ", " + "Modelo " + carro.modelo + ", " + "ano " + carro.ano + ", " + "cor " + carro.cor);
}