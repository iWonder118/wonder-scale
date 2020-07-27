import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hello from './Pages/Hello'
import Goodbye from './Pages/Goodbye'




function App() {
  return (
    <Router>
        <Route exact path='/' component={Hello} />
        <Route exact path='/goodbye' component={Goodbye} />
    </Router>

  );
}


export default App;