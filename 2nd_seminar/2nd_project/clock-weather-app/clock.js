const dateElement = document.querySelector('.date'),
  digitalTime = document.querySelector('.digital_time'),
  digitalButton = document.querySelector('.digital_button'),
  analogHour = document.querySelector('.analog_hour'),
  analogMinute = document.querySelector('.analog_minute'),
  analogSecond = document.querySelector('.analog_second');

let hour24 = false;

const changeTime = () => {
  if (hour24) {
    hour24 = false;
  } else {
    hour24 = true;
    digitalButton.innerHTML = '24H';
  }
};

const toDoubleDigit = (num) =>
  num.toLocaleString('en-US', { minimumIntegerDigits: 2 });

const getTime = () => {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const day = date.getDate();
  const year = date.getFullYear();
  let month = date.getMonth();
  month = monthList[month];

  if (!hour24) {
    if (hour >= 0 && hour <= 11) {
      if (hour === 0) hour = 12;
      digitalButton.innerHTML = 'AM';
    } else {
      if (hour >= 13) hour -= 12;
      digitalButton.innerHTML = 'PM';
    }
  }
  return { hour, minute, second, month, day, year };
};

const drawClock = (hour, minute, second) => {
  const hourDegree = (hour + minute / 60) * (360 / 12) + 90,
    minuteDegree = (minute + second / 60) * (360 / 60) + 90,
    secondDegree = second * (360 / 60) + 90;
  analogHour.style.transform = `rotate(${hourDegree}deg)`;
  analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
  analogSecond.style.transform = `rotate(${secondDegree}deg)`;
};

const drawTime = () => {
  const { hour, minute, second, year, month, day } = getTime();
  digitalTime.innerHTML = `${toDoubleDigit(hour)} : ${toDoubleDigit(
    minute
  )} : ${toDoubleDigit(second)}`;
  dateElement.innerHTML = `${day} ${month} ${year}`;
  drawClock(hour, minute, second);
};

function init() {
  drawTime();
  setInterval(drawTime, 1000);
  digitalButton.addEventListener('click', changeTime);
}

init();
