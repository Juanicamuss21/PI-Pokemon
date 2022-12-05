import './App.css';
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import CreatePokemon from './components/CreatePokemon/CreatePokemon'
import Nav from './components/Nav/Nav'
import axios from 'axios';
axios.defaults.baseURL = "https://pi-pokemon-production-5096.up.railway.app"

function App() {
  return (
    <div className="App">      
      <Route exact path='/' component={LandingPage}/>
      <Route path='/Home' component={Nav}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/pokemons/:id' component={Details}/>
      <Route exact path='/home/createpokemon' component={CreatePokemon}/>     
    </div>
  );
}

export default App;

