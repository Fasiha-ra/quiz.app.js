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
  let index = 0;
  let total = questions.length;
  let right = 0, wrong = 0;
  const quesBox = document.querySelector(".quesBox");
  const optionsInput = document.querySelectorAll('.option');
  const loadQuestions = () => {
    if(index === total){
      return endQuiz();
    }
    reset();
    const data = questions[index];
  
    quesBox.innerText = `${index + 1}:- ${data.Q}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
  
  }
  const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
      right++ ;
    }else{
      wrong++;
    }
    index++;
    loadQuestions();
    return;
  }
  const getAnswer = () => {
    let answer;
    optionsInput.forEach(
      (output) => {
      if(output.checked) {
        answer = output.value;
      }
    })
    return answer;
  }
  const reset =()=>{
    optionsInput.forEach((input)=>{
      input.checked = false;
    })
  }
  const endQuiz = () =>{
    document.querySelector(".box").innerHTML = 
    `<h3>Thank you for attempting quiz.</h3><br>
    <h2> ${right} / ${total} are correct.</h2><br>
    <button class="btn" onclick="location.reload()">Play Again </button>`;
  }
  loadQuestions();