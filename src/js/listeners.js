// ! This file contains event listeners for buttons
const btn_start = document.getElementById("btn_start");
const slider = document.getElementById("size_slider");

const speeds = document.querySelectorAll('input[name="speed"]');
const sort_algos = document.querySelectorAll('input[name="sort-algo"]');

slider.addEventListener("click", () => {
    updateOverview();
    const val = document.getElementById("slider_val").value;
    numbers = generateRandomList(val);
    generateChart(numbers);
    console.log(numbers);
    getSortParams();
});

speeds.forEach((speed) =>
    speed.addEventListener("change", () => updateOverview())
);

sort_algos.forEach((algo) =>
    algo.addEventListener("change", () => updateOverview())
);

btn_start.addEventListener("click", () => {
    console.log("STARTED");
    // getSortParams();
    // console.log(document.getElementById("slider_val").value);

    if (validateStart()) {
        console.log("SORTING STARTED!!!");
        startSort(0, "bubble", 0);
    } else {
        console.log("NOT STARTED");
    }
    // disableControls();
    // !! Start button should be disabled until speed and algorithm is set

    // !! Disable all controls

    // !! Enable when sorting is done

    // console.log(speeds.length);

    // for (let i = 0; i < speeds.length; i++) {
    //     if (speeds[i].checked) {
    //         console.log("checked");
    //         console.log(speeds[i]);
    //     }
    // }
    // updateOverview();

    // console.log(speed_settings2);
    // console.log(speed_settings);
});

// const x = speed_settings.find;
