function removeAtrasado1(){
setTimeout(function(){alerta();}, 1000);
}

function removeAtrasado2(){
setTimeout(function(){alerta();}, 2000);
}

function removeAtrasado3(){
setTimeout(function(){alerta();}, 5000);
}

function removeAtrasado4(){
setTimeout(function(){alerta();}, 10000);
}

function removeAtrasado5(){
setTimeout(function(){alerta();}, 30000);
}

function removeAtrasado6(){
setTimeout(function(){alerta();}, 60000);
}

function alerta(){
alert("Tempo Esgotado");
}


function removeAtrasado(){
	var temp = document.getElementById("tempo").value;
	tempo = temp*1000
	setTimeout(function(){alerta();} , tempo);
}

function alerta(){
	alert("Tempo esgotado");
}