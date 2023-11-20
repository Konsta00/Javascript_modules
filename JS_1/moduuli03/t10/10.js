const form = document.querySelector("#source");
const element = document.querySelector('#target');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);
  let hello = 'Your name is';

  formData.forEach((element) => {
    hello += ` ${element}`;
  });

  element.innerHTML = hello;
});
