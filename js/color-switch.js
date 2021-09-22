import refs from './refs.js';

const colors = [
  "#42f5f2",
  "#42f542",
  "#e67002",
  "#0dbf10",
  "#c60cf0",
  "#6920fa",
  "#fa336e",
  "#fcff00",
  "#ff1717",
];

const colorSwitch = {
  intervalId: null,
  isActive: false,
}

refs.startBtn.addEventListener('click', onStartChangeColors);
refs.stopBtn.addEventListener('click', onStopChangeColors);

function onStartChangeColors() {
  if (colorSwitch.isActive) {
    return;
  }
  colorSwitch.isActive = true;

  // Запустить интервал

}

function onStopChangeColors() {
  clearInterval(colorSwitch.intervalId);
  colorSwitch.isActive = false;
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};