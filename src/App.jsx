/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './App.css'
import './index.css'


function App() {
   
    let [currentquestion , setcurrentquestion] = useState(0);
    const quizQuestions = [
      {
        question : "What is the capital of India",
        options : [
          {answer : 'Kolkata' , iscorrect : false},
          {answer : "Delhi" , iscorrect : true},
          {answer : "Chennai" , iscorrect : false},
          {answer : "Mumbai" , iscorrect : false},

        ]
      },

      {
        question : "What is the national animal of India",
        options : [
          {answer : "Tiger" , iscorrect : true},
          {answer : "Lion" , iscorrect : false},
          {answer : "Cheetah" , iscorrect : false},
          {answer : "Elephant" , iscorrect : false},

        ]
      },

      {
        question : "What is the complexity of binary search",
        options : [
          {answer : "O(n)" , iscorrect : false},
          {answer : "O(log(n))" , iscorrect : true},
          {answer : "O(1)" , iscorrect : false},
          {answer : "O(nlog(n))" , iscorrect : false},

        ]
      },
    ]


    function onNextclick(){
      if(currentquestion==quizQuestions.length-1)return;
      setcurrentquestion(currentquestion+1);

    }

    function checkAnswer(option){
      if(option.iscorrect){
        console.log("Correct answer");
        return;
      }
      else{
        console.log("Wrong answer");
        return;
      }
    }

    return (
      <div className='card-wrapper'>
       <div className="app">
         <div className = "question-section">
          <div className="question-count">
            <span>Question {currentquestion+1} </span> / {quizQuestions.length}
          </div>
          <div className="question-text">
              {quizQuestions[currentquestion].question}
          </div>
         </div>
         <div className="answer-section">
              {quizQuestions[currentquestion].options.map(option => <button onClick={()=>checkAnswer(option)}>{option.answer}</button>)}
          </div>
       </div>
       {/* {button to show next question } */}
       <button onClick={onNextclick}>Next</button>
      </div>
    );
    
}

export default App
