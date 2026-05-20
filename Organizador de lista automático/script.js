function organizar(){

let pessoas = document.getElementById("nomes").value
 if (!pessoas) return;

let pessoa = pessoas.split(",").map(item => {

const [nome, idade] = item.split("-")
return{

nome: nome.trim(),
idade: Number(idade)}})

let lista = pessoa.sort((a, b) => a.idade - b.idade);

const ul = document.getElementById("listaFinal")
ul.innerHTML = ""

lista.forEach(pessoa =>{

const li = document.createElement("li")
li.textContent = `${pessoa.nome} - ${pessoa.idade} anos`
ul.appendChild(li)

})

}

function limpar(){

const ul = document.getElementById("listaFinal")
ul.innerHTML = ""


}