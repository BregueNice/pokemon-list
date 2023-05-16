const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    //retirar o modo escuro
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    //modoEscuroAtivo = true

    //substitui o class list remove e add
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        //body.classList.remove("modo-escuro"); substituido por toggle ^

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        //body.classList.add("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});