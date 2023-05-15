import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine des "étoiles"
 */
export class Etoile extends AbstractForm {
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

  Etoile(ctx, dx, dy) {
    let ox = dx
    let oy = dy
        // si pesenteur pousse l'objet au bas de l'écran
    ctx.save()

    ctx.beginPath();
    ctx.arc(ox + 0, oy + 0, 1.5, 0, Math.PI * 2, false);  // Cercle extérieur

    // set the styles for this shape
    
    ctx.strokeStyle = this.strokeColor
    ctx.fillStyle = this.fillColor

    // draw the path to screen
    ctx.fill()
    ctx.stroke()

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
        }


        draw(ctx) {
            super.draw(ctx)
            this.Etoile(ctx, this.x, this.y)
          }
        
  /**
   * get array of forms
   * @return {[Etoile,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myetoile = new Etoile(950, 300, 10, 0, 'white', 'white', 2, false, 100)
    let max = 3000 
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Etoile(
          ~~(Math.random() * 10* myetoile.x -10),
          ~~(Math.random() * myetoile.y),
          ~~(Math.random() * 100* myetoile.width + 10),
          ~~(Math.random() * myetoile.height + 10),
          myetoile.fillColor,
          myetoile.strokeColor
        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }

}
