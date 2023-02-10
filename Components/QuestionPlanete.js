import React from 'react';
import Results from './Results';

export default function QuestionPlanete(answers, data, submitted) {
  return (
    <div
      style={{
        border: '1px solid #000',
        margin: '10px 0px',
        paddingBottom: '50px',
        backgroundColor: '#CEECED',
        borderRadius: '5px',
        height: '150px',
      }}
    >
      <p
        style={{
          fontWeight: 'bold',
          backgroundColor: '#4c8ccc',
          margin: '0px',
          color: '#FFFFFF',
          padding: '4px',
        }}
      >
        Question Pallete
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
          gridGap: '2px',
        }}
      >
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'green',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          1
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'red',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          2
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'green',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          3
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'green',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          4
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'red',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          5
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'yellow',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          6
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'green',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          7
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'white',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          8
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: '#9177E0',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          9
        </p>
        <p
          style={{
            width: '45px',
            height: '30px',
            backgroundColor: 'gray',
            textAlign: 'center',
            margin: '2px',
            padding: '5px',
          }}
        >
          10
        </p>
      </div>
      {submitted && <Results answers={answers} data={data} />}
    </div>
  );
}
