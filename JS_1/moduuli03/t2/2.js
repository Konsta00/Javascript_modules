document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#target');

    let li = document.createElement('li');
    li.textContent = 'First item';
    element.appendChild(li);

    let li2 = document.createElement('li');
    li2.textContent = 'Second item';
    li2.className = 'my-item';
    element.appendChild(li2);

    let li3 = document.createElement('li');
    li3.textContent = 'Third item';
    element.appendChild(li3);

    
});