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
    slow: 200,
    medium: 50,
    fast: 1,
};

const clearDiv = (div_name) => {
    div_name.innerHTML = "";
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

const controls = document.getElementById("controls");

// Disable controls for changing sort parameters
const disableControls = () => {
    if (!controls.classList.contains("disabled")) {
        controls.classList.add("disabled");
        console.log("Controls disabled.");
    }
};

// Enable controls for changing sort parameters
const enableControls = () => {
    if (controls.classList.contains("disabled")) {
        controls.classList.remove("disabled");
        console.log("Controls enabled");
    }
    showStartButton();
};

const displayMessage = (txt) => {
    const msg_div = document.createElement("div");
    msg_div.className = "alert_message";
    msg_div.innerHTML = txt;
    controls.appendChild(msg_div);
};

const hideMessage = () => {
    const msg = document.querySelector(".alert_message");
    controls.removeChild(msg);
};

const hideStartButton = () => {
    btn_start.style = "display: none";
};

const showStartButton = () => {
    btn_start.style = "display: inline-block";
};
