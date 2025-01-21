// accessing all elements of html
const btn = document.querySelector(".btn");
const tasks = document.querySelector(".tasks");
const items = document.querySelector("#task-items");
const addDate = document.querySelector("#date");
const clearBtn = document.querySelector(".clear")


// Adding the date to the para
let date = new Date();
let options = {weekday: "long" , month: "long", day: "numeric"};
let addingDate = date.toLocaleDateString("en-US",options);
addDate.innerText= addingDate;

// this will apply this class to change the color of placeholder when we click on it
tasks.addEventListener("click",function(){
    tasks.classList.add("dynamic-task");
});
//this function here will also change the color of placeholder back to normal when we click on somewhere else
tasks.addEventListener("blur",function(){
    tasks.classList.remove("dynamic-task");
});


//Saving the tasks to locan storage
const saveTasks = () => {
    //taking the array to store task
    const tasksArray = [];
    const taskItems = document.querySelectorAll("li");

    taskItems.forEach(task =>{
        tasksArray.push({
            text : task.textContent.trim(),
            completed : task.style.textDecoration === "line-through"
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasksArray));
};

// function to load the task from the local storage

const loadTasks = () => {
    const  storeData = JSON.parse(localStorage.getItem("tasks"));
    console.log(storeData);

    if(storeData){

        storeData.forEach(task => {
            let listItem = document.createElement("li");
            let icon = document.createElement("i");
            icon.className = "fa-regular fa-circle icon";
            listItem.classList.add("dynamic-item");
            const cancel = document.createElement("i");
            cancel.className = "fa-solid fa-xmark cancel-icon";

            listItem.appendChild(icon);
            listItem.appendChild(document.createTextNode(task.text));
            if (task.completed) {
                listItem.style.textDecoration = "line-through";
            }
            cancel.addEventListener("click" , (event) => {
                let cancelIcon = event.target;
                let cancelList = cancelIcon.parentElement;
                cancelList.remove();
                saveTasks();
            });
            listItem.appendChild(cancel);
            items.appendChild(listItem);
        });
    }
};

//to add items in the list dynamically
const addNewItem = () => {
    let valueOfTask = tasks.value;
    
    //to check if the value in input is empty
    if(valueOfTask){
        let listItem = document.createElement("li");
        let icon = document.createElement("i");
        icon.className = "fa-regular fa-circle icon";
        listItem.classList.add("dynamic-item");
        const cancel = document.createElement("i");
        cancel.className = "fa-solid fa-xmark cancel-icon";

        listItem.appendChild(icon);
        listItem.appendChild(document.createTextNode(" " + valueOfTask));
        listItem.appendChild(cancel);
        items.appendChild(listItem);
        tasks.value="";

        cancel.addEventListener("click" , (event) => {
            let cancelIcon = event.target;
            let cancelList = cancelIcon.parentElement;
            cancelList.remove();
            saveTasks();
        });
        saveTasks();
    
    } else{
        alert("Please enter an item.")
    }
}


//marking list item as completed
items.addEventListener("click", function(evt) {
    let targetEvt = evt.target;
    const icon = targetEvt.querySelector("i");
    if(targetEvt.classList.contains("dynamic-item")){
        if(targetEvt.style.textDecoration === "line-through"){
            targetEvt.style.textDecoration = "none";
            icon.style.backgroundColor = " #fff";
        } else{
            targetEvt.style.textDecoration = "line-through";
            icon.style.backgroundColor = " #0074B7";
        }
        saveTasks();
    }
    console.log(targetEvt);
    saveTasks();
});

//writing code to edit the task that i added by double clicking on them

const editTask = function(evt) {
    if(evt.classList.contains("dynamic-item")){
        let task = evt.childNodes[1].textContent.trim();
        console.log(task);
        let input = document.createElement("input");
    
        input.type ="text";
        input.value = task;
        input.className = "edit-input";
        evt.replaceChild(input , evt.childNodes[1]);
        input.focus();
        //now writing the function to save these edit
        const saveEdit = () => {
            let updateText = input.value.trim();
            if(updateText){
                evt.replaceChild(document.createTextNode(" "+updateText),input);
                saveTasks();
            } else{
                alert("Task cannot be empty!!!!");
                input.focus();
            }
        }

        input.addEventListener("blur",saveEdit);

        input.addEventListener("keydown" , (e) => {
            if(e.key === "Enter"){
                saveEdit();
            }
        });
    }
}

//adding the event listner to edit the task after adding them by double clicking on them
items.addEventListener("dblclick",function(evt){
    editTask(evt.target);
});

//adding the new task by clicking on the enter button
tasks.addEventListener("keydown", (e)=> {
    if(e.key === "Enter"){
        addNewItem();
    }
})

// writing function to clear all the list item in the item conntainer 
const clearTask = () =>{
    items.innerHTML ="";
    localStorage.removeItem("tasks");
}

// adding event listner to the clear button
clearBtn.addEventListener("click",clearTask);

btn.addEventListener("click", addNewItem);
window.onload=loadTasks;


