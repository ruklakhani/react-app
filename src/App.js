import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title.js';
import POPOSList from './components/POPOSList/POPOSList.js';
import About from './components/About/About'
import POPOSDetails from './components/POPOSDetails/POPOSDetails.js'
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
