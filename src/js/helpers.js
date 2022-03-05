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

const clearDiv = (div_name) => {
    div_name.innerHTML = "";
    console.log(`${div_name} cleared.`);
};
