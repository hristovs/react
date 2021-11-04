import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing app
        </p>
        <a
          className="App-link"
          href="https://github.com/hristovs/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </header>
    </div>
  );
}

export default App;
