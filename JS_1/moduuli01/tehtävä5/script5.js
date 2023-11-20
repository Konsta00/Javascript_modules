function leapYear() {
    let year = document.getElementById('year').value;
    let result = document.getElementById('result');
    
    const isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

    if (isLeapYear(year)) {
        result.innerHTML = `${year} is a leap year`
    } else {
        result.innerHTML = `${year} is not a leap year`
    }
}