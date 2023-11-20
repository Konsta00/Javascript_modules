document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  function clicked() {
    alert('Button Clicked');
  }

  const button = document.querySelector('#button');

  button.addEventListener('click', () => {
    clicked();
  });
});
