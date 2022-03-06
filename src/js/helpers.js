//! this file will contain helper functions and an object with colours
const colours = {
    RED: "#ff4b25",
    GREEN: "#6cc230",
    BLUE: "#0b88ba",
    PURPLE: "#af34cd",
    PINK: "#ff50ad",
    YELLOW: "#d3e446",
    ORANGE: "#fea122",
};

const speeds_ms = {
    slow: 400,
    medium: 300,
    fast: 200,
};

const clearDiv = (div_name) => {
    div_name.innerHTML = "";
    console.log(`${div_name} cleared.`);
};

const overview = document.querySelector(".overview");

const toggleOverview = () => {
    overview.style =
        "display: flex; \
        justify-content: center; \
        align-items: center;";
};

const updateOverview = () => {
    // element.classList.remove("mystyle");
    toggleOverview();

    const div = document.querySelector(".overview");
    const span_speed = div.querySelector("#overview_speed");
    const span_size = div.querySelector("#overview_size");
    const span_algo = div.querySelector("#overview_algo");

    const query_speeds = document.querySelectorAll('input[name="speed"]');
    const query_algos = document.querySelectorAll('input[name="sort-algo"]');

    const size = document.getElementById("slider_val").value;

    chosen_speed = getCheckedRadio(query_speeds);
    chosen_size = size;
    chosen_algo = getCheckedRadio(query_algos);

    span_speed.innerHTML = chosen_speed;
    span_size.innerHTML = chosen_size;
    span_algo.innerHTML = chosen_algo;
};

const getCheckedRadio = (parent) => {
    for (let i = 0; i < parent.length; i++) {
        if (parent[i].checked) {
            return parent[i].value;
        }
    }
    return null;
};

const changed = (speed) => {
    console.log(`Changed to ${speed.value}`);
};

// ! Change to toggle controls
const disableControls = () => {
    const controls = document.getElementById("controls");

    if (controls.classList.contains("disabled")) {
        // Enable
        console.log("Enabled");
        controls.classList.remove("disabled");
    } else {
        // Disable
        console.log("Disabled");
        controls.classList.add("disabled");
    }
    // controls.className = 'disabled';
};

const enableControls = () => {};
