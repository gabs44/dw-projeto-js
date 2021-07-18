var botao = document.querySelector("#adicionar-aluno");
botao.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-aluno");
    var aluno = obtemNota(form);


    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno")
    

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("name");
    var nota1Td = document.createElement("td");
    var nota2Td = document.createElement("td");
    var nota3Td = document.createElement("td");
    var media = document.createElement("td");
    var situacao = document.createElement("td");

    nomeTd.textContent = aluno.nome;
    nota1Td.textContent = aluno.nota1;
    nota2Td.textContent = aluno.nota2;
    nota3Td.textContent = aluno.nota3;
    media.textContent = aluno.media;
    situacao.textContent = aluno.situacao;

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(nota1Td);
    alunoTr.appendChild(nota2Td);
    alunoTr.appendChild(nota3Td);
    alunoTr.appendChild(media);
    alunoTr.appendChild(situacao);

    var tabela = document.querySelector("#tabela-aluno");
    tabela.appendChild(alunoTr);
    
});


function obtemNota(form){
    var nota1 = parseFloat(form.Nota1.value)
    var nota2 = parseFloat(form.Nota2.value)
    var nota3 = parseFloat(form.Nota3.value)
    var media = calcularMedia([nota1, nota2, nota3]);
    var aluno = {
        nome : form.Nome.value,
        nota1 : nota1,
        nota2 : nota2,
        nota3 : nota3,
        media: media,
        situacao: calculaSituacao(parseFloat(media))
    };

    return aluno;

}

function calcularMedia(notas){
    var soma = 0.0;
    notas.forEach(nota => {
        soma += nota
    });
    var media = soma / notas.length
    return media.toFixed(2)
}

function calculaSituacao(media){
    if (media >= 7.0){
        return "aprovado";
    }
    else if (media < 4.0){
        return "reprovado";
    }
    else{
        return "prova final";
    }

}

