    const erro_div = document.querySelector(".visivel")
    const ativo_div = document.querySelector(".oculto")


    function recarregar(callback){

        alert("Aguarde...")

        setTimeout(() => {
            callback()
        },5000);

    }

    function msg(){

    alert("Página carregada");
    erro_div.classList.add("oculto")
    erro_div.classList.remove("visivel")
    ativo_div.classList.remove("oculto")
    ativo_div.classList.add("visivel")

    }