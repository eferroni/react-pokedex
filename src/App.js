import logo from './logo.svg';
import './App.css';
import {hand1,hand2,hand1Exp,hand2Exp} from './Pokegame'
import Pokecard from './Pokecard'
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="App">
    <Pokedex hand={hand1} total={hand1Exp}/>
    X
    <Pokedex hand={hand2} total={hand2Exp}/>
    </div>
  );
}

export default App;
