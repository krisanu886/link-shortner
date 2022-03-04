import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Input from './input';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Input/>}/>
          <Route path='/:short' element={<Input/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
