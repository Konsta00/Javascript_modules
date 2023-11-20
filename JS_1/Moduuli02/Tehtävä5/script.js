// Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, 
// the program will announce that the number has already been given and stops its operation
//  and then prints all the given numbers to the console in ascending order. (2p)

document.addEventListener('DOMContentLoaded', () => {
    const nums = [];
    let check = true

    while (check){
        const num = parseInt(prompt('Give a number: '));

        if (nums.length === 0) {
            nums.push(num)
        } else if (nums[nums.length - 1] !== num) {
            nums.push(num)
        } else {
            check = false
        }
    }

    // SORT THE NUMBERS TO ASCENDING ORDER
    nums.sort((a, b) => a - b);

    console.log(nums)
});