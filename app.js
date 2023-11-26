import bugtong  from "./bugtong.js";

const questionPos = document.querySelector('.question-num');
const questionContainer = document.querySelector('.question');
const answerInput = document.querySelector('#answer');
const submitAnswerBtn = document.querySelector('#submit');
const nextQustionBtn = document.querySelector('#nextQ');
const createdQuestion = document.querySelector('.createdQuestion');
const createdAnswer = document.querySelector('.createdAnswer');
const createBtn = document.querySelector('#AddBtn');


//initialize bugtong questions
bugtong();



generateQuestion();



function generateQuestion(){
    const questions = JSON.parse(localStorage.getItem('bugtongList'));
    const randomQuestion = Math.floor(Math.random() * questions.length);

    questionPos.innerHTML = `<p>Tanong ${randomQuestion} sa ${questions.length}</p>`
    questionContainer.innerHTML = `<h5><i class="fa-solid fa-q"></i> : ${questions[randomQuestion].question}</h5>`




    submitAnswerBtn.addEventListener('click',()=>{
        let myAnswer = answerInput.value.toLowerCase();
        let questionAnswer = questions[randomQuestion].answer.toLowerCase()
    
        if(myAnswer === ''){
            alert('Input your answer to this bugtong');
        }else{
            if( myAnswer === questionAnswer){
                alert('correct');
            }else{
                alert('Wrong');
            }
        }
    })
}

nextQustionBtn.addEventListener('click',()=>{
    location.reload();
});


