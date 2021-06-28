const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.body,
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomColorOnBody() {
    // let color = colors[randomIntegerFromInterval(0, colors.length -1)];
    let randomColor = randomIntegerFromInterval(0, colors.length -1);

    refs.body.style.backgroundColor = colors[randomColor];
};

let intervalId = undefined;

function onStartBtn() {
    intervalId = setInterval(getRandomColorOnBody, 1000);
    refs.startBtn.disabled = true;
};

function onStopBtn() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
};





