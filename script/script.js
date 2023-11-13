const $ = (selector) => {
    return document.querySelector(selector);
}

const hora = $('.hora');
const punto = $('.punto');
const minuto = $('.minuto');
const semana = $('.semana');
let showMinuto = true;

function update(){
    showMinuto = !showMinuto;
    const now = new Date();

if(showMinuto){
    punto.classList.add('invisible');
} else{
    punto.classList.remove('invisible');
}
hora.textContent = String(now.getHours())
    .padStart(2, '0S');
minuto.textContent = String(now.getMinutes())
    .padStart(2, '0S');

    Array
        .from(semana.children)
        .forEach(
            (ele) => {
                ele.classList.remove ('active');
            }
        );
semana
    .children[now.getDay()]
    .classList
    .add('active');
};

setInterval (update, 500);
