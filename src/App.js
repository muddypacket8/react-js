import logo from './lee.png';
import './App.css';
import Users from './Users.js';
import Boss from './Boss.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='row'>
          <img src={logo} className="App-logo" alt="kim" />
        <h1 className='bee'>Luffy</h1>
        </div>
        
        <p>
          <p>WELCOME TO KENYA AIRWAYS  </p>
          <Users name="Ben"/>
          <Boss  name="John"/>

        </p>
        <a
          className="App-link"
          href="https://www.kenya-airways.com/ke/en/?gclid=EAIaIQobChMI793gs5Wz_gIV4eDmCh3DEgOkEAAYASAAEgJr7fD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          KENYA AIRWAYS
        </a>
      </header>
    </div>
  );
}

export default App;
