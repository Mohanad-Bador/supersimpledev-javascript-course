const todoList = JSON.parse(localStorage.getItem('todo')) || [];
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  
  todoList.forEach(function(todoObject, index) {
    const {name, date} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button class="delete-button"
        onclick="todoList.splice(${index},1);
        localStorage.setItem('todo', JSON.stringify(todoList));
        renderTodoList();
        ">Delete
      </button>`;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const nameInputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-date-input');
  const name = nameInputElement.value;
  const date = dateInputElement.value;
  todoList.push({
    // name: name,
    // date: date,
    name, 
    date});
  localStorage.setItem('todo', JSON.stringify(todoList));
  // resets value in the input box
  nameInputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}