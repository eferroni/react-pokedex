const pokemonList = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];

let hand1 = []
let hand2 = []
let hand1Exp = {'total':0,'winner':false}
let hand2Exp = {'total':0,'winner':false}
let item = 0

while (pokemonList.length > 0){
  item = Math.floor(Math.random() * pokemonList.length)
  if (pokemonList.length % 2 == 0){
    hand1.push(pokemonList[item])
    hand1Exp['total'] += pokemonList[item]['base_experience']
  } else {
    hand2.push(pokemonList[item])
    hand2Exp['total'] += pokemonList[item]['base_experience']
  }
  pokemonList.splice(item,1);
}

if (hand1Exp['total'] > hand2Exp['total'] ){
  hand1Exp['winner'] = true
  hand2Exp['winner'] = false
}else {
  hand1Exp['winner'] = false
  hand2Exp['winner'] = true
}
console.log(hand1Exp)
console.log(hand2Exp)
export {hand1,hand2,hand1Exp,hand2Exp};
