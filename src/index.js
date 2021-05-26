document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
   let taskInput = e.target[0].value
   let listElly = document.createElement('li');
   let delBtn = document.createElement('button');
   delBtn.textContent = ('x')
  listElly.textContent = taskInput;
  document.querySelector('ul').append(listElly)
  listElly.append(delBtn)
  delBtn.addEventListener('click', (e)=>{
    listElly.remove()
  })
  let deeperListElly = document.createElement('div')
  listElly.appendChild(deeperListElly)
  deeperListElly.innerHTML = `<select>
  <option value="red">High</option>
  <option value="yellow">Medium</option>
  <option value="green">Low</option>
  </select>`
  deeperListElly.addEventListener('change', (e) => {
    listElly.style.color = e.target.value
  })
  })
})