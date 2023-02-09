const Results = ({ answers, data }) => {
    return (
      <div style={{display: 'flex', flexDirection: 'row', }}>
        {answers.map((answer, index) => (
          <div
            key={index}
            style={{
              width: '30px',
              height: '30px',
              border: '1px solid black',
              backgroundColor: answer === data[index].answer ? 'green' : 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              margin: '5px'
              
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );
  };

  export default Results;