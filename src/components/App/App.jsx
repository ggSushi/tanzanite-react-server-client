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
