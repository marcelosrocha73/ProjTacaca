//passo01 - criar uma variavel no JS para trabalhar com a listagem do tacaca.
const listaSelecaoTacacas = document.querySelectorAll(".tacaca");


//passo02 - identificar o evento de clique no elemento da listagem.
listaSelecaoTacacas.forEach(tacaca =>{
    tacaca.addEventListener("click", () => {

        //passo03 - remover a classe só do cartão que está aberto.
        const elementoTacacaAberto = document.querySelector(".aberto");
        elementoTacacaAberto.classList.remove("aberto");

        //passo04 - ao clicar em um elemento da lista do tacaca pegar o id desse elemento para mostrar o cartão correspondente.
        const idTacacaSelecionado = tacaca.attributes.id.value;
        const idDoElementoTacacaParaAbrir = "elemento-" + idTacacaSelecionado;
        const elementoTacacaParaAbrir = document.getElementById(idDoElementoTacacaParaAbrir);
        elementoTacacaParaAbrir.classList.add("aberto");

        //passo05 - remover a classe ativo que marca o elemento do tacaca selecionado passando para outro da lista.
        const tacacaAtivoNaListagem = document.querySelector(".ativo");
        tacacaAtivoNaListagem.classList.remove("ativo");

        //passo06 - adicionar a classe ativo no elemento tacaca selecionado.
        const tacacaSelecionadoNaListagem = document.getElementById(idTacacaSelecionado);
        tacacaSelecionadoNaListagem.classList.add("ativo");
    })
})
