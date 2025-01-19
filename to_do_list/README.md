# To-Do List

This is a basic **To-Do List** web page that allows users to add tasks dynamically and mark them as complete. Although it's still a work in progress, the functionality includes adding tasks and marking them as complete with a simple toggle. A feature for removing tasks after they are marked as complete is being worked on.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Challenge

This project was created to practice JavaScript functionality and enhance my understanding of DOM manipulation. The initial goal was to create a functional to-do list that:

1. Allows users to add tasks dynamically.
2. Marks tasks as complete when clicked.
3. (Future) Includes a feature to remove tasks once marked complete.

## My Process

### Code Example 📌

Here’s a snippet of how I dynamically add tasks to the list:

```javascript
const addNewItem = () => {
  let valueOfTask = tasks.value;
  
  // Check if the input value is not empty
  if(valueOfTask) {
    let listItem = document.createElement("li");
    let icon = document.createElement("i");
    icon.className = "fa-regular fa-circle icon";
    listItem.appendChild(icon);
    listItem.appendChild(document.createTextNode(" " + valueOfTask));
    items.appendChild(listItem);
    tasks.value = "";
  } else {
    alert("Please enter an item.");
  }
}

btn.addEventListener("click", addNewItem);
```

### Built With
- **HTML**: To structure the page and the input elements.
- **CSS**: For basic styling of the page and layout.
- **JavaScript**: To add dynamic functionalities like adding tasks, marking them as complete, and handling events efficiently.

### What I Learned

During the development of this project, I learned several important concepts:

1. **Adding Elements Dynamically**: I used JavaScript to create new HTML elements (tasks) dynamically and append them to the DOM.
2. **Event Delegation**: I applied event delegation to handle events on dynamically added elements, which helped me manage interactions more efficiently.like:
```javasrcript
items.addEventListener("click", function(evt) {
  if(evt.target.classList.contains("dynamic-item")) {
    evt.target.style.textDecoration = "line-through";
  }
});
```
3. **Event Bubbling**: I learned about event bubbling and how events propagate from child elements to their parent elements.
4. **Toggling Task Completion**: Implemented functionality where clicking on a task toggles its completion by adding a strikethrough effect.

### Continued Development

The current version of the To-Do list has two primary features:
1. Dynamically adding tasks to the list.
2. Toggling a "completed" state when clicking on a task.

In the next iteration, I plan to:
- Add a **Remove** button to delete tasks after they are marked as complete.
- Make the design **more visually appealing** and **responsive** for mobile use.
- Store tasks in **localStorage** so the to-do list persists across page reloads.

## Author

**Khushi Nagaliya**  
Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/khushinagaliya) or visit my [GitHub](https://github.com/khushi1638).

---
This is a project built from scratch with my own research and debugging, where I learned a lot in the process. Whenever I hit a roadblock, I used **ChatGPT** to get assistance in resolving bugs.

---
