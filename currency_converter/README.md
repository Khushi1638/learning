
# Currency Converter 💱

This currency converter was created by following a tutorial. During the process of building this project, I encountered some challenges, which are listed below.

## Table of Contents 📜

- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Challenges I Faced](#challenges-i-faced)
  - [Continued Development](#continued-development)
- [Author](#author)

## My Process 🛠️

### Built With

- Semantic HTML5 markup ✅
- CSS 🎨
- Flexbox 📏
- JavaScript 🛑
- Fetch API 🌐

### What I Learned 📘

I learned many new concepts while working on this project, especially in JavaScript. Here are the key takeaways:

#### 1. Fetching APIs 🌐

I learned how APIs work and how to interact with them using JavaScript. This included understanding endpoints, parsing responses, and handling errors effectively.

**Example Code:**
```javascript
const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
const data = await response.json();
console.log(data);
```

#### 2. Async and Await Functions ⏳

I understood how to use `async` and `await` to manage asynchronous operations, making the code more readable and easier to debug.

**Example Code:**
```javascript
async function getRates() {
  try {
    let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getRates();
```

#### 3. Event Listeners 🎧

I explored how event listeners work and how to use them to handle user interactions dynamically.

**Example Code:**
```javascript
const button = document.querySelector("#convertButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

### Challenges I Faced 😅

While working on this project, I faced several challenges:

- **Non-functional API:** The API link provided in the tutorial did not work. This initially caused confusion, and I had to research alternative APIs to use for this project.
- **Undefined Values:** When I integrated the new API, I encountered issues where values were displayed as `undefined`. After extensive research and debugging, I identified the root cause and implemented solutions to resolve the issue.
- **Debugging:** Testing various parts of the code to pinpoint bugs and understanding how data was being fetched and manipulated taught me a lot about debugging techniques and best practices.

### Continued Development 🚀

I aim to continue learning new skills related to JavaScript. My next steps include:

- Building more projects independently to enhance my problem-solving and logical reasoning skills.
- Exploring advanced JavaScript concepts and libraries such as React.js to further my knowledge and expand my capabilities.
- Focusing on optimizing my code for better performance and scalability.

## Author ✍️

- Twitter - [@learnwithkhushi](https://www.twitter.com/learnwithkhushi)

