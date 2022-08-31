const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const taskContainer = document.querySelector('.task-container')
const todoArr = [];

submitBtn.addEventListener('click', () =>{
    todoArr.push(input.value);
    clearInput()
    appendTask();
});

function appendTask(){
    clearTasks()
    todoArr.map((taskItem) =>{

            let newTask = document.createElement('li');
            newTask.innerText = taskItem;
            taskContainer.append(newTask);

            const editBtn = document.createElement('button');
            editBtn.innerText = "Edit";
            newTask.append(editBtn);
        
            const removeBtn = document.createElement('button');
            removeBtn.innerText = "X";
            newTask.append(removeBtn);


            function editItem(){
                const saveButton = document.createElement("button");
                saveButton.innerText = "SAVE";

                const editInput = document.createElement("input");
                newTask.replaceWith(editInput, saveButton);


                saveButton.addEventListener("click", () =>{
                    saveButton.remove()

                    let newTask = document.createElement("li");
                    newTask.innerText = editInput.value;
                    editInput.replaceWith(newTask);

                    todoArr.splice(todoArr.indexOf(newTask), 1, newTask.innerText);

                    appendTask();
                })
            };


            removeBtn.addEventListener('click', () => {
                todoArr.splice(todoArr.indexOf(newTask.innerText), 1);
                newTask.remove();
            })

            editBtn.addEventListener('click', () => {
                editItem();
            });

    })

}

function clearTasks(){ 
    taskContainer.innerText = "";
}

function clearInput(){
    input.value = "";
}