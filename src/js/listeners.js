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

        // x()
        //     .then((m) => console.log(m))
        //     .catch((err) => console.log(err));
        // const sorted = await bubbleSort(params[0], 0);
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
