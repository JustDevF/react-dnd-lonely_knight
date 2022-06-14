
//Hook renvoie une valeur mémorisée. La mise en cache d'une valeur afin qu'elle n'ait pas besoin d'être recalculée.Cela peut améliorer les performances
import { useMemo } from 'react'

//Le plateau 
import { Board } from './Board.js'
//La logique et l'état du jeu
import { Game } from './Game.js'

//Stye ccs du contenaire
const containerStyle = {
  width: 500,
  height: 500,
  border: '1px solid gray',
}
/**
 * L'échiquier
 */
export const TutorialApp = () => {
  //Mémoriser le composant game
  const game = useMemo(() => new Game(), [])
  
  return (
    <div style={containerStyle}>
      <Board game={game} />
    </div>
  )
}
