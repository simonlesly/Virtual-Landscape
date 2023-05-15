import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine le Sol
 */
export class Sol extends AbstractForm {
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
    ordreConstruction = 101
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
    ctx.strokeStyle = this.strokeColor
    ctx.fillStyle = this.fillColor

    //création du dégradé
    var lingrad = ctx.createLinearGradient(0, 0,0, 700);
    lingrad.addColorStop(0.2, '#3e77ae');
    lingrad.addColorStop(0.3, '#335595');
    lingrad.addColorStop(0.4, '#325191');
    lingrad.addColorStop(0.5, '#314e8a');
    lingrad.addColorStop(0.6, '#304982');
    lingrad.addColorStop(0.7, '#30457c');
    lingrad.addColorStop(0.8, '#2b3968');
    lingrad.addColorStop(0.9, '#28315a');
    lingrad.addColorStop(1, '#26294c');
   
    ctx.fillStyle = lingrad;

    ctx.beginPath()
    ctx.fillRect(0,430, 1600, 300);
    ctx.fill()
    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
    ctx.closePath()
  }

  /**
   * get array of forms
   * @return {[Sol,...]}
   */
  static buildForms() {
    // Création du Sol 
    const mySol = new Sol(100, 70, 500, 280, '', '', 0, true)
    return [mySol]
  }

}
