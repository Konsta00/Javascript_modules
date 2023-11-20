document.addEventListener('DOMContentLoaded', () => {

    const img = document.querySelector('#target');
    const element = document.querySelector('#trigger');
    
    element.addEventListener('mouseover', (e) => {
        img.src = 'img/picB.jpg';
    });

    element.addEventListener('mouseout', (e) => {
        img.src = 'img/picA.jpg';
    });

});
