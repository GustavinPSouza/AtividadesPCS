function calcularSoma() {
      var numeros = document.getElementById("numeros").value;

      if (numeros === "") {
        alert("Por favor, digite uma lista de números separados por vírgulas.");
        return;
      }

      var listaNumeros = numeros.split(",");
      var soma = 0;

      for (var i = 0; i < listaNumeros.length; i++) {
        var numero = parseFloat(listaNumeros[i]);

        if (isNaN(numero)) {
          alert("Por favor, digite apenas números separados por vírgulas.");
          return;
        }

        soma += numero;
      }

      alert("A soma dos números é: " + soma);
    }