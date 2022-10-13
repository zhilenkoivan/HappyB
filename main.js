const btnOpen = document.querySelector('.open')
const btnClose = document.querySelector('.close')
const windowOpen = document.querySelector('.open-window')
const windowClose = document.querySelector('.window-close')
const heartPlace = document.querySelector('.heart-animate')
const colors = ['#F67280', '#E55451', '#A70D2A', '#8C001A', '#810541', 'pink', '#7D0552', '#F778A1', '#FF69B4', '#A74AC7']
let item = 0

btnOpen.addEventListener('click', () => {
    windowOpen.style.display = 'block'
    windowClose.classList.add('window')
    item = 0
})
btnClose.addEventListener('click', () => {
        windowOpen.style.display = 'none'
        windowClose.classList.remove('window')
        document.getElementById("text").value = ''
        startAnimate()
})
function startAnimate() {
    let newInterval = setInterval(() => {
        createHeart()
        if (item >222) {
             clearInterval(newInterval)
        }
    }, 50)
}
function createHeart() {
    item++
    let width = 1800
    const heart = document.createElement('div')
    heart.classList.add("falling-hearts")
    heart.innerHTML = "&hearts;"
    const size = getRandomNumber(50, 160)
    const x = getRandomNumber(0, width - size - 2);
    heart.style.fontSize = `${size}px`
    heart.style.left = `${x}px`
    setColor(heart)
    heartPlace.append(heart)
    setTimeout(() => {
        heart.parentNode.removeChild(heart)
    }, 3000)
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
function setColor(element) {
    const color = getRandomColor();
    element.style.color = color;
}
function getRandomColor() {
    const index =Math.floor(Math.random() * colors.length)
    return colors[index]
}
/////////////////////////////

document.getElementById('flame').addEventListener('click', flameToggle);

function flameToggle() {
    this.classList.toggle('lit');
    this.classList.toggle('out');
}
///////////////////////////////

const nextBtn = document.querySelector('.next')
const hb = document.querySelector('.hb')
const candle = document.querySelector('.candle')
const cake = document.querySelector('.cake')
const hisoka = document.querySelector('.hisoka')
const wrapper = document.querySelector('.wrapper')

nextBtn.addEventListener('click', () => {
    candle.classList.add("candle-out")
    nextBtn.style.opacity = '0'
    hb.style.opacity = '0'
    setTimeout(() => {
        cake.style.opacity = '0'
        candle.style.opacity = '0'
    }, 2000)
    setTimeout(() => {
        cake.style.display = 'none'
        candle.style.display = 'none'
        nextBtn.style.display = 'none'
        hisoka.style.display = 'block'
        wrapper.style.display = 'flex'
        hb.style.display = 'none'

    }, 3000)
})