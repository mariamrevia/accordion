import React, { useState } from 'react';
import './App.css';
import data from "./data"
import SingleQuestion from './component/question';


function App() {
  const [questions, setQuestions] = useState(data)
  console.log(questions)
  return (
    <main>
      <div className="container">
        <h1>Questions and Answers about login</h1>
        <div className='accor--container'>
          {questions.map((question) => {
            return (
              <SingleQuestion
                key={question.id} {...question}
                questions={questions}
              />

            )
          })}
        </div>

      </div>
    </main>

  );
}


export default App;
