function greet() {
    let name = document.getElementById('name').value;
    let hello = document.getElementById('user');

    console.log(name)

    hello.innerHTML = `Hello, ${name}!`

}