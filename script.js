const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let percentage = 0

function load() {
    percentage++
    loadingText.innerText = percentage + '%'
    loadingText.style.opacity = scale(percentage, 0, 100, 1, 0)

    bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`
    
    if(percentage > 99) {
        clearInterval(int)
    }
}

const int = setInterval(load, 30)

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}