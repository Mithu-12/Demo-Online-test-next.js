export const mathData = [
    {
      id: 1,
      question: 'What is the formula for the area of a circle?',
      options: ['A = πr^2', 'A = r^2/π', 'A = 2πr', 'A = rπ'],
      answer: 0
    },
    {
      id: 2,
      question: 'What is the Pythagorean theorem?',
      options: [
        'a^2 + b^2 = c^2',
        'a^2 - b^2 = c^2',
        'a + b = c^2',
        'a - b = c^2'
      ],
      answer: 0
    },
    // Add 8 more questions here
  ];
  
  export const chemistryData = [
    {
      id: 1,
      question: 'What is the atomic number of Carbon?',
      options: [6, 8, 10, 12],
      answer: 6
    },
    {
      id: 2,
      question: 'What is the chemical formula for water?',
      options: ['H2O', 'H2S', 'NaCl', 'CO2'],
      answer: 0
    },
    // Add 8 more questions here
  ];
  
  export const physicsData = [
    {
      id: 1,
      question: 'What is the unit of force in SI units?',
      options: ['Joule', 'Newton', 'Watt', 'Coulomb'],
      answer: 1
    },
    {
      id: 2,
      question: 'What is the speed of light in a vacuum?',
      options: ['3 x 10^8 m/s', '2 x 10^8 m/s', '5 x 10^8 m/s', '4 x 10^8 m/s'],
      answer: 0
    },
    // Add 8 more questions here
  ];
  
  export const allData = [...mathData, ...chemistryData, ...physicsData];
