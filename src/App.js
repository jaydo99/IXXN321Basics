import React from 'react';
import Header from './components/Header.js';
import logo from './assets/logo.svg';
import ContactCard from './components/ContactCard.js'
import data from './data/employee.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
        <div className="Contact-Box">
        {data.Employees.map(i => <ContactCard firstName={i.firstName} lastName={i.lastName} jobTitle={i.jobTitle} emailAddress={i.emailAddress} phoneNumber={i.phoneNumber}/>)}
       </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
