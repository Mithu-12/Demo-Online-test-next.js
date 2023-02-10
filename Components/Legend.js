import React from 'react'

export default function Legend() {
  return (
    <div
            style={{
              border: '1px solid gray',
              backgroundColor: '#CEECED',
              borderRadius: '5px',
            }}
          >
            <p
              style={{
                fontWeight: '500',
                backgroundColor: '#4c8ccc',
                marginTop: '0px',
                marginBottom: '0px',
                color: '#FFFFFF',
                padding: '4px',
              }}
            >
              Legend (Click to View)
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '5px',
                marginTop: '0px',
                padding: '3px',
              }}
            >
              <p
                style={{
                  margin: '0px',
                  backgroundColor: 'green',
                  padding: '2px',
                }}
              >
                4 Answer
              </p>
              <p
                style={{
                  margin: '0px',
                  backgroundColor: 'red',
                  padding: '2px',
                }}
              >
                2 No Answer
              </p>
              <p
                style={{
                  margin: '0px',
                  backgroundColor: '#9177E0',
                  padding: '2px',
                }}
              >
                1 Review+Ans
              </p>
              <p
                style={{
                  margin: '0px',
                  backgroundColor: 'yellow',
                  padding: '2px',
                }}
              >
                1 Review-Ans
              </p>
              <p
                style={{
                  margin: '0px',
                  backgroundColor: 'gray',
                  padding: '2px',
                }}
              >
                1 Dump
              </p>
              <p
                style={{
                  margin: '0px',
                  backgroundColor: 'white',
                  padding: '2px',
                }}
              >
                1 No Visit
              </p>
            </div>
            <p
              style={{
                backgroundColor: '#4c8ccc',
                marginTop: '0px',
                marginBottom: '0px',
                padding: '3px',
                textAlign: 'center',
              }}
            >
              10 All Questions
            </p>
          </div>
  )
}
