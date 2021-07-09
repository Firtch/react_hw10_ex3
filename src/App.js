import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom';
import React from 'react';

function App() {

  const history = useHistory();
  console.log(history);

  const richDadTitle = "Rich Dad Poor Dad";
  const theRichest = "The Richest Man In Babylon";

  const handleClick = (name) => {
    history.push(`/about/${name}`);
  }

  return (
    <div className="App">
      <button onClick={() => handleClick(richDadTitle)}>{richDadTitle}</button>
      <button onClick={() => handleClick(theRichest)}>{theRichest}</button>
    </div>
  );
}

export default App;

