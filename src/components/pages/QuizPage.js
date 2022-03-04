import React, { useState, useEffect } from 'react';
import data from '../../data.json';
import QuizCard from '../QuizCard';
import CustomModal from '../shared/CustomModal';
import {Button} from 'react-bootstrap';
const QuizPage = () => {
  const [questions, setQuestions] = useState(data);
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [show, setShow] = useState(false);
  const [introvert, setIntrovert] = useState('');
  const [extrovert, setExtrovert] = useState('');
  const [result, setResult] = useState('');
  const [answers, setAnswers] = useState([]);
  
  const refresh = () => {
    setIndex(0);
    setCurrentQuestion(questions[0]);
    setAnswers([]);
    setIntrovert('');
    setExtrovert('');
    setResult('');
    hideModal();
  };
  const handleAnswer = (answer) => {
    if (index > -1) {
      setAnswers((prevAnswers) => [
        ...prevAnswers.filter((x) => x.id != answer.id),
        answer,
      ]);
    } else
      setAnswers((prevAnswers) => {
        prevAnswers.push(answer);
        return [...prevAnswers];
      });
  };
  useEffect(() => {
    setCurrentQuestion(questions[0]);
  }, []);
  const next = () => {
    if (index < questions.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const previous = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const calculate = () => {
    let intro = 0,
      extro = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].answer == 'introvert') {
        intro++;
      } else if (answers[i].answer == 'semi-introvert') {
        intro += 0.5;
      } else if (answers[i].answer == 'extrovert') {
        extro++;
      } else if (answers[i].answer == 'semi-extrovert') {
        extro += 0.5;
      }
    }
    let total = intro + extro;
    setIntrovert(Math.round((intro / total) * 100));
    setExtrovert(Math.round((extro / total) * 100));
    setResult(intro == extro ? 'ambivert' : intro > extro ? 'introvert' : 'extrovert');
    showModal();
  };
  useEffect(() => {
    setCurrentQuestion(questions[index]);
  }, [index]);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <div
      className="d-flex justify-content-center "
      style={{ height: "100%", width: '100%' }}
    >
      <div className="d-flex justify-content-center  flex-column" style={{ /* height: "50%", */ width: '50%' }}>
        <QuizCard
          id={currentQuestion.id}
          question={currentQuestion.question}
          options={currentQuestion.options}
          selected={answers.find((x) => x.id == currentQuestion.id)}
          handleAnswer={handleAnswer}
          questionsNumber={questions.length}
        />

        <div className="pt-5 d-flex justify-content-around">
          <Button
            variant="primary"
            onClick={previous}
            disabled={index == 0}
          >
            <i
              className="fas fa-angle-left"
              style={{ fontSize: "48px", color: "white" }}
            ></i>
          </Button>
          <Button
            variant="primary"
            onClick={calculate}
            disabled={answers.length != questions.length}
          >
            Get Result
          </Button>
          <Button
            variant="primary"
            onClick={next}
            disabled={index == questions.length - 1}
          >
            <i
              className="fas fa-angle-right"
              style={{ fontSize: "48px", color: "white" }}
            ></i>
          </Button>
        </div>
      </div>

      <CustomModal
        show={show}
        handleClose={hideModal}
        callback={refresh}
        introvert={introvert}
        extrovert={extrovert}
        result={result}
      />
    </div>
  );
};

export default QuizPage;
