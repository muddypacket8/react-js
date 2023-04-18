import logo from './lee.png';
import './App.css';
import Users from './Users.js';
import Boss from './Boss.js';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
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

      <footer>
         <p>EMAIL : &copy;luffyways@gmail.com</p>
  <p>PHONE NUMBER : 0125796423</p>
  <p>&copy; 2023 Contact Us</p>
  <div class="footer-col">
    <h4>follow us</h4>
    <ul1>
    <div class="social-links">
        <a href="https://web.facebook.com/?_rdc=1&_rdr"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/kimzy_lee/"><i class="fab fa-instagram"></i></a>
        <a href=" https://whatsapp.com/dl/"><i class="fab fa-whatsapp"></i></a>
    </div>
    </ul1>
</div> 
      </footer>
    </div>
  );
}

export default App;
