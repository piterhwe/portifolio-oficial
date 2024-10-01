// Slider das Imagens

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)




// Slider dos Textos



const textos = document.querySelectorAll('.textos');

let currentTexto = 0;

function hideTextos() {
  textos.forEach(item => item.classList.remove('on-textos'))
}

function showTextos() {
  textos[currentTexto].classList.add('on-textos')
}

function nextTextos() {
  hideTextos()
  if(currentTexto === textos.length -1) {
    currentTexto = 0
  } else {
    currentTexto++
  }
  showTextos()
}

function prevTextos() {
  hideTextos()
  if(currentTexto === 0) {
    currentTexto = textos.length -1
  } else {
    currentTexto--
  }
  showTextos()
}

btnNext.addEventListener('click', nextTextos)
btnPrev.addEventListener('click', prevTextos)
