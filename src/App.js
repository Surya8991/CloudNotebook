import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About'; 
import Login from './components/Login';
import SignUp from './components/Signup';
import NoteState from './context/notes/NoteState';

function App() {

  return (
    <> 
    <NoteState>
      <Router>
        <Navbar /> 
        <div className='container'>
        <Routes>
          <Route exact path="/" Component={Home}>
          </Route>
          <Route exact path="/about" Component={About}>
          </Route> 
          <Route exact path="/login" Component={Login}>
          </Route> 
          <Route exact path="/signup" Component={SignUp}>
          </Route> 
        </Routes>
      </div>
      </Router> 
      </NoteState>
    </>
  );
}

export default App;