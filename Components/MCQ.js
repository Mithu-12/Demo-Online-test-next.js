import React, { useState } from 'react';
import Button from './Button';
import Results from './Results';

const MCQ = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [clearActive, setclearActive] = useState(false);
  const [reviewActive, setreviewActive] = useState(false);
  const [previousActive, setpreviousActive] = useState(false);
  const [nextActive, setnextActive] = useState(false);
  const [submitActive, setsubmitActive] = useState(false);

  const handleNext = () => {
    if (selectedOption === -1) {
      alert('Please select an option to continue');
      return;
    }

    if (currentIndex === data.length - 1) {
      alert('You are select all question, Please select submit button');
    } else {
      setSelectedOption(-1);
      setCurrentIndex((currentIndex + 1) % data.length);
    }
    setnextActive(!reviewActive);
  };

  const handleClearResponse = () => {
    setSelectedOption(-1);
    setclearActive(!clearActive);
  };

  const handleReview = () => {
    setreviewActive(!reviewActive);
    setReviewMode(true);
    setCurrentIndex(0);
  };

  const handlePrevious = () => {
    setSelectedOption(answers[currentIndex]);
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex((currentIndex + data.length - 1) % data.length);
    }
    setpreviousActive(!previousActive);
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    setAnswers((answers) => {
      answers[currentIndex] = index;
      return [...answers];
    });
  };

  const handleSubmit = (e) => {
    setsubmitActive(!submitActive);
    if (selectedOption === -1) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            width: '70%',
            border: '2px solid #000',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
            paddingBottom: '70px',
          }}
        >
          <p style={{ backgroundColor: '#4C8CCC', color: '#fff' }}>
            Q No. {currentIndex + 1}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ width: '500px' }}>
              <p>
                Whether you’re telling the new intern at work just how to file a
                new client’s folder, or giving your sister a rundown on how Fido
                likes his dinner prepared, you’re giving instructions. As a
                general rule, it’s easier to give instructions in person — the
                instructee can ask for clarification on anything he doesn’t
                understand. When you’re writing down instructions, though, it
                can be much harder to explain each step needed to complete the
                task. Think about doing your own taxes: the IRS’ instructions
                are enough to drive some of us to paying hundreds of dollars
                just to avoid dealing with the dratted things. As you write your
                instructions, keep the following questions in mind to make both
                writing them and following them at least a little easier.
              </p>
            </div>
            <div>
              <p>{data[currentIndex].question}</p>
              {data[currentIndex].options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    checked={selectedOption === index}
                    onChange={() => handleOptionSelect(index)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: '20%', marginLeft: '20px' }}>
          <div style={{ marginTop: 0, border: '1px solid #000' }}>
            <img
              style={{ width: '120px', height: '140px', margin: '5px' }}
              src="/image/Mithu.jpg"
              alt="Mithu"
            />
          </div>
          <div style={{ border: '1px solid #000', margin: '10px 0px', paddingBottom: '50px', backgroundColor: '#CEECED' }}>
            <p style={{ fontWeight: 'bold', backgroundColor: '#4c8ccc' }}>
              Question Pallete
            </p>
            {submitted && <Results answers={answers} data={data} />}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '16px',
              marginTop: '10px',
              border: '1px solid gray',
              padding: '10px',
              backgroundColor: '#CEECED'
            }}
          >
            <Button text="Profile"></Button>
            <Button text="Instr"></Button>
            <Button text="Question"></Button>
            <Button
              text="Submit"
              customStyle={{
                backgroundColor: submitActive ? 'blue' : '#4C8CCC',
              }}
              onClick={handleSubmit}
              disabled={selectedOption === -1}
            ></Button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '31px', padding: '0px' }}>
        <div>
          <Button
            text="Clear Response"
            customStyle={{ backgroundColor: clearActive ? 'black' : '#4C8CCC' }}
            onClick={handleClearResponse}
          ></Button>

          <Button
            text="Review"
            customStyle={{
              backgroundColor: reviewActive ? 'yellow' : '#4C8CCC',
            }}
            onClick={handleReview}
            disabled={selectedOption === 0}
          ></Button>

          <Button
            text="Previous"
            customStyle={{
              backgroundColor: previousActive ? 'black' : '#4C8CCC',
            }}
            onClick={handlePrevious}
            disabled={selectedOption === 1}
          ></Button>

          <Button
            text="Next"
            customStyle={{ backgroundColor: nextActive ? 'green' : '#4C8CCC' }}
            onClick={handleNext}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default MCQ;
