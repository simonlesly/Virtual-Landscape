import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une sorte de planete...
 */
export class Sphere extends AbstractForm {
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
    ordreConstruction = 104
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  draw(ctx) {
    ctx.save()

    ctx.strokeStyle = this.strokeColor
    ctx.fillStyle = this.fillColor

    //création des dégradé
  
    //Sphere 1
   var degrade_sphere1= ctx.createRadialGradient(130, 420,1,100, 430, 50);
   degrade_sphere1.addColorStop(1, '#9B59B6');
   degrade_sphere1.addColorStop(0.5, '#C39BD3'); 
   
   //Sphere 2
   var degrade_sphere2= ctx.createRadialGradient(171, 485,0.5,150, 500, 30);
   degrade_sphere2.addColorStop(1, '#9B59B6');
   degrade_sphere2.addColorStop(0.3, 'white'); 
   ctx.fillStyle = degrade_sphere2;

   //Sphere 3
   var degrade_sphere3= ctx.createRadialGradient(1450, 420,1,1450, 430, 50);
   degrade_sphere3.addColorStop(1, '#9B59B6');
   degrade_sphere3.addColorStop(0.6, '#C39BD3'); 
   
   //Sphere 4
   var degrade_sphere4= ctx.createRadialGradient(1410, 485,0.5,1390,500, 30);
   degrade_sphere4.addColorStop(1, '#9B59B6');
   degrade_sphere4.addColorStop(0, 'white'); 
   ctx.fillStyle = degrade_sphere2;
   
    
    
    //dessin de la Sphere 1
    ctx.beginPath()
    ctx.arc(100, 450, 70, 0, Math.PI * 2, true)
    ctx.fillStyle = degrade_sphere1;
    ctx.strokeStyle = '#9B59B6';
    ctx.shadowOffsetX =-5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#0d0125';
    ctx.fill()
    //fin du dessin
    ctx.closePath()
    ctx.restore()

    
    //dessin de la Sphere 2
    ctx.beginPath()
    ctx.arc(150, 495, 35, 0, Math.PI * 2, true)
    ctx.fillStyle = degrade_sphere2;
    ctx.strokeStyle = '#9B59B6';
    ctx.shadowOffsetX =-5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#0d0125';
    ctx.fill()
    ctx.stroke()
    //fin du dessin
    ctx.closePath()
    ctx.restore()


    //dessin Sphere 3
    ctx.beginPath()
    ctx.arc(1450, 450, 70, 0, Math.PI * 2, true)
    ctx.fillStyle = degrade_sphere3;
    ctx.strokeStyle = '#9B59B6';
    ctx.shadowOffsetX =5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#0d0125';
    ctx.fill()
    ctx.stroke()
    //fin du dessin
    ctx.closePath()
    ctx.restore()

    //dessin Sphere 4
    ctx.beginPath()
    ctx.arc(1390, 500, 35, 0, Math.PI * 2, true)
    ctx.fillStyle = degrade_sphere4;
    ctx.strokeStyle = '#9B59B6';
    ctx.shadowOffsetX =5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#0d0125';
    ctx.fill()
    ctx.stroke()
    //fin du dessin
    ctx.closePath()
    ctx.restore()

  }

  /**
   * get array of forms
   * @return {[Sphere...]}
   */
  static buildForms() {
    const mysphere = new Sphere(0, 10, 0, 0, '', '', 1, false)
    const forms = [mysphere]
    return forms
  }
}
