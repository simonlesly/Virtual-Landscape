import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une lune violette
 */
export class Lune extends AbstractForm {
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

  draw(ctx) {
    super.draw(ctx) 
      ctx.save()

    ctx.strokeStyle = this.strokeColor
    ctx.fillStyle = this.fillColor
    
    //création d'un dégradé
   var degrade = ctx.createLinearGradient(0, 0,0, 900); //position du dégradé sur le canva 
    degrade.addColorStop(0, '#0d0125');
    degrade.addColorStop(0.1, '#21014d');
    degrade.addColorStop(0.2, '#260355');
    degrade.addColorStop(0.25, '#320967');
    degrade.addColorStop(0.4, '#4f1796');
    degrade.addColorStop(0.5, '#511899');
    degrade.addColorStop(0.6, '#53199c');
    degrade.addColorStop(0.7, '#571aa1');
    

   //début du dessin
    ctx.beginPath()
    ctx.arc(770, 260, 250, 0, Math.PI * 2, true)
    ctx.fillStyle = degrade //le dégradé créée est définit comme couleur de remplissage de la forme
    ctx.fill()
    //fin du dessin
    ctx.closePath()
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Lune...]}
   */
  static buildForms() {
    const mylune = new Lune(0, 10, 0, 0, '', '', 1, false)
    const forms = [mylune]
    return forms
  }
}
