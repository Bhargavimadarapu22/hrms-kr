import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/registration'
import LoginForm from './Components/LoginForm/LoginForm'
import { Component } from 'react';

class App extends Component
 {
  render()
  {
    return( 
      <div className='App'>
        <MyComponent/>
        <LoginForm/>
      </div>
    )
  }
 }

export default App;
