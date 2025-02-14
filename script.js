document.addEventListener("DOMContentLoaded", function () {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = [];

    const resultado = document.getElementById("resultado");
    const intentosLista = document.getElementById("intentos");
    const inputNumero = document.getElementById("inputNumero");
    const botonEnviar = document.getElementById("botonEnviar");

    botonEnviar.addEventListener("click", function () {
        let numeroUsuario = parseInt(inputNumero.value);
        
        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
            resultado.textContent = "Por favor, introduce un número válido entre 1 y 100.";
            return;
        }

        intentos.push(numeroUsuario);

        if (numeroUsuario === numeroSecreto) {
            resultado.textContent = "Felicidades, adivinaste el número secreto!";
            intentosLista.textContent = "Números introducidos: " + intentos.join(", ");
            botonEnviar.disabled = true;
        } else {
            resultado.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
        }

        inputNumero.value = "";
        inputNumero.focus();
    });
});