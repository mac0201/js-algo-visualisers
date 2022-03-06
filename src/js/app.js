//! Main file
const parent = document.querySelector("#chart_container");

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

const initialChart = () => {
    initialList = generateRandomList(50);
    console.log(initialList);
    generateChart(initialList);
    getSortParams();
};

const validateStart = () => {
    const query_speeds = document.querySelectorAll('input[name="speed"]');
    const query_algos = document.querySelectorAll('input[name="sort-algo"]');
    if (getCheckedRadio(query_speeds) && getCheckedRadio(query_algos)) {
        console.log("Valid start");
        return true;
    }
    console.log("Not valid start");
    return false;
};

const test = () => {
    console.log("hi");
};

const getSortParams = () => {
    const query_speeds = document.querySelectorAll('input[name="speed"]');
    const query_algos = document.querySelectorAll('input[name="sort-algo"]');
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
    return list, algorithm, speed_int;
};

const startSort = (list, algorithm, speed) => {
    switch (algorithm) {
        case "bubble":
            console.log("bubble");
            break;
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
};
