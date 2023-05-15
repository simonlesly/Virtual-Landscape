import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine le sol
 */
export class ContourPyramide extends AbstractForm {
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
    ordreConstruction = 102
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
    ctx.strokeStyle ='black'

     //création des dégradés
     var degrade1 = ctx.createLinearGradient(0,0,0,700);
     degrade1.addColorStop(0, '#66FFFF');
     degrade1.addColorStop(1, '#CC33FF ');

     var degrade2 = ctx.createLinearGradient(0,0,0,600);
     degrade2.addColorStop(0, '#66FFFF');
     degrade2.addColorStop(1, '#CC33FF ');

     var degrade3 = ctx.createLinearGradient(0,0,0,350);
     degrade3.addColorStop(0.75, '#66FFFF');
     degrade3.addColorStop(0.99, '#9999FF  ');

     var degrade4 = ctx.createLinearGradient(0,0,0,500);
     degrade4.addColorStop(0.45, '#66FFFF');
     degrade4.addColorStop(0.6, '#9999FF  ');

     var degrade5 = ctx.createLinearGradient(0,0,0,485);
     degrade5.addColorStop(0.3, '#66FFFF');
     degrade5.addColorStop(1, '#CC33FF ');

     var degrade6 = ctx.createLinearGradient(0,0,0,480);
     degrade6.addColorStop(0.5, '#66FFFF');
     degrade6.addColorStop(1, '#CC33FF ');
     
     
    //création des contours

    //contours triangle du millieu (pyramide1)
    ctx.beginPath();
    ctx.moveTo(150,150)
    ctx.lineTo(0,317)
    ctx.lineTo(0,430)
    ctx.lineTo(80,430)
    ctx.lineTo(150,150)
    ctx.fillStyle = degrade6;
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(150,150)
    ctx.lineTo(80,430)
    ctx.lineTo(200,430)
    ctx.lineTo(309,325)
    ctx.lineTo(150,150)
    ctx.fillStyle = degrade3;
    ctx.fill()
    ctx.closePath()

    //contours triangle du millieu (pyramide2)

    ctx.beginPath();
    ctx.moveTo(450,190)
    ctx.lineTo(200,430)
    ctx.lineTo(300,430)
    ctx.lineTo(450,190)
    ctx.fillStyle = degrade1;
    ctx.fill()
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(450,190)
    ctx.lineTo(300,430)
    ctx.lineTo(500,430)
    ctx.lineTo(590,322)
    ctx.lineTo(450,190)
    ctx.fillStyle = degrade3;
    ctx.fill()
    ctx.closePath()


    //contours triangle du millieu (pyramide3)
    ctx.beginPath();
    ctx.moveTo(1050,210)
    ctx.lineTo(944,304)
    ctx.lineTo(1050,430)
    ctx.lineTo(1100,430)
    ctx.lineTo(1154,370)
    ctx.lineTo(1050,210)
    ctx.fillStyle = degrade3;
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(1050,210)
    ctx.lineTo(1155,370)
    ctx.lineTo(1190,330)
    ctx.lineTo(1050,210)
    ctx.fillStyle = degrade4;
    ctx.fill()
    ctx.closePath()


  //contours triangle du millieu (pyramide4)
  ctx.beginPath();
  ctx.moveTo(1350,150)
  ctx.lineTo(1098,430)
  ctx.lineTo(1300,430)
  ctx.lineTo(1350,150)
  ctx.fillStyle = degrade5;
  ctx.fill()
  ctx.closePath()

  ctx.beginPath();
  ctx.moveTo(1350,150)
  ctx.lineTo(1300,430)
  ctx.lineTo(1540,430)
  ctx.lineTo(1540,362)
  ctx.lineTo(1350,150)
  ctx.fillStyle = degrade6;
  ctx.fill()
  ctx.closePath()


    //contours triangle du millieu (pyramide5)
    ctx.beginPath();
    ctx.moveTo(775,105)
    ctx.lineTo(500,430)
    ctx.lineTo(650,430)
    ctx.lineTo(775,105)
    ctx.fillStyle = degrade1;
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(775,105)
    ctx.lineTo(1050,430)
    ctx.lineTo(650,430)
    ctx.lineTo(775,105)
    ctx.fillStyle = degrade2;
    ctx.fill()
    ctx.closePath();
  
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[ContourPyramide,...]}
   */
  static buildForms() {
    // Création des pyramide
    const  ContourPyramide1 = new ContourPyramide(0, 0, 0, 0, '', '', 0, true)
    
    return [ContourPyramide1]
  }

}
