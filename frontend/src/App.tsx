import { useState } from 'react';
import './App.scss';

const Questionnaire = () => {
  const questions: Array<string> = [
    'Do you have sensitive skin?',
    'Is your skin type generally oily?',
    'Have you noticed any changes in your skin type over time?',
    'Are you primarily concerned about acne?',
    'Do you use sunscreen every day?',
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<string>>([]);

  const handleAnswer = (answer: string) => {
    setAnswers((prevAnswers: Array<string>) => [...prevAnswers, answer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex: number) => prevIndex + 1);
    } else {
      console.log('Thank you for completing the questionnaire!');

      sendDataToAPI(answers);
    }
  };

  const sendDataToAPI = (data: Array<string>) => {
    console.log('Data to be sent to API:', data);
  };

  return (
    <section className='col-12 col-lg-6'>
      <div className='header' key={currentQuestionIndex}>
        <h2>Question {[currentQuestionIndex + 1]}:</h2>
        <h2>{questions[currentQuestionIndex]}</h2>
      </div>
      <div className='buttons'>
        <button onClick={() => handleAnswer('Yes')}>Yes</button>
        <button onClick={() => handleAnswer('No')}>No</button>
      </div>
    </section>
  );
};

export default Questionnaire;
