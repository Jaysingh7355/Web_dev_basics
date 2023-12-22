document.addEventListener('DOMContentLoaded', function () {
    console.log("Welcome to my todo app");

    let todoDataSection = document.querySelector('.todo-data');
    let todoInput = document.querySelector('.todo-input input');
    let saveTodoButton = document.querySelector('.save-todo');

    saveTodoButton.addEventListener('click', function () {
        addTodo();
    });

    function addTodo() {
        let todoItem = document.createElement('div');
        todoItem.classList.add('row', 'todo-item', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center');

        let todoNo = document.createElement('div');
        todoNo.classList.add('todo-no');
        todoNo.textContent = "1"; // You can increment this value for each new todo

        let todoDetails = document.createElement('div');
        todoDetails.classList.add('todo-details');
        todoDetails.textContent = todoInput.value;

        let todoStatus = document.createElement('div');
        todoStatus.classList.add('todo-status');
        todoStatus.textContent = "In Progress";

        let todoActions = document.createElement('div');
        todoActions.classList.add('todo-actions');

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = "Delete";

        let finishedButton = document.createElement('button');
        finishedButton.classList.add('btn', 'btn-success');
        finishedButton.textContent = "Finished";

        todoActions.appendChild(deleteButton);
        todoActions.appendChild(finishedButton);

        todoItem.appendChild(todoNo);
        todoItem.appendChild(todoDetails);
        todoItem.appendChild(todoStatus);
        todoItem.appendChild(todoActions);

        todoDataSection.appendChild(todoItem);

        // Clear the input field after adding a todo
        todoInput.value = "";
    }
});
