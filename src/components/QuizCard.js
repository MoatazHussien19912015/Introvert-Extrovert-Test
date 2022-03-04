import React, { useState, useEffect } from "react";
import CustomSpinner from "./shared/CustomSpinner";
import { Card, Form } from "react-bootstrap";
const QuizCard = ({
  id,
  question,
  options,
  selected,
  questionsNumber,
  handleAnswer,
}) => {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [id]);

  const handleChange = (evt, i) => {
    handleAnswer({ id: id, answer: evt.target.value, i });
  };
  return (
    <>
      {loading ? (
        <CustomSpinner  />
      ) : (
        <Card className="card " style={{ height: "50%", width: '100%' }}>
          <Card.Header className=" bg-warning">
            <Card.Title>
              Question {id} of {questionsNumber}
            </Card.Title>
            <Card.Text>{question}</Card.Text>
          </Card.Header>
          <Card.Body>
            {options?.map((option, i) => (
              <Form.Check
                type="radio"
                id={`radio${i + 1}`}
                label={option.option}
                key={i}
                value={option.degree}
                checked={selected?.i == i}
                className="pt-3 pb-3"
                onChange={(evt) => handleChange(evt, i)}
              ></Form.Check>
            ))}
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default QuizCard;
