import React from 'react';
import Counter from './components/Counter';

function App(props) {


  return (
    <>
      <Counter name='Counter' step={10} />
    </>


  );
}

export default App;