const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function bubbleSort(list, delay_ms) {
    for (let i = 0; i < list.length; i++) {
        // j will be used to compare adjacent pairings
        // update(list);
        for (let j = 0; j < list.length - 1 - i; j++) {
            generateChart(list, j);
            // If current element is greater than the next one -> swap
            if (list[j] > list[j + 1]) {
                temp_j = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp_j;
                changeBarColor(j, j + 1);
                // console.log("swapping...");
                await delay(delay_ms);
            }
        }
        // sortedBarColor(i);
    }
    console.log("sorted");
    // console.log(list);
    return list;
}
