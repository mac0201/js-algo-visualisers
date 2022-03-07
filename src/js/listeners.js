// ! This file contains event listeners for buttons
const btn_start = document.getElementById("btn_start");
const slider = document.getElementById("size_slider");

const speeds = document.querySelectorAll('input[name="speed"]');
const sort_algos = document.querySelectorAll('input[name="sort-algo"]');

slider.addEventListener("click", () => {
    SORTED = false;
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
    if (SORTED) {
        console.log("Aready sorted..");
    } else if (validateStart() && !SORTED) {
        hideStartButton();
        displayMessage("Sorting...");
        disableControls();
        params = getSortParams();
        console.log(params);

        async function start() {
            const sorted = await startSort(params[0], params[1], params[2]);
            console.log(sorted);
            return sorted;
        }

        start().then((sorted) => {
            hideMessage();
            showStartButton();
            enableControls();
            console.log("end");
            generateChart(sorted, null, colours.GREEN);
            SORTED = true;
        });
    }
});
