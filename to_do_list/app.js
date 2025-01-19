// accessing all elements of html
const btn = document.querySelector(".btn");
const tasks = document.querySelector(".tasks");
const items = document.querySelector("#task-items");
const addDate = document.querySelector("#date");

// Adding the date to the para
let date = new Date();
let options = {weekday: "long" , month: "long", day: "numeric"};
let addingDate = date.toLocaleDateString("en-US",options);
addDate.innerText= addingDate;

// this will apply this class to change the color of placeholder when we click on it
tasks.addEventListener("click",function(){
    tasks.classList.add("dynamic-task");
})
//this function here will also change the color of placeholder back to normal when we click on somewhere else
tasks.addEventListener("blur",function(){
    tasks.classList.remove("dynamic-task");
})

//to add items in the list dynamically
const addNewItem = () => {
    let valueOfTask = tasks.value;
    
    //to check if the vale in input is empty
    if(valueOfTask){
        let listItem = document.createElement("li");
        let icon = document.createElement("i");
        icon.className = "fa-regular fa-circle icon";
        listItem.classList.add("dynamic-item");
        listItem.appendChild(icon);
        listItem.appendChild(document.createTextNode(" " + valueOfTask));
        items.appendChild(listItem);
        tasks.value="";
    
    } else{
        alert("Please enter an item.")
    }
}


//marking list item as completed
items.addEventListener("click", function(evt) {
    let targetEvt = evt.target;
    const icon = targetEvt.querySelector("i");
    if(targetEvt.classList.contains("dynamic-item")){
        targetEvt.style.textDecoration = "line-through";
    }
    if(icon){
        icon.style.backgroundColor = "#0074B7";
    }

})


btn.addEventListener("click", addNewItem);