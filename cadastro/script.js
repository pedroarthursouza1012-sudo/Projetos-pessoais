const alunos = []

const form = document.querySelector(".form-box");
const lista_div = document.querySelector(".lista-div")
const fade = document.querySelector(".blackout")

const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoSelect = document.getElementById("curso");
const enemSelect = document.getElementById("enem");

const mensagem = document.getElementById("p")
const ul = document.getElementById("lista")

function transicao(callback){

    fade.classList.add("show");

    setTimeout(() => {

        callback();

        fade.classList.remove("show");

    }, 800);

}

function mostrarCadastro(){

    form.classList.remove("off");
    lista_div.classList.add("off");

}

function mostrarListaTela(){

    form.classList.add("off");
    lista_div.classList.remove("off");
    lista_div.classList.add("show");

}

function adicionarAluno(nome, idade, curso, enem){

    alunos.push({
        nome,
        idade,
        curso,
        enem
    });

}

function limparFormulario(){

    nomeInput.value = "";
    idadeInput.value = "";

}

function renderizarLista(){

    ul.innerHTML = "";
    ul.classList.add("show");

    alunos.forEach(aluno => {

        const li = document.createElement("li");

        li.textContent =
            `${aluno.nome} (${aluno.idade} anos) - Curso: ${aluno.curso}. ${
                aluno.enem === "true"
                    ? "Vai fazer ENEM"
                    : "Não vai fazer ENEM"
            }`;

        ul.appendChild(li);

    });

}


/* Início da função cadastrar =>*/

function cadastrar(){

    const nome = nomeInput.value;
    const idade = Number(idadeInput.value);
    const curso = cursoSelect.value;
    const enem = enemSelect.value;

    if (!nome || isNaN(idade) || idade <= 0 || idade >=120 || nome == Number(nome)){

        alert("Verifique os dados!");
        return;

    }

    adicionarAluno(nome, idade, curso, enem);

    limparFormulario();

    mensagem.textContent = "Aluno adicionado com sucesso!";

    transicao(() => {

        mostrarListaTela();
        renderizarLista()

    });

}

/* Fim da função cadastrar */


/* Início da função mostrar lista =>*/


/* Fim da função mostar lista */

function adicionar(){

transicao(mostrarCadastro)


}