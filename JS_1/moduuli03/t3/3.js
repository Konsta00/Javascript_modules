document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const names = ["John", "Paul", "Jones"];
  const element = document.querySelector('#target');


  names.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;

    element.appendChild(li)

  });
});
