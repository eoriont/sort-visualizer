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

function setup() {
    createCanvas(width, height);
    numbs = makeRandomList();
    console.log(numbs);
    numbs = insertionSort(numbs);
    console.log(numbs);
}

function draw() {
    background(51);
    for (let n of numbs) {
        let index = numbs.indexOf(n);
        fill(sin(n/10)*255, cos(n/10)*255, sin(n/10 + Math.PI)*255)
        rect(index*(width/numbs.length), height, (width/numbs.length), -n*5);
    }
}

function insertionSort(array) {
    let arr = array;
    for (let num of array) {
        let index = arr.indexOf(num);
        let fin = false;
        let testingIndex = index-1;
        while(!fin) {
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