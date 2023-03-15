// Source in our stylesheet
// 'import' is similar to 'require' on the server
import './App.css';
// useState updates the DOM when a varaible changes
import { useState } from 'react';
import Header from '../Header/Header.jsx';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Counter from '../Counter/Counter.jsx';

// App is a component
function App () {
  // Our functions and variables will go here
  //This is how we previously declared variables
  // let firstName = 'Glonel';
  // let counter = 0;

  {/*
  //* New way of declaring variables in React
  //      name     function          default
  const [counter, setCounter] = useState(0);
  const [firstName, setFirstName] = useState('Glonel');

  //Function to increase click counter
  let increaseClickCounter = () => {
    // counter += 1; //! Do not modify state directly!
    setCounter(counter + 1);
    //! Counter has not changed just yet at this point
    console.log('in counter')
  }

  let decreaseClickCounter = () => {
    setCounter(counter - 1);
    console.log('in counter');
  }
  */}

  return (
    // This looks like HTML but is really JSX
    <div>

      {/* 
      <header>
        <h1>Welcome to React!</h1>
      </header>
      <p>Hello World! {firstName}</p>
      <p>You clicked {counter} times!</p>
      <button onClick={increaseClickCounter}> Raise the roof! </button>
      {/* This is the new code commenting inside of React code 
        TODO: Add a decrease button*/}
      {/*
      <br></br>
      <button onClick={decreaseClickCounter}> Drop it like it's hot! </button> 
      
      */}



{/* Render CreatureList on the DOM */}
      <Header />
      <Counter />
      <CreatureList />

    </div>
  );
}

export default App
