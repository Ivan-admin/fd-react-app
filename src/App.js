import React from 'react';
import Counter from './components/Counter';

function App(props) {
  const step = 10;

  return <Counter step={step} />;
}

export default App;