let taskUserInput = document.querySelector('#userInputTask');
let list = document.querySelector('ul');
let addTask = document.querySelector('#form');



addTask.addEventListener('submit', function(event){

  
    event.preventDefault()

    if (taskUserInput.value.trim() === '') {

        alert('Please Enter Some Task')
    }

    else{

        const li = document.createElement('LI');
        const task = document.createTextNode(taskUserInput.value);

        const deletebtn = document.createElement('BUTTON');
        const editbtn = document.createElement('BUTTON');
        const deleteText = document.createTextNode('Delete');
        const editText = document.createTextNode('Edit');

        deletebtn.setAttribute('onclick', 'deleteTodo(this)');
        editbtn.setAttribute('onclick', 'editTodo(this)');


        deletebtn.appendChild(deleteText);
        editbtn.appendChild(editText);
        li.appendChild(task);
        li.appendChild(deletebtn);
        li.appendChild(editbtn);
        list.appendChild(li);     
        
        }
   
        taskUserInput.value = '';
    
}  )



function deleteTodo(element){

    list.removeChild(element.parentNode);

}

function editTodo(element) {

    let currentTask = element.parentNode.firstChild.nodeValue;
    let editUser = prompt("Enter Edit Value", currentTask);
    element.parentNode.firstChild.nodeValue = editUser;
    
}

