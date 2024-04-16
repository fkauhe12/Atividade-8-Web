function validacao(){
    let nome = document.getElementById("nome").value;
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let res = document.getElementById("resultado");
    
    if(usuario == "Felipe" && senha == "reidofire") {
        res.innerText = "Seja Bem vindo(a)" + nome + "!";
    }else{
        res.innerText = "Inválido"
    }
}
