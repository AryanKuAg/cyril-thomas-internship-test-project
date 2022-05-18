import {useState} from 'react';
import './App.css';
import BasicDetail from './Components/BasicDetail/BasicDetail';
import Targeting from './Components/Targeting/Targeting.js';
function App() {
  
  return (
    <div className="App">
      {/* Basic Details */}
      <BasicDetail />
      {/* Targeting */}
      <Targeting/>
      {/* post Job */}
    </div>
  );
}

export default App;
