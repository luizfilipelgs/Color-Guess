window.onload = iniciando;

function iniciando() {
  
  creatBall();
} 
let cor 


function creatBall() {
  let sectionBall = document.getElementById('section-ball');

  for (let index = 0; index < 6; index += 1) {
    let divBall = document.createElement('div');
    divBall.classList = 'ball';
    document.getElementById('section-ball').appendChild(divBall);
  }
  let ball = document.getElementsByClassName('ball');
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = criarCores();
  }
  listeners ();
  cor = corInicial()
}

function listeners () {
  let ball = document.getElementsByClassName('ball');
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].addEventListener('click', comparador);
  }
  
} 

function corInicial() {
  
  let indexAleatorio = Math.floor(Math.random() * 5);
  console.log(indexAleatorio+1);
  let ball = document.getElementsByClassName('ball');
  let corInicial = ball[indexAleatorio].style.backgroundColor;
  

  let textoCorInicial = document.getElementById("rgb-color");
  textoCorInicial.innerText = corInicial;
  return corInicial;
}


function comparador(event) {
  let corTarget = event.target.style.backgroundColor;
  let textoInt = document.getElementById("answer");
  console.log("COR TARGET " + corTarget + "COR INICIAL " + cor);
  
  
  if (corTarget == cor) {
    textoInt.innerText = "Acertou!"
  } else {
    textoInt.innerText = "Errou! Tente novamente!"
  }  
  
}


function criarCores() {
  
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
 
    return `rgb(${r}, ${g}, ${b})`;
}

function reset() {
  
  let ball = document.getElementsByClassName('ball');
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = criarCores();
  }
  cor = corInicial();

  let textoInt = document.getElementById("answer");
  textoInt.innerText = "Escolha uma cor";

  
}




