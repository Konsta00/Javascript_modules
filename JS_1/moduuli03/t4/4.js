document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const element = document.querySelector('#target');
  const students = [
    {
      name: 'John',
      id: '2345768',
    },
    {
      name: 'Paul',
      id: '2134657',
    },
    {
      name: 'Jones',
      id: '5423679',
    },
  ];

  for(let student of students) {
    const option = document.createElement('option');
    option.innerText = student.name;
    option.value = student.id;

    element.appendChild(option);

  }
  
});

