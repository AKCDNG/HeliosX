import { useState, useEffect } from 'react';
import './App.scss';
import Header from './Header';

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

  useEffect(() => {
    if (answers.length === questions.length) {
      sendDataToAPI(answers);
      console.log(currentQuestionIndex);
    }
  }, [answers]);

  const handleAnswer = (answer: string) => {
    setAnswers((prevAnswers: Array<string>) => [...prevAnswers, answer]);

    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex((prevIndex: number) => prevIndex + 1);
    }
  };

  const sendDataToAPI = (data: Array<string>) => {
    console.log('Data to be sent to API:', data);
  };

  return (
    <div className='wrapper'>
      <Header />
      <section className='container'>
        {currentQuestionIndex < 5 ? (
          <div className='question-wrap'>
            <div className='row'>
              <div className='header col-12' key={currentQuestionIndex}>
                <h2>Question {[currentQuestionIndex + 1]}:</h2>
                <h3>{questions[currentQuestionIndex]}</h3>
              </div>
            </div>
            <div className='row'>
              <div className='buttons col-12'>
                <button onClick={() => handleAnswer('Yes')}>Yes</button>
                <button onClick={() => handleAnswer('No')}>No</button>
              </div>
            </div>
          </div>
        ) : (
          <div className='thank-you-msg'>
            <h2>Thank you for your submission</h2>
            <h3>We will be in touch soon.</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default Questionnaire;
