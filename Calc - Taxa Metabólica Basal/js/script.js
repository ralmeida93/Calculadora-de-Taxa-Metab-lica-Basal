const peso = document.querySelector('#peso');
const altura = document.querySelector('#alt');
const idade = document.querySelector('#idade');
const button = document.querySelector('.btn');
let resultado = 0;
const resuTotal = document.querySelector('.resultado-total');

function calcular(event){
    event.preventDefault()
const sexo = document.querySelector('input[name="sexo"]:checked').value;
    
    if(sexo === 'masc'){
        resultado = 66 + (13.7 * Number(peso.value)) + (5 * Number(altura.value)) - (6.8 * Number(idade.value));
    }else if (sexo === 'fam'){
        resultado = 655 + (9.6 * Number(peso.value)) + (1.8 * Number(altura.value)) - (4.7 * Number(idade.value));
    }

    resuTotal.innerText =  resultado; 
}

button.addEventListener('click', calcular);
