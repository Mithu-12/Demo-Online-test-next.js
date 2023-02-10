import React from 'react'

export default function Profile() {
  return (
    <div
            style={{
              marginTop: 0,
              border: '1px solid #000',
              borderRadius: '5px',
              backgroundColor: '#CEECED',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <img
              style={{ width: '80px', height: '100px', margin: '5px' }}
              src="/image/Mithu.jpg"
              alt="Mithu"
            />
            <div>
                <p>Time Left: 2: 29: 39</p>
                <p>Ashish Kumar</p>
            </div>
          </div>
  )
}
