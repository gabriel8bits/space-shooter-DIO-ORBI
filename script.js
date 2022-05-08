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




window.addEventListener('keydown', voarNave);