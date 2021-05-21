
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
   let taskInput = e.target[0].value
   let listElly = document.createElement('li');
  listElly.textContent = taskInput;
  document.querySelector('ul').append(listElly)
  })
})