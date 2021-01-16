var list = [];
var speedNum = 0;
var frames = 0;
var running = false;
var currentAlg = mergeSort

function makeRandomList() {
  let arr = [];
  for(let i = 0; i < 1000; i++) {
    let fin = false;
    let num;
    while(!fin) {
      num = getRandomInt(0, 1000);
      if (!arr.includes(num)) {
        fin = true;
      }
    }
    arr[i] = num;
  }
  return arr;
}

function resetList() {
  frames = 0
  list = makeRandomList()
  newList = list
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const width = 1000;
const height = 500;

function setup() {
  let canv = createCanvas(width, height);
  canv.parent("parent")
  colorMode(HSB, 100);
  resetList()
}

var newList = []
function draw() {
  background(40);
  if (running) {
    frames++
    let time = Math.floor(speedNum*frames);
    newList = currentAlg(list, time);
  }

  for (let n of newList) {
    let index = newList.indexOf(n);
    noStroke()
    fill(n*2 % 100, 100, 100);
    rect(index*(width/newList.length), height, (width/newList.length), -map(n, 0, width, 0, height));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let slider = document.getElementById("slider")
  slider.addEventListener("input", (e) => {
    speedNum = parseFloat(slider.value)
  })

  let reset = document.getElementById("reset")
  reset.addEventListener("click", (e) => {
    resetList()
  })

  let start = document.getElementById("start")
  start.addEventListener("click", (e) => {
    if (!running) {
      start.classList = "btn btn-danger"
      start.innerHTML = "Stop"
      running = true
    } else {
      start.classList = "btn btn-success"
      start.innerHTML = "Start"
      running = false
    }
  })

  let merge = document.getElementById("merge")
  merge.addEventListener("click", (e) => {
    currentAlg = mergeSort
  })

  let insertion = document.getElementById("insertion")
  insertion.addEventListener("click", (e) => {
    currentAlg = insertionSort
  })
})
