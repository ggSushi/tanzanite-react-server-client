// Source in our stylesheet
// 'import' is similar to 'require' on the server
import './App.css';
// useState updates the DOM when a varaible changes
import { useState } from 'react';
import Header from '../Header/Header.jsx';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Counter from '../Counter/Counter.jsx';
import InputExample from '../InputExample/InputExample.jsx';

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


  const [headerText, setHeaderText] = useState('Welcome to React!');


  return (
    // This looks like HTML but is really JSX
    <div>
    {/* Render components on the DOM */}
    {/* headerTextProp is the name of our prop */}
    {/* {headerText} is the value we are assigning to the prop */}
      <Header 
      headerTextProp={headerText} 
      textColor="salmon"
      />
      <Header 
      headerTextProp={'New Header wuuuuttttt'} 
      textColor="orange"
      />
      {/* <p>Glonel</p>
      <Counter />
    <InputExample /> */}
      <CreatureList />

    </div>
  );
}

export default App
