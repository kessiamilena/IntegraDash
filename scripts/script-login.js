var olhinho = document.querySelector(".olho");
var inputSenha = document.querySelector(".inputSenha");

olhinho.addEventListener("click", mostrarSenha);

function mostrarSenha() {
    if (inputSenha.type == "password") {
        inputSenha.type = "text";
    } else {
        inputSenha.type = "password";
    }
}



