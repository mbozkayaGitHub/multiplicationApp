 const num1 = Math.ceil(Math.random()*10)   // 1. aşama 

//  console.log(num1); 

const num2 = Math.ceil(Math.random()*10) // 2. aşama 


const questionEl = document.getElementById("question"); //3. aşama - create the question


const inputEl = document.getElementById("input") // 7. aşama inside of box

const formEl = document.getElementById("form") // 6. aşama- to keep track of answer

const scoreEl = document.getElementById("score")  // 19. aşama 



let score = JSON.parse(localStorage.getItem("score")); // 17. aşama 

 
if (!score) {                     // 18. aşama if there is not score , set score to zero 
    score = 0
}

scoreEl.innerText = `score: ${score}`   // 20. aşama

// let score = 0; // 12. aşama  17 den sonra iptal 


questionEl.innerText = `What is ${num1} multiply by ${num2} ?` //4. aşama - display question on screen and use backtick&${} to have different kind of question. ??use refresh a couple of times??? 



const  correctAns = num1 * num2;   // 5. aşama 



formEl.addEventListener("submit", ()=> {   //6. aşama submit the inside of form 
    const userAns = +inputEl.value          //8. aşama number is string
    // console.log(userAns, typeof userAns); // 9.aşama to check if it is string, write a number inside of box                         //10.aşama put + next to inputEl.value 


    if(userAns === correctAns ) {         //11. aşama     //12.aşama yukarda 
              score++       //13. aşama
              console.log(score);    
              updateLocalStorage()  //16.aşam   part 1          
    } else {
        score--             //14. aşama 
        console.log(score);
        updateLocalStorage() // 16.aşam   part 2 
    }
})



function updateLocalStorage(){                     //15. aşama 
    localStorage.setItem("score",JSON.stringify(score))
}

// score does no t chnage because score = 0 
// change this to localsorage

