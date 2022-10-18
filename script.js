const cley = document.querySelector('.cley');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    cley.classList.add('jump');

    setTimeout(() =>{
        cley.classList.remove('jump');
    }, 700)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const cleyPosition = +window.getComputedStyle(cley).bottom.replace('px', '');

    if(pipePosition <= 120 && cleyPosition < 80 && pipePosition > 0){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        cley.style.animation = 'none';
        cley.style.bottom = `${cleyPosition}px`

        cley.src = './images/cleyme-over.png';
        cley.style.width = '75px';
        cley.style.marginLeft = '50px';
        
        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown',jump)