async function b2222ubbleSort(list, speed) {
    if (typeof list == "object") {
        let swaps = 0;
        let current_list = [];

        // Run as long as list is unsorted
        // setInterval(() => {
        for (let i = 0; i < list.length; i++) {
            // j will be used to compare adjacent pairings
            for (let j = 0; j < list.length - 1 - i; j++) {
                // If current element is greater than the next one -> swap
                if (list[j] > list[j + 1]) {
                    // setTimeout(() => {
                    //     console.log("yyyyy");
                    // }, 2000);
                    temp_j = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp_j;
                    console.log("swapping...");

                    swaps++;
                }
            }
        }

        console.log("Done in " + swaps + " swaps");
        console.log(list);
        return list;
    }
    return false;

    // // }, 1000);

    // sorted = false;

    // while (!sorted) {
    //     setInterval(() => {
    //         for (let i = 0; i < list.length; i++) {
    //             // j will be used to compare adjacent pairings
    //             for (let j = 0; j < list.length - 1 - i; j++) {
    //                 // If current element is greater than the next one -> swap
    //                 if (list[j] > list[j + 1]) {
    //                     // setTimeout(() => {
    //                     //     console.log("yyyyy");
    //                     // }, 2000);
    //                     temp_j = list[j];
    //                     list[j] = list[j + 1];
    //                     list[j + 1] = temp_j;
    //                     console.log("swapping...");

    //                     swaps++;
    //                 }
    //             }
    //         }
    //     }, 600);
    //     sorted = true;
    // }

    // console.log(list);
    // return list;
}

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
                console.log("swapping...");
                await delay(delay_ms);
            }
        }
    }
    console.log("sorted");
    console.log(list);
    return list;

    // return new Promise((resolve, reject) => {
    //     const bars = document.querySelectorAll(".bar");

    //     bars[4].style.background = "yellow";

    //     console.log(bars.length);

    //     console.log(bars[3]);

    //     console.log(bars[4]);

    //     sorted = false;

    //     for (let i = 0; i < list.length; i++) {
    //         // j will be used to compare adjacent pairings
    //         // update(list);
    //         for (let j = 0; j < list.length - 1 - i; j++) {
    //             generateChart(list, j);
    //             // If current element is greater than the next one -> swap

    //             if (list[j] > list[j + 1]) {
    //                 // setTimeout(() => {
    //                 //     console.log("yyyyy");
    //                 // }, 2000);
    //                 // generateChart(list, j - 1);
    //                 temp_j = list[j];
    //                 list[j] = list[j + 1];
    //                 list[j + 1] = temp_j;
    //                 console.log("swapping...");
    //                 // console.log(bars[j].attributes.style);
    //                 // console.log(bars[j].style);

    //                 await delay(500);

    //                 // generateChart(list);

    //                 // bars[j + 1].style.background = "yellow";
    //                 // console.log(list);
    //             }
    //         }
    //         sorted = true;
    //     }

    //     if (sorted == true) {
    //         console.log("sorted");
    //         console.log(list);
    //         resolve(list);
    //     } else {
    //         reject("Failed.");
    //     }
    // });
}
