const addTask = document.querySelector("#addTask");
const submitButton = document.querySelector("#submit");
const modal = document.querySelector("#modal");
const no = document.querySelector("#no");
const yes = document.querySelector("#yes");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");



submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    
    
});


no.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add('hidden');
});


yes.addEventListener("click", function (e) {
    e.preventDefault();
    const input = taskInput.value.trim(); 
    if (input) {    
        const li = document.createElement('li');
        li.classList.add('list-item'); 


        const taskText = document.createElement('span');
        taskText.textContent = input;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Удалить";
        deleteBtn.classList.add('delete-btn');
   

      
        deleteBtn.addEventListener('click', function () {
            li.remove(); 
        });

        const confirmTask = document.createElement('button');
        confirmTask.classList.add('confirm-btn');
        confirmTask.textContent = "Выполнено";
        
        confirmTask.addEventListener('click', function () {
            taskText.style.textDecoration = "line-through";
        });

        const editTask = document.createElement('button');
        editTask.classList.add('edit-btn');
        editTask.textContent = "Редактировать";
        
        editTask.addEventListener('click', function () {
            const newTask = prompt("Введите новое название задачи", taskText.textContent);
            if (newTask) {
                taskText.textContent = newTask;
            }
        });


        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        li.appendChild(confirmTask);
        li.appendChild(editTask);

        taskList.appendChild(li);
        taskInput.value = "";
    }

    modal.classList.add('hidden');
});