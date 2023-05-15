import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine une mini pyramide
 */
export class MiniPyramide extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 103
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    super.draw(ctx)
    ctx.save()

    // set the styles for this shape
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // create the *path*
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor

    // pousse l'objet au bas de l'écran
    let new_y =  this.y

    // triangle avec une base
    ctx.moveTo(this.x + this.width / 2, new_y)
    ctx.lineTo(this.right, new_y + this.height)
    ctx.lineTo(this.x, new_y + this.height)

    ctx.closePath()

    // draw the path to screen
    
    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[MiniPyramide,...]}
   */
  static buildForms() {
    // Création des pyramide
    const minipyramide1 = new MiniPyramide(665, 400, 35, 30, '', '#30FFFF', 0, false)
    const minipyramide2 = new MiniPyramide(720, 280, 200, 150, '', '#30FFFF', 0, false)                                
    const minipyramide3 = new MiniPyramide(820, 330, 120, 100, '', '#30FFFF', 0, false)
    const minipyramide4 = new MiniPyramide(970, 400, 35, 30, '', '#30FFFF', 0, false)
    const minipyramide5 = new MiniPyramide(400, 330, 90, 100, '', '#30FFFF', 0, false,103)
    return [minipyramide1,minipyramide2,minipyramide3,minipyramide4,minipyramide5]
  }

}
