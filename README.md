
# Projects in This Repository

This repository contains several projects that I created while following tutorials to enhance my programming skills and learn new concepts. Below is an overview of the projects included and what I learned while building them.

## Table of Contents

- [Rock Paper Scissors Game](#rock-paper-scissors-game)
- [Currency Converter](#currency-converter)
- [Future Projects](#future-projects)
- [Social Media](#social-media)

---

### Rock Paper Scissors Game 🏆

This is a simple and fun game where the player competes against the computer in a classic game of Rock, Paper, Scissors.

#### Key Learnings:

- **JavaScript Functions**: I learned how to write reusable functions to handle game logic, including determining the winner based on player and computer choices.
- **Dynamic HTML Manipulation**: Using JavaScript to update the HTML document dynamically, such as displaying the results and updating scores.

#### Code Example:
```javascript
const playGame = (userChoice) => {
    //generste computer choice
    const compChoice = genComChoice();
    
    if(userChoice === compChoice){
        // this function will print the if the game is draw
        drawGame();
    } else {
        userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        } else {
            userWin = compChoice === "rock" ? false :true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
```

---

### Currency Converter 💸

This project is a web application that allows users to convert amounts between different currencies using live exchange rates.

#### Key Learnings:

- **Fetching APIs**: I learned how to fetch live data from an API and integrate it into a web application.
- **Asynchronous JavaScript**: Using `async` and `await` to handle asynchronous operations effectively.
- **Error Handling**: Debugging and solving issues like undefined values and API errors.
- **Responsive Design**: Ensuring the application works well on different screen sizes.

#### Code Example:
```javascript
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal =1;
        amount.value = "1";
    }
    const URL = `${base_URL}/${fromCurr.value}`;
    let response = await fetch(URL);
    
    let fromCurrData = await response.json();
    let toCurrRate = fromCurrData.conversion_rates[toCurr.value];
    let finalAmount=amtVal*toCurrRate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}` 
}
```

---

### Future Projects 🚀

I plan to create more projects to deepen my understanding of JavaScript and explore advanced concepts. Some ideas include:

- **To-Do List App**: To learn about CRUD operations and local storage.
- **Weather App**: To integrate APIs and display live weather data.
- **Quiz Application**: To enhance logic-building skills and UI design.

---

### Social Media 🌐

Stay connected and follow my journey:

- **Twitter**: [@learnwithkhushi](https://www.twitter.com/learnwithkhushi)
- **GitHub**: [Khushi Nagaliya](https://github.com/khushi1638)

