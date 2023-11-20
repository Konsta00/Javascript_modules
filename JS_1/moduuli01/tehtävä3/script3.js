function calculate() {
    numbers = document.querySelectorAll('#number');

    let sum = 0;
    let product = 1;
    let average = 0;

    numbers.forEach(number => {
        num = parseInt(number.value)
        
        sum += num
        product *= num
        average = sum / numbers.length;
    });

    document.getElementById('sum').innerHTML = `Numeroiden summa on ${sum}`
    document.getElementById('product').innerHTML = `Numeroiden tulo on ${product}`
    document.getElementById('average').innerHTML = `Numeroiden keskiarvo on ${average}`
}