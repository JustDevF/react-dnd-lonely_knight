
import { useEffect, useState } from 'react'
//Encapsule une partie de la logique du Board
import { BoardSquare } from './BoardSquare.js'
//Contient une pièce du Knight
import { Piece } from './Piece.js'


//Propriétés de style appliquées à l'élément board (Le plateau)
const boardStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}

//Propriétés de style appliquées à chaque élément Square (case)
const squareStyle = { width: '12.5%', height: '12.5%' }
/**
 * Le plateau entier avec 64 cases 
 * @param props game : Les règles du jeu 
 */
export const Board = ({ game }) => {
  //State 
  const [[knightX, knightY], setKnightPos] = useState(game.knightPosition)
  //Effect
  useEffect(() => game.observe(setKnightPos))

  //Fonction de rendu du Square (case)
  function renderSquare(i) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i} style={squareStyle}>
        <BoardSquare x={x} y={y} game={game}>
          <Piece isKnight={x === knightX && y === knightY} />
        </BoardSquare>
      </div>
    )
  }
  //Tableau de Square rendus par la fonction de rendu de Square
  const squares = []
  //64 cases  du jeu 
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i))
  }
  return <div style={boardStyle}>{squares}</div>
}
