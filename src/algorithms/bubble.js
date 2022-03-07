const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function bubbleSort(list, delay_ms) {
    // hold indices of sorted elements to change colour
    const sortedIndices = [];

    for (let i = 0; i < list.length; i++) {
        // j will be used to compare adjacent pairings
        for (let j = 0; j < list.length - 1 - i; j++) {
            generateChart(list, sortedIndices);
            // If current element is greater than the next one -> swap
            if (list[j] > list[j + 1]) {
                temp_j = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp_j;
                changeBarColor(j, j + 1);
                await delay(delay_ms);
            }
        }
        sortedIndices.push(list.length - 1 - i);
    }
    console.log("sorted");
    return list;
}
