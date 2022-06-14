//Gère logique du jeu et les états de composants 
//Les déplacements de chevalier (Knight)
//Les dépots (case)

export class Game {
    //Définir une position initiale 
    knightPosition = [1, 7]

    //Tableau 
    observers = []

    /**
     * 
     * @param {*} o  
     * @returns 
     */
    observe(o) {
      this.observers.push(o)
      this.emitChange()
      return () => {
        this.observers = this.observers.filter((t) => t !== o)
      }
    }

    /**
     *  Déplacé le chevalier (Kinght) selon la position des cases et sa propre position 
     * @param {*} toX : position x du Square
     * @param {*} toY : position y du Square
     */
    moveKnight(toX, toY) {
      this.knightPosition = [toX, toY]
      this.emitChange()
    }

    /**
     * La logique qui détermine comment le Knight peut être déplacé selon la position des cases et depuis sa propre position 
     * @param {*} toX 
     * @param {*} toY 
     * @returns 
     */
    canMoveKnight(toX, toY) {
      const [x, y] = this.knightPosition
      const dx = toX - x
      const dy = toY - y
      return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
      )
    }
    
    /**
     * Mettre à jout l'état de la position du Chevalier (Knight)
     */
    emitChange() {
      const pos = this.knightPosition
      this.observers.forEach((o) => o && o(pos))
    }
  }
  