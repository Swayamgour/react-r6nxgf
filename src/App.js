import React, { useState } from 'react';

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = 1;
    const max = 13;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default RandomNumber;
