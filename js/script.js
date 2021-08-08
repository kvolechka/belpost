//jshint esversion: 6
import CreateHomePage from './homepage.js';

const btnPrev = document.getElementById('slider-btn-prev'),
  btnNext = document.getElementById('slider-btn-next'),
  slides = document.querySelectorAll('.slider-wrapper__slide');

let index = 0;

const activeSlide = n => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
}

const nextSlide = () => {
  if(index == slides.length -1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length -1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

////////////настройки обновления времени и даты/////////////////

{
  const timeElement = document.querySelector('.header__time-content');
  const dateElement = document.querySelector('.header__date-content');

  let time = `${new Date().toLocaleString('default', {hour: '2-digit', minute: '2-digit'})}`;
  let date = `${new Date().toLocaleString('default', {day: '2-digit', month: 'long'})} ${new Date().getFullYear()}`;

  setTimeout(() => {
    timeElement.innerHTML = time;
    dateElement.innerHTML = date;
  }, 0);
  setInterval(() => {
    time = `${new Date().toLocaleString('default', {hour: '2-digit', minute: '2-digit'})}`;
    date = `${new Date().toLocaleString('default', {day: '2-digit', month: 'long'})} ${new Date().getFullYear()}`;
    timeElement.innerHTML = time;
    dateElement.innerHTML = date;
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////
const boxProcedure = document.querySelector('#box-procedure');
boxProcedure.appendChild(CreateHomePage());


////////////////////////////////////////////////////////////

setTimeout(() => {
  fetch('https://api.openweathermap.org/data/2.5/weather?id=625143&lang=ru&appid=cd36023287f61ddbf4c6515fd0f5163d').then(function (resp) {return resp.json() }).then(function (data) {
  document.querySelector('.header__weather-content').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
  document.querySelector('.header__weather-image').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })
    .catch(function () {
});
}, 0);
setInterval(() => {
  fetch('https://api.openweathermap.org/data/2.5/weather?id=625143&lang=ru&appid=cd36023287f61ddbf4c6515fd0f5163d').then(function (resp) {return resp.json() }).then(function (data) {
  document.querySelector('.header__weather-content').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
  document.querySelector('.header__weather-img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })
    .catch(function () {
});
}, 1000);
