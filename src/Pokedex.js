import React from 'react';
import './Pokedex.css'
import Pokecard from './Pokecard'

class Pokedex extends React.Component{
  render(){
    let resultClass;
    if (this.props.total['winner']){
      resultClass = 'Pokedex-winner'
    }else{
      resultClass = 'Pokedex-loser'
    }
    return(
      <div className={`Pokedex ${resultClass}`}>
      <div className="Pokedex-total">Total {this.props.total['total']}</div>
      {this.props.hand.map((p) => (
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
        />
      ))}
      </div>
    )
  }
}

export default Pokedex;
