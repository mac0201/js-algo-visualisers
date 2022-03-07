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
        disableControls();
        displayMessage("Sorting...");

        params = getSortParams();

        // Async function that starts the sort
        async function launch() {
            console.log("Sorting started");
            const [list, algorithm, speed] = params;
            const sorted = await startSort(list, algorithm, speed);
            console.log(sorted);
            return sorted;
        }

        launch()
            .then((sorted) => {
                console.log("Sorting complete");
                hideMessage();
                showStartButton();
                enableControls();
                generateChart(sorted, null, colours.GREEN);
                SORTED = true;
            })
            .catch(() => console.log("Error occurred."));
    }
});
