document.addEventListener('DOMContentLoaded', () => {

    // TEKISIN ITSE NÄIN
    // const numArray = []

    // let index = 0;

    // while (index < 5) {
    //     const promptNum = parseInt(prompt('Enter a number: '));

    //     numArray.unshift(promptNum)
    //     index++;
    // }
    // console.log(numArray)

    const newArray = []
    const reversedArray = []
    let i = 0;

    while (i < 5) {
        const promptNum = parseInt(prompt('Enter a number: '));

        newArray.push(promptNum)
        i++;
    }

    for (let i = newArray.length - 1; i >= 0; i--) {
        reversedArray.push(newArray[i])
    };

    console.log(reversedArray)

});