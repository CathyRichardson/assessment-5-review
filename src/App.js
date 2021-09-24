import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';

function App() {
  const [ isForm, setIsForm ] = useState(false);

  return (
    <div className={isForm ? 'App app-form' : 'App'}>
      <Nav setIsForm={setIsForm} isForm={isForm}/>
      {routes}
    </div>
  )
};

export default App;
