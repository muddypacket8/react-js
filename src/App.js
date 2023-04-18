import logo from './lee.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='row'>
          <img src={logo} className="App-logo" alt="kim" />
        <h1 className='bee'>luffy</h1>
        </div>
        
        <p>
          <p>WELCOME KENYA AIRWAYS  </p>
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
