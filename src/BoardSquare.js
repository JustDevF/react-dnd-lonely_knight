//useDrop permet d'écrire une spécification de cible de dépôt
import { useDrop } from 'react-dnd'
//Importer le type de glissement
import { ItemTypes } from './ItemTypes.js'
//Permettent de styliser le case de dépot
import { Overlay, OverlayType } from './Overlay.js'
//La case (square) sur quoi déposer un Knight
import { Square } from './Square.js'

/**
 * Encapsule une partie de la logique du Board
 * @param x : position x du case du plateau 
 * @param y : position y du case du plateau 
 * @param children : Le plateau (Knight) 
 * @param game : La logique du jeu 
 * @returns 
 */
export const BoardSquare = ({ x, y, children, game }) => {
  
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      canDrop: () => game.canMoveKnight(x, y),
      drop: () => game.moveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [game],
  )
  const black = (x + y) % 2 === 1
  return (
    <div
      ref={drop}
      role="Space"
      data-testid={`(${x},${y})`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
      {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />}
      {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
    </div>
  )
}
