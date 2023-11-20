const trigger = document.querySelector('#trigger');
const img = document.querySelector('#target');

trigger.addEventListener('mouseover', () =>{
    img.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseout', () => {
    img.src = 'img/picA.jpg';
});