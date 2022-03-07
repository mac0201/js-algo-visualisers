//! Main file
const parent = document.querySelector("#chart_container");
const query_speeds = document.querySelectorAll('input[name="speed"]');
const query_algos = document.querySelectorAll('input[name="sort-algo"]');

const listColour = colours.BLUE;
let SORTED = false;
let listToSort = [];

// Generate N random numbers between 5 and 1000. Return list of numbers
const generateRandomList = (n) => {
    const list = [];
    for (let i = 0; i < n; i++) {
        const num = Math.floor(Math.random() * (1000 - 5) + 5);
        list.push(num);
    }
    listToSort = list;
    return list;
};

// Creates a bar element with variable length (value) and selected colour. Appends to chart container
const createBar = (value, colour) => {
    bar = document.createElement("div");
    bar.className = "bar";
    bar.style = `height: ${value / 2}px; background: ${colour}`;
    parent.appendChild(bar);
};

// Generates a chart by creating required number of bars based on list length
const generateChart = (numbers, sortedIndices, colour = listColour) => {
    clearDiv(parent);
    for (let i = 0; i < numbers.length; i++) {
        if (sortedIndices && sortedIndices.includes(i)) {
            createBar(numbers[i], colours.GREEN);
        } else {
            createBar(numbers[i], colour);
        }
    }
};

// Renders initial chart on page load
const initialChart = () => {
    initialList = generateRandomList(50);
    console.log(initialList);
    generateChart(initialList);
    getSortParams();
};

// Check whether required options have been selected
const validateStart = () => {
    if (getCheckedRadio(query_speeds) && getCheckedRadio(query_algos)) {
        console.log("Valid start");
        return true;
    }
    console.log("Not valid start");
    return false;
};

// Fetch chosen settings and return a list
const getSortParams = () => {
    const speed = getCheckedRadio(query_speeds);
    const algorithm = getCheckedRadio(query_algos);
    const list = listToSort;
    const speed_int = speeds_ms[speed];
    const params = `
    SORTING PARAMETERS: 
    Speed:      ${speed_int}
    Algorithm:  ${algorithm}
    List:       ${list}
    `;
    console.log(params);
    return [list, algorithm, speed_int];
};

// Starts the chosen algorithm
async function startSort(list, algorithm, speed) {
    switch (algorithm) {
        case "bubble":
            const bubble = await bubbleSort(list, speed);
            return bubble;
        case "merge":
            console.log("merge");
            break;
        case "quick":
            console.log("quicksort");
            break;
        default:
            console.log("UNKNOWN");
            break;
    }
}

// Changes the colour of adjacent bar pairs to show which elements are being compared
const changeBarColor = (i, j) => {
    const bars = document.querySelectorAll(".bar");
    bars[i].style["background-color"] = colours.RED; // Current highest
    bars[j].style["background-color"] = colours.PURPLE; // Compared
};

const sortedBarColor = (i) => {
    const bars = document.querySelectorAll(".bar");
    bars[i].style["background-color"] = colours.GREEN;
};
