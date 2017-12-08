window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const members = [
    {
      id: 1,
      name: 'Paul McCartney',
      description: 'The cute one',
      votes: generateVoteCount(),
      imageURL: '#',
      instrument: 'bass',
    },
    {
      id: 1,
      name: 'John Lennon',
      description: 'The smart one',
      votes: generateVoteCount(),
      imageURL: '#',
      instrument: 'rhythm guitar',
    },
    {
      id: 3,
      name: 'George Harrison',
      description: 'The quiet one',
      votes: generateVoteCount(),
      imageURL: '#',
      instrument: 'lead guitar',
    },
    {
      id: 4,
      name: 'Ringo Starr',
      description: 'The sad one',
      votes: generateVoteCount(),
      imageURL: '#',
      instrument: 'drums',
    },
  ];

  return { members: members };
}());
