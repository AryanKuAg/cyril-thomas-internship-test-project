import {useState} from 'react';
import './App.css';
import BasicDetail from './Components/BasicDetail/BasicDetail';
import PostJob from './Components/PostJob/PostJob';

function App() {
  
  return (
    <div className="App">
      {/* Basic Details */}
      <BasicDetail />
      {/* Targeting */}
      <PostJob/>
      {/* post Job */}
    </div>
  );
}

export default App;
