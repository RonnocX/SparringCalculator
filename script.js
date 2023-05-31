const redAddButton = document.querySelector('#red-add');
const redWarningButton = document.querySelector('#red-warning');
const redMinusButton = document.querySelector('#red-minus');
const redCount = document.querySelector('#red-count');
let redScore = 0;
let redWarnings = 0;

const blueAddButton = document.querySelector('#blue-add');
const blueWarningButton = document.querySelector('#blue-warning');
const blueMinusButton = document.querySelector('#blue-minus');
const blueCount = document.querySelector('#blue-count');
let blueScore = 0;
let blueWarnings = 0;

const resetButton = document.querySelector('#reset');

redAddButton.addEventListener('click', () => {
  redScore++;
  redCount.textContent = redScore;
});

redWarningButton.addEventListener('click', () => {
  redWarnings++;
  if (redWarnings === 3) {
    redScore--;
    redCount.textContent = redScore;
    redWarnings = 0;
  } else {
    redWarningButton.classList.add('warning');
  }
});

redMinusButton.addEventListener('click', () => {
  redScore--;
  redCount.textContent = redScore;
});

blueAddButton.addEventListener('click', () => {
  blueScore++;
  blueCount.textContent = blueScore;
});

blueWarningButton.addEventListener('click', () => {
  blueWarnings++;
  if (blueWarnings === 3) {
    blueScore--;
    blueCount.textContent = blueScore;
    blueWarnings = 0;
  } else {
    blueWarningButton.classList.add('warning');
  }
});

blueMinusButton.addEventListener('click', () => {
  blueScore--;
  blueCount.textContent = blueScore;
});

resetButton.addEventListener('click', () => {
  redScore = 0;
  redCount.textContent = redScore;
  redWarnings = 0;
  redWarningButton.classList.remove('warning');
  blueScore = 0;
  blueCount.textContent = blueScore;
  blueWarnings = 0;
  blueWarningButton.classList.remove('warning');
});
