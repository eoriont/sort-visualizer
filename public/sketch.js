var numbs = [];

function makeRandomList() {
    let arr = [];
    for(let i = 0; i < 100; i++) {
        let fin = false;
        let num;
        while(!fin) {
            num = getRandomInt(0, 100);
            if (!arr.includes(num)) {
                fin = true;
            }
        }
        arr[i] = num;
    }
    return arr;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const width = 500;
const height = 500;

var slider;

function setup() {
    createCanvas(width, height);
    colorMode(HSB, 100);
    numbs = makeRandomList();

    slider = createSlider(0, 5000, 0);
}

function draw() {
    background(40);
    console.log(slider.value())

    insertionSort(numbs, frameCount/(map(slider.value(), 0, 5000, 5000, 0)));

    for (let n of numbs) {
        let index = numbs.indexOf(n);
        fill(n*2 % 100, 100, 100);
        rect(index*(width/numbs.length), height, (width/numbs.length), -n*5);
    }
}

function insertionSort(array, iteration) {
    let arr = array;
    for (let num of array) {
        let index = arr.indexOf(num);
        let fin = false;
        let testingIndex = index-1;
        let iters = 0;
        while(!fin) {
          if (iters >= iteration) return;
          iters += 1;
            if (arr[testingIndex] == null) {
                fin = true;
                break;
            }
            if (arr[testingIndex] > num) {
                let temp2 = arr[index];
                arr[index] = arr[testingIndex];
                arr[testingIndex] = temp2;
                index -= 1;
                testingIndex = index-1;
            } else {
                fin = true;
                break;
            }
        }
    }
    return arr;
}
