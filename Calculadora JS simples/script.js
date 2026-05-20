let display = document.getElementById("display")
let botoes = document.querySelectorAll(".tecla")

botoes.forEach(botao =>{botao.addEventListener("click", () =>{

let valor = botao.textContent

if (valor === "C"){
    display.textContent = ""
}

else if (valor === "="){

try{
display.textContent = eval( display.textContent.replace("X", "*"))

}

catch{display.textContent = "Erro"}

}

else{

display.textContent += valor

}

}



)})