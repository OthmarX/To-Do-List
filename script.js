document.getElementById('addbtn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;  
    
    
    const task = document.createElement('div');
    task.className = 'task';
    task.textContent = taskText;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        task.remove();  
    };
    
     task.appendChild(deleteBtn);

     document.getElementById('tasksxn').appendChild(task);

    taskInput.value = '';
});
