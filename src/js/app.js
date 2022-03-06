//! Main file
const parent = document.querySelector("#chart_container");
// Generate N random numbers between 5 and 1000. Return list of numbers
const generateRandomList = (n) => {
    const list = [];
    for (let i = 0; i < n; i++) {
        const num = Math.floor(Math.random() * (1000 - 5) + 5);
        list.push(num);
    }
    return list;
};

const createBar = (value) => {
    bar = document.createElement("div");
    bar.className = "bar";
    bar.style = `height: ${value / 2}px;`;
    parent.appendChild(bar);
};

const generateChart = (numbers) => {
    clearDiv(parent);
    for (let i of numbers) {
        createBar(i);
    }
};

const GLOBAL_LIST = [];
const TEMP_LIST = [];
