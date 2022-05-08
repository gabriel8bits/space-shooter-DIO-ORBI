const navePlayer = document.querySelector('.player');
const areaJogo = document.querySelector('#fundoGame');


// jogabilidade 
function voarNave(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if(event.key === " "){
        event.preventDefault();
        disparoLaser();
    }
}

// função de subir a nave
function moveUp() {
    let topPosition = getComputedStyle(navePlayer).getPropertyValue('top');
    if(topPosition === '0px') {
        return
    }else {
        let position = parseInt(topPosition);
        position -= 50;
        navePlayer.style.top = `${position}px`;
    }
} 

// função de descer a nave
function moveDown() {
    let topPosition = getComputedStyle(navePlayer).getPropertyValue('top');
    if(topPosition === "500px") {
        return
    }else {
        let position = parseInt(topPosition);
        position += 50;
        navePlayer.style.top = `${position}px`;
    }
}

// disparo

function disparoLaser() {
    let laser = criarElementoLaser();
    areaJogo.appendChild(laser);
    moveLaser(laser);
}

function criarElementoLaser() {
    let positionX = parseInt(window.getComputedStyle(navePlayer).getPropertyValue('left'));
    let positionY = parseInt(window.getComputedStyle(navePlayer).getPropertyValue('top'));
    let novoLaser = document.createElement('img');

    novoLaser.src = 'img/shoot.png';
    novoLaser.classList.add('laser');
    novoLaser.style.left = `${positionX}px`;
    novoLaser.style.top = `${positionY - 10}px`;

    return novoLaser;
}

function moveLaser(laser) {
    let intervaloLaser = setInterval(() => {
        let xPosition = parseInt(laser.style.left);

        if(xPosition === 340) {
            laser.remove();
        }else {
            laser.style.left = `${xPosition + 8}px`
        }
    }, 10);
}


window.addEventListener('keydown', voarNave);