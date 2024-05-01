import logo from './klu logo.jpg';
import './App.css';
import Register from './components/Register.js';
import Page from './components/page.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          STUDENT COURSE MANAGEMENT SYSTEM
        </p>
      </header>
      <div className="App-body"> 
      <Register />
      </div>
    </div>
    
  );
}

export default App;

