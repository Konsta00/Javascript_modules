document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#target');

    element.firstChild.innerHTML = 'First item';
    const li = document.querySelectorAll('li');

    li[0].innerHTML = 'First item';
    li[1].innerHTML = 'Second item';
    li[2].innerHTML = 'Third item';
    
    element.className = 'my-list';
});