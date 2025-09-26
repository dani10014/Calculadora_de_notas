const form = document.getElementById("form");
const tabelaCorpo = document.querySelector("tbody");
const divMediaFinal = document.getElementById("media");

function atualizaMedia() {
    const notasNaTabela = document.querySelectorAll(".nota-valor");
    
    let somaDasNotas = 0;
    
    notasNaTabela.forEach(celula => {
        somaDasNotas += parseFloat(celula.textContent);
    });

    const quantidadeDeNotas = notasNaTabela.length;
    
    const media = quantidadeDeNotas > 0 ? somaDasNotas / quantidadeDeNotas : 0;

    const mediaFormatada = media.toFixed(2);

    let statusSpan = '';
    // A nota de corte para a soma das notas que você mencionou
    const notaDeCorte = 24; 

    if (somaDasNotas >= notaDeCorte) {
        statusSpan = `<span class="resultado aprovado">Aprovado</span>`;
    } else {
        statusSpan = `<span class="resultado reprovado">Reprovado</span>`;
    }

    // Atualiza o HTML para mostrar a média e o status colorido
    divMediaFinal.innerHTML = `<h2>Média Final: <span class="media-final">${mediaFormatada}</span> ${statusSpan}</h2>`;
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    
    const inputMateria = document.getElementById("materia");
    const inputNota = document.getElementById("nota");

    const novaLinha = document.createElement("tr");

    const celulaMateria = document.createElement("td");
    celulaMateria.innerHTML = `<p>${inputMateria.value}</p>`;

    const celulaNota = document.createElement("td")
    celulaNota.innerHTML = `<p class="nota-valor">${inputNota.value}</p>`;

    novaLinha.appendChild(celulaMateria);
    novaLinha.appendChild(celulaNota);

    tabelaCorpo.appendChild(novaLinha);

    atualizaMedia(); 

    inputMateria.value = "";
    inputNota.value = "";
});
