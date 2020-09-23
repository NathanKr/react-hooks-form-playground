import React from 'react';
import ReactHookFormSample1 from './ReactHookFormSample1';
import ReactHookFormSample2 from './ReactHookFormSample2';

function App() {
  return (
    <div className="App">
      <h2>ReactHookFormSample1</h2><span>check the console on submit</span>
      <ReactHookFormSample1/>
      <h2>ReactHookFormSample2</h2><span>check the console on submit</span>
      <ReactHookFormSample2/>
    </div>
  );
}

export default App;
