import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine le sol
 */
export class Carrelage extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 1,
    pesenteur = false,
    ordreConstruction = 104
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 1D du canvas
   */
  draw(ctx) {
    super.draw(ctx)
    ctx.save()
    // set the styles for this shape
    ctx.strokeStyle = this.strokeColor
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    //Ligne horizontale
    ctx.beginPath()
    ctx.moveTo(0,430)
    ctx.lineTo(1540,430)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 5
    ctx.stroke()
    ctx.closePath()

    //ligne 1
    ctx.beginPath()
    ctx.moveTo(0,450)
    ctx.lineTo(1540,450)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //ligne 1
    ctx.beginPath()
    ctx.moveTo(0,465)
    ctx.lineTo(1540,465)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //ligne 3
    ctx.beginPath()
    ctx.moveTo(0,480)
    ctx.lineTo(1540,480)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //ligne 4
    ctx.beginPath()
    ctx.moveTo(0,495)
    ctx.lineTo(1540,495)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()
    
    //ligne 5
    ctx.beginPath()
    ctx.moveTo(0,510)
    ctx.lineTo(1540,510)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //ligne 6
    ctx.beginPath()
    ctx.moveTo(0,540)
    ctx.lineTo(1540,540)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //ligne 7
    ctx.beginPath()
    ctx.moveTo(0,570)
    ctx.lineTo(1540,570)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //ligne 8
    ctx.beginPath()
    ctx.moveTo(0,600)
    ctx.lineTo(1540,600)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //ligne 9
    ctx.beginPath()
    ctx.moveTo(0,630)
    ctx.lineTo(1540,630)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //ligne 10
    ctx.beginPath()
    ctx.moveTo(0,660)
    ctx.lineTo(1540,660)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()


    //Ligne Verticale

    //Ligne 1
    ctx.beginPath()
    ctx.moveTo(75,430)
    ctx.lineTo(-40,550)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //Ligne 1
    ctx.beginPath()
    ctx.moveTo(175,430)
    ctx.lineTo(-50,700)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

    //Ligne 3
    ctx.beginPath()
    ctx.moveTo(275,430)
    ctx.lineTo(80,700)
    ctx.strokeStyle = "#66FFFF"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()

     //Ligne 4
     ctx.beginPath()
     ctx.moveTo(375,430)
     ctx.lineTo(210,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 5
     ctx.beginPath()
     ctx.moveTo(475,430)
     ctx.lineTo(340,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 6
     ctx.beginPath()
     ctx.moveTo(575,430)
     ctx.lineTo(470,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 7
     ctx.beginPath()
     ctx.moveTo(675,430)
     ctx.lineTo(600,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 8
     ctx.beginPath()
     ctx.moveTo(775,430)
     ctx.lineTo(800,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 9
     ctx.beginPath()
     ctx.moveTo(875,430)
     ctx.lineTo(1000,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 10
     ctx.beginPath()
     ctx.moveTo(975,430)
     ctx.lineTo(1170,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 11
     ctx.beginPath()
     ctx.moveTo(1075,430)
     ctx.lineTo(1300,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 11
     ctx.beginPath()
     ctx.moveTo(1175,430)
     ctx.lineTo(1430,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 13
     ctx.beginPath()
     ctx.moveTo(1275,430)
     ctx.lineTo(1560,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 14
     ctx.beginPath()
     ctx.moveTo(1375,430)
     ctx.lineTo(1700,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     //Ligne 15
     ctx.beginPath()
     ctx.moveTo(1475,430)
     ctx.lineTo(1830,700)
     ctx.strokeStyle = "#66FFFF"
     ctx.lineWidth = 1
     ctx.stroke()
     ctx.closePath()

     


  

     

   
    
    
    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Carrelage,...]}
   */
  static buildForms() {
    // Création des pyramide
    const  carrelage1 = new Carrelage(100, 70, 500, 180, '', '', 0, true)
    
    return [carrelage1]
  }

}
