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

  // if (colorSwitch.isActive) {
  //   return;
  // }
  // colorSwitch.isActive = true;

    refs.startBtn.disabled = true;

  colorSwitch.intervalId = setInterval(() => {
    const color = colors[randomIntegerFromInterval(colors.length - 1)];

    refs.body.setAttribute('style', "background-color: " + color + ";"
)

    // console.log(color);
  }, 1000);

}

function onStopChangeColors() {
  clearInterval(colorSwitch.intervalId);
  refs.startBtn.disabled = false;
  // colorSwitch.isActive = false;
}


const randomIntegerFromInterval = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1) + 0);
};