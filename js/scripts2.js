function imc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let res = document.getElementById("resultado");

    let imc = peso / (altura ** 2);

    let mensagem;
    if (imc < 18.5) {
        mensagem = "Você está abaixo do peso.";
    } else if (imc < 25) {
        mensagem = "Vocé está no peso ideal.";
    } else {
        mensagem = "Vocé está acima do peso.";
    }

    res.innerText = "Seu Imc é: " + imc.toFixed(2) + ". " + mensagem;
}