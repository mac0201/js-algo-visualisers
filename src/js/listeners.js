// ! This file contains event listeners for buttons
const btn_start = document.getElementById("btn_start");
const slider = document.getElementById("size_slider");

btn_start.addEventListener("click", () => {
    console.log("clicked");
});

slider.addEventListener("click", () => {
    const val = document.getElementById("slider_val").value;
    numbers = generateRandomList(val);
    generateChart(numbers);
    console.log(numbers);
});
