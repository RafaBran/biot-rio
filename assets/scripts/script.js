

function calcularN1() {
    let valorProcessualN1 = parseFloat(document.getElementById('valorProcessualN1').value);
    let valorFormalN1 = parseFloat(document.getElementById('valorFormalN1').value);
    blocoAnotacoes = document.querySelector('.feedback__texto');

    resultadoN1 = (valorFormalN1 * 8 + valorProcessualN1 * 2) / 10; 

    if (isNaN(valorProcessualN1) || isNaN(valorFormalN1) || (valorProcessualN1 < 0) || (valorFormalN1 < 0) || (valorProcessualN1 > 10) || (valorFormalN1 > 10)) {
        alert(`ATENÇÃO! Informe valores numéricos de 0 a 10.`);

    } else {
        blocoAnotacoes.innerHTML = `Sua nota final de N1 é: <span>${resultadoN1.toFixed(2)}</span><br><br>`;
        
        notaAcumulada = resultadoN1;
        quantoFalta = notaAcumulada - 16;
        let feedbackTexto = document.querySelector('.feedback__texto');
              
        if (Math.abs(quantoFalta) > 10) {
            feedbackTexto.innerHTML += `ATENÇÃO! <br> Mesmo que você tire 10 na N2 não terá nota suficiente para passar direto. Você terá que fazer a N3.<br><br>`;
            } else {        
            feedbackTexto.innerHTML += `ATENÇÃO! <br> Você precisa tirar ${Math.abs(quantoFalta.toFixed(2))} na nota final de N2 para passar direto.<br><br>`;
        }
    }
}

function calcularN2() {
    let valorProcessualN2 = parseFloat(document.getElementById(`valorProcessualN2`).value);
    let valorFormalN2 = parseFloat(document.getElementById(`valorFormalN2`).value);

    let resultadoN2 = (valorFormalN2 * 8 + valorProcessualN2 * 2) / 10;

    if (isNaN(valorProcessualN2) || isNaN(valorFormalN2) || (valorProcessualN2 < 0) || (valorFormalN2 < 0) || (valorProcessualN2 > 10) || (valorFormalN2 > 10)) {
        alert(`ATENÇÃO! Informe valores numéricos de 0 a 10.`);
    } else {
        blocoAnotacoes.innerHTML += `Sua nota final de N2 é: ${resultadoN2.toFixed(2)}.<br><br>`;

        notaAcumulada += resultadoN2;
        quantoFalta = notaAcumulada - 15;
                
        if (notaAcumulada >= 16) {
            blocoAnotacoes.innerHTML += `PARABÉNS!<br> Você já está aprovado na matéria.<br><br>`;
        } else if (notaAcumulada < 6) {
            blocoAnotacoes.innerHTML += `ATENÇÃO! <br> Infelizmente você ficou com a média menor que 3 na N1 E N2, e por isso está reprovado por nota na matéria.<br><br>`;
        } else {
            blocoAnotacoes.innerHTML += `ATENÇÃO! <br> Você precisa tirar ${Math.abs(quantoFalta.toFixed(2))} na N3 para passar na matéria.<br><br>`;
        }
    }
} 

function calcularN3() {
    let formalN3 = parseFloat(document.getElementById(`formalN3`).value);

    if (isNaN(formalN3) || isNaN(formalN3) || (formalN3 < 0) || (formalN3 > 10)) {
        alert(`ATENÇÃO! Informe valores numéricos de 0 a 10.`);
    } else {
        blocoAnotacoes.innerHTML += `Sua nota de N3 é: ${formalN3.toFixed(2)}.<br><br>`;
        
        notaAcumulada += formalN3;
        quantoFalta = notaAcumulada - 15;
        
        if (notaAcumulada >= 15) {
            blocoAnotacoes.innerHTML += `PARABÉNS!<br> Você já está aprovado na matéria.<br><br>`;
        } else if (notaAcumulada < 9) {
            `ATENÇÃO! <br> Infelizmente você ficou com a média menor que 3 na N1, N2 e N3 , e por isso está reprovado por nota na matéria.<br><br>`;            
        } else {
            blocoAnotacoes.innerHTML += `ATENÇÃO! <br> Você precisa tirar ${Math.abs(quantoFalta.toFixed(2))} na N4 para passar na matéria.<br><br>`;
        }

    }
} 

function calcularN3() {
    let formalN3 = parseFloat(document.getElementById(`formalN3`).value);

    if (isNaN(formalN3) || isNaN(formalN3) || (formalN3 < 0) || (formalN3 > 10)) {
        alert(`ATENÇÃO! Informe valores numéricos de 0 a 10.`);
    } else {
        blocoAnotacoes.innerHTML += `Sua nota de N3 é: ${formalN3.toFixed(2)}.<br><br>`;
        
        notaAcumulada += formalN3;
        quantoFalta = notaAcumulada - 15;
        
        if (notaAcumulada >= 15) {
            blocoAnotacoes.innerHTML += `PARABÉNS!<br> Você já está aprovado na matéria.<br><br>`;
        } else if (notaAcumulada < 9) {
            `ATENÇÃO! <br> Infelizmente você ficou com a média menor que 3 na N1, N2 e N3 , e por isso está reprovado por nota na matéria.<br><br>`;            
        } else {
            blocoAnotacoes.innerHTML += `ATENÇÃO! <br> Você precisa tirar ${Math.abs(quantoFalta.toFixed(2))} na N4 para passar na matéria.<br><br>`;
        }

    }
} 

function calcularN3() {
    let formalN3 = parseFloat(document.getElementById(`formalN3`).value);

    if (isNaN(formalN3) || isNaN(formalN3) || (formalN3 < 0) || (formalN3 > 10)) {
        alert(`ATENÇÃO! Informe valores numéricos de 0 a 10.`);
    } else {
        blocoAnotacoes.innerHTML += `Sua nota de N3 é: ${formalN3.toFixed(2)}.<br><br>`;
        
        notaAcumulada += formalN3;
        quantoFalta = notaAcumulada - 15;
        
        if (notaAcumulada >= 15) {
            blocoAnotacoes.innerHTML += `PARABÉNS!<br> Você já está aprovado na matéria.<br><br>`;
        } else if (notaAcumulada < 9) {
            `ATENÇÃO! <br> Infelizmente você ficou com a média menor que 3 na N1, N2 e N3 , e por isso está reprovado por nota na matéria.<br><br>`;            
        } else {
            blocoAnotacoes.innerHTML += `ATENÇÃO! <br> Você precisa tirar ${Math.abs(quantoFalta.toFixed(2))} na N4 para passar na matéria.<br><br>`;
        }

    }
} 


function calcularN3() {
    let formalN3 = parseFloat(document.getElementById(`formalN3`).value);

    if (isNaN(formalN3) || isNaN(formalN3) || (formalN3 < 0) || (formalN3 > 10)) {
        alert(`ATENÇÃO! Informe valores numéricos de 0 a 10.`);
    } else {
        blocoAnotacoes.innerHTML += `Sua nota de N3 é: ${formalN3.toFixed(2)}.<br><br>`;
        
        notaAcumulada += formalN3;
        quantoFalta = notaAcumulada - 15;
        
        if (notaAcumulada >= 15) {
            blocoAnotacoes.innerHTML += `PARABÉNS!<br> Você já está aprovado na matéria.<br><br>`;
        } else if (notaAcumulada < 9) {
            `ATENÇÃO! <br> Infelizmente você ficou com a média menor que 3 na N1, N2 e N3 , e por isso está reprovado por nota na matéria.<br><br>`;            
        } else {
            blocoAnotacoes.innerHTML += `ATENÇÃO! <br> Você precisa tirar ${Math.abs(quantoFalta.toFixed(2))} na N4 para passar na matéria.<br><br>`;
        }

    }
} 

function calcularN4() {
    let valorN4 = parseFloat(document.getElementById(`valorN4`).value);

    if (isNaN(valorN4) || isNaN(valorN4) || (valorN4 < 0) || (valorN4 > 10)) {
        alert(`ATENÇÃO! Informe valores numéricos de 0 a 10.`);
    } else {
        blocoAnotacoes.innerHTML += `Sua nota de N4 é: ${valorN4.toFixed(2)}.<br><br>`;
        
        notaAcumulada += valorN4;
        quantoFalta = notaAcumulada - 15;
        
        if (notaAcumulada >= 15) {
            blocoAnotacoes.innerHTML += `PARABÉNS!<br> Você foi aprovado na matéria.<br><br>`;
        } else if (notaAcumulada < 9) {
            `ATENÇÃO! <br> Infelizmente você ficou com a média menor que 3 na N1, N2 e N3 , e por isso está reprovado por nota na matéria.<br><br>`;            
        } else {
            blocoAnotacoes.innerHTML += `ATENÇÃO! <br> Infelizmente você não teve a nota necessária para passar na matéria e por isso foi reprovado.`; 
        }

    }
} 


