
let i = 0

function adicionar(){

let input = document.getElementById("tarefa")
let tarefa = input.value

 if (tarefa === "") return;

 

  let li = document.createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    checkbox.addEventListener("change", function() {

    if (checkbox.checked) {
        li.style.textDecoration = "line-through"
        li.style.color = "gray"
    } else {
        li.style.textDecoration = "none"
        li.style.color = "black"
    }

})

    li.appendChild(checkbox)
    li.append(" " + tarefa)

    let lista = document.getElementById("lista")
    lista.appendChild(li)



let numerador = document.createElement("p")
numerador.textContent = i++

if (i<2){

document.getElementById("contador").textContent = i + " Tarefa adicionada"
}

else{

document.getElementById("contador").textContent = i + " Tarefas adicionadas"


}

    input.value = ""
    
}

function limpar(){

let contador = document.getElementById("contador")
contador.textContent = ""

    let lista = document.getElementById("lista")
    lista.textContent = ""

i = 0

}