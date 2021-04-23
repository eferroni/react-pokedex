import React from 'react';
import './Pokecard.css'

const image = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends React.Component{
  render(){
    let imgPad = this.props.id.toString();
    imgPad = imgPad.padStart(3, '0');
    let imgSrc = `${image}${imgPad}.png`;
    return(
      <div className="Pokecard">
        <div className="Pokecard-name">{this.props.name}</div>
        <img src={imgSrc} className="Pokecard-image"/>
        <div>type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;
