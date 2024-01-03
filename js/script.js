const startBtn = document.querySelector(".start-btn button");
const textWrap = document.querySelector(".text-wrap");
const quizBox =document.querySelector(".box");
startBtn.onclick = () => {
// quizBox.classList.add("activeQuiz");
quizBox.style.display = 'block';
startBtn.style.display = "none";
textWrap.style.display = "none";
console.log("clicked");
}
const questions = [
  {
    "Q": "HTML stands for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Mark Language",
    "c": "Hypertext Marking Language",
    "d": "Hypertext Make Language",
    "correct": "a"

  },
  {
    "Q": "What year was JavaScript launched?",
    "a": "1997",
    "b": "1996",
    "c": "1995",
    "d": "None of the above",
    "correct": "c"

  },
  {
    "Q": "Which of the following is not a HTML5 tag?",
    "a": "<track>",
    "b": "<video>",
    "c": "<slider>",
    "d": "<source>",
    "correct": "c"

  }
]
let numb = 0;
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.querySelector(".quesBox");
const optionsInput = document.querySelectorAll(".option");
const totalQuesElement = document.getElementById("total-ques");
const question = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  let data = questions[index];
  // console.log(data);
  quesBox.innerText = `${data.Q}`;
  optionsInput[0].nextElementSibling.innerText = data.a;
  optionsInput[1].nextElementSibling.innerText = data.b;
  optionsInput[2].nextElementSibling.innerText = data.c;
  optionsInput[3].nextElementSibling.innerText = data.d;
  counter ();
}
const submitQuiz = () => {                                                                                          
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  question();                                                                                                                
  return;
}
const getAnswer = () => {
  let answer;
  optionsInput.forEach((output) => {
    if (output.checked) {
      answer = output.value;
    }
  })
  return answer;
}
const reset = () => {
  optionsInput.forEach((input) => {
    input.checked = false;
  })
}
const endQuiz = () => {
  document.querySelector(".box").innerHTML = `<br><h3>Thank you for attempting quiz.</h3><br>
  <h2> ${right} / ${total} are correct.</h2><br>
  <button class="btn" onclick="location.reload()">Play Again </button><br>`;
}
const counter= ()=>{
  let counting = `<span><p>${index+1}</p>of<p>${total}</p>Questions</span>`;
  totalQuesElement.innerHTML = counting;

}
question();