import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Pyramide extends AbstractForm {
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
    ordreConstruction = 100
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
    ctx.fill()
    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Pyramide,...]}
   */
  static buildForms() {
    // Création des Pyramide
    const Pyramide1 = new Pyramide(-100, 150, 500, 280, '#66FFFF', '#66FFFF', 0, false)
    const Pyramide2 = new Pyramide(200, 190, 500, 240, '#66FFFF', '#66FFFF', 0, false)                                
    const Pyramide3 = new Pyramide(800, 210, 500, 220, '#66FFFF', '#66FFFF', 0, false)
    const Pyramide4 = new Pyramide(1100, 150, 500, 280, '#66FFFF', '#66FFFF', 0, false)
    const Pyramide5 = new Pyramide(500, 105, 550, 325, '#66FFFF', '#66FFFF', 0, false)
    return [Pyramide1,Pyramide2,Pyramide3,Pyramide4,Pyramide5]
  }

}
