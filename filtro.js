var busca = document.querySelector("#buscar-aluno");
busca.addEventListener("input", function(){
    var linhas = document.querySelectorAll(".aluno");
    
    linhas.forEach(linha => {
        var nome = linha.querySelector(".name").textContent;
        nome = nome.toLowerCase()
        var busca = this.value.toLowerCase()
        if (!nome.includes(busca)){
            esconder(linha)
        } else {
            mostrar(linha)
        }
    })
})


function esconder(element){
    if (!element.classList.contains("esconder")){
        element.classList.add("esconder")
    }
}

function mostrar(element){
    if (element.classList.contains("esconder")){
        element.classList.remove("esconder")
    }
}

