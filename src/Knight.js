//DragPreviewImage permet de présentre une image sous la forme d'un aperçu de glissement
//useDrag permet de rendre le chevalier déplaçable
import { DragPreviewImage, useDrag } from 'react-dnd'
//Importer le type de glissement
import { ItemTypes } from './ItemTypes.js'
//Image d'apercue à passer à DragPreviewImage
import { knightImage } from './knightImage.js'

//Le style du chevalier (Knight)
const knightStyle = {
  fontSize: 50,
  fontWeight: 'bold',
  cursor: 'move',
}

/**
 * Le Knight. Notre pièce de chevalier solitaire. Il n'a aucun accessoire
 * @returns jsx
 */
export const Knight = () => {

  //Configuration pour rendre Knight
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.KNIGHT,
      //La fonction de collecteur : transformer l'état du système de glisser-déposer en accessoires utilisables pour vos composants.
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  )
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  )
}
