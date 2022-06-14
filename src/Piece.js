//Contient une pièce du Knight
import { Knight } from './Knight.js'

export const Piece = ({ isKnight }) => (isKnight ? <Knight /> : null)
