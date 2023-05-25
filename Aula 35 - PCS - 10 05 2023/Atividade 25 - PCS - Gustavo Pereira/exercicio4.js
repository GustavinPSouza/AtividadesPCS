 function verificarIdade() {
      var nome = document.getElementById("nome").value;
      var idade = document.getElementById("idade").value;

      if (nome === "" || idade === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      if (isNaN(idade)) {
        alert("Por favor, digite uma idade válida.");
        return;
      }

      idade = parseInt(idade);

      if (idade >= 18) {
        alert("Olá, " + nome + "! Você é maior de idade.");
      } else {
        alert("Olá, " + nome + "! Você é menor de idade.");
      }
    }