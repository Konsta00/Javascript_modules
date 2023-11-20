document.addEventListener('DOMContentLoaded', () => {
    const nums = [];
    let check = true

    while (check) {
        const num = parseInt(prompt('Enter a number: '));

        if(num === 0) {
            check = false;
        }

        nums.push(num)
    }

    nums.sort((a, b) => b - a);

    console.log(nums)
});