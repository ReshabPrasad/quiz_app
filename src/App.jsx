/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './App.css'
import './index.css'
import AnswerSection from './components/AnswerSection';
import GeoLocationContainer from './components/GeoLocation/GeoLocationContainer'




function App() {
   
    let [currentquestion , setcurrentquestion] = useState(0);
    let [currentscore,setcurrentscore] =useState(0);
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
      if(currentquestion==quizQuestions.length-1){
        alert("The score is" + currentscore);
        return;
      }
      setcurrentquestion(currentquestion+1);

    }

    function checkAnswer(option){
      if(option.iscorrect){
        console.log("Correct answer");
        setcurrentscore(currentscore+1);
      }
      else{
        console.log("Wrong answer");
      }
    }

    return (
      <div className='card-wrapper'>
        <GeoLocationContainer / >
       <div className="app">
         <div className = "question-section">
          <div className="question-count">
            <span>Question {currentquestion+1} </span> / {quizQuestions.length}
          </div>
          <div className="question-text">
              {quizQuestions[currentquestion].question}
          </div>
         </div>
         {/* <div className="answer-section">
              {quizQuestions[currentquestion].options.map(option => <button onClick={()=>checkAnswer(option)}>{option.answer}</button>)}
          </div> */}
          <AnswerSection question={quizQuestions[currentquestion]} onAnswerClick={checkAnswer} />
       </div>
       {/* {button to show next question } */}
       <button onClick={onNextclick}>Next</button>
      </div>
    );
    
}

export default App
