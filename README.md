## Générateur de paysages virtuels 

Cette application génère, à chaque fois qu'elle est activée (ou rechargée), un paysage imaginaire, construit avec du code JavaScript.

### Prérequis 

* Connaissance de base de HTML / CSS (le JS peut être abordé ici pour la première fois)
* Connaissance de base en programmation 
* Connaissance de base en POO (_programmation orientée objet_)
* git de base + IDE (visual studio code)

### Objectifs  

Mon objectif était de réalisé sur le canva le paysage que voici ci-dessous. Je n'avais pas beaucoup d'inspiration alorq je me suis mise au défi de reproduire au mieux un paysage déja existant. :  (copies écran) :
<p float="left">
<img src="Docs/modèle.jpg" height="500">
</p>


### Prise en main
j'ai réalisé indivivuellement, chaque élément nécessaire à la reproduction de mon modèle de paysage.
Il y a donc environ une dizaine de formes.

### Fond 

j'ai en premier lieu changé la couleur du fond de mon paysage en mofidifiant le code CSS du `layout` 

 ```css
 <!DOCTYPE css>
body {
    width:100%;
    font:14px/1 Arial,sans-serif;
    background: linear-gradient(#21014d, #6823bc);
}
```

### Classe de forme

Chaque classe est spécialisée dans une forme donnée.
Une classe de forme hérite de `AbstractForm` (ses attributs sont présentés plus loin) :

```javascript
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un ?????
 */
export class ????? extends AbstractForm {
   constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    odreConstruction = 100
  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, odreConstruction)
  }

 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw (ctx) {
    super.draw(ctx) 
       // pour prise en compte de la pesanteur (redefinit y)
    ctx.save()
    // votre code ici
    ctx.restore()
  }
 /**
   * get array of instances of this class
   * @return {[Object,...]}
   */
  static buildForms() {
    let forms = []
    // votre code ici
    return forms
  }
}
```
* j'ai donc utilisé la structure de ce code pour crée mes différentes formes.
* En voici quelque exemple :

## LA LUNE :
* Dans le code ci-dessous j'ai dessiné une lune dont le dégradé permet à celle-ci de se fondre presque totalement dans le fond.
Le dégradé crée ici est donc linéaire, allant de bas en haut de la couleur la plus foncée à la plus claire.
Ce principe de dégradé a été repris à plusieurs reprises pour colorer les autres formes comme le sol ou les pyramides. 

```javascript
  draw(ctx) {
    super.draw(ctx) 
    ctx.save()

    ctx.strokeStyle = this.strokeColor
    ctx.fillStyle = this.fillColor
    
    //création d'un dégradé
   var degrade = ctx.createLinearGradient(0, 0,0, 900); //position du dégradé sur le canva 
    degrade.addColorStop(0, '#0d0125'); //définition des couleurs + leur position dans le dégradé 
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
  
```
* On obtient donc ce résultat :
<p float="left">
<img src="docs/lune.png" height="500">
</p>

## LES PYRAMIDES :

## I/La structure de base 

* Les pyramides ont été crées en deux étapes : la première consistant à les placer et leurs donner une forme initiale, l'autre, à faire leurs contours pour leurs donner cet effet de relief.
 ```javascript
 static buildForms() {
  // Création des Pyramide
  const Pyramide1 = new Pyramide(-100, 150, 500, 280, '#66FFFF', '#66FFFF', 0, false)
  const Pyramide2 = new Pyramide(200, 190, 500, 240, '#66FFFF', '#66FFFF', 0, false)                                
  const Pyramide3 = new Pyramide(800, 210, 500, 220, '#66FFFF', '#66FFFF', 0, false)
  const Pyramide4 = new Pyramide(1100, 150, 500, 280, '#66FFFF', '#66FFFF', 0, false)
  const Pyramide5 = new Pyramide(500, 105, 550, 325, '#66FFFF', '#66FFFF', 0, false)
  return [Pyramide1,Pyramide2,Pyramide3,Pyramide4,Pyramide5]
  }

 ```
* J'ai donc crée plusieurs objets "pyramide" dont j'ai défini : la position sur le canva, la longueur ainsi que la hauteur et la couleur (le même procédé a été utilisé pour dessiner les 'mini' pyramides).

Le resulat : 
<p float="left">
<img src="docs/pyramide.png" height="500">
</p>

## II/Le relief 

* Pour donner cet effet "3D" à mes pyramides, après les avoir dessiné de manière simple, j'en ai fait les contours, que j'ai rempli ensuite avec la méthode du dégradé vu prédecement, comme le montre le code ci-dessous : 

```javascript

//création dégradé
var degrade6 = ctx.createLinearGradient(0,0,0,480);
     degrade6.addColorStop(0.5, '#66FFFF');
     degrade6.addColorStop(1, '#CC33FF ');
     
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
```
* Après avoir faire celà, j'ai réalisé que dessiner mes pyramides directement de cette manière, aurait été plus simple. Mais le résultat me plaisait bien donc j'ai gardé la structure de base. De ce fait les contours apparaissent un peu comme étant des "coques".

<p float="left">
<img src="docs/contours.png" height="500">
</p>

## LES ETOILES :
* Les "étoiles" de mon paysage sont dessinées sous formes de petites boules blanches, et sont les seuls éléments qui ne sont pas statiques. De plus, elles sont générées de manière aléatoire. 

 ```javascript
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
          myetoile.strokeColor,
         
        )
      )
    }
    // retourne un tableau d'objets de type Triangle
    return forms
  }
 ```
 En effet le programme des étoiles permet de générer 3000 étoiles. Elles sont obligatoirement en hauteur, mais leur placement n'est pas défini.
 
## LES SPHERES :
* Les sphères sont des éléments qui n'étaient pas sur le modèle de base, mais que jai ajouté. Pour les dessiner, j'ai utilisé une autre technique de dégradé, ainsi que des ombres pour qu'elles puissent ressortir.

 ```javascript

    //Sphere 1
   var degrade_sphere1= ctx.createRadialGradient(130, 420,1,100, 430, 50);
   degrade_sphere1.addColorStop(1, '#9B59B6');
   degrade_sphere1.addColorStop(0.5, '#C39BD3'); 
   
   //Sphere 2
   var degrade_sphere2= ctx.createRadialGradient(171, 485,0.5,150, 500, 30);
   degrade_sphere2.addColorStop(1, '#9B59B6'); 
   degrade_sphere2.addColorStop(0.3, 'white'); 
   ctx.fillStyle = degrade_sphere2;


   //dessin de la Sphere 1
    ctx.beginPath()
    //Forme du cercle
    ctx.arc(100, 450, 70, 0, Math.PI * 2, true)
    //définition de la couleur du remplissage comme étant le dégradé
    ctx.fillStyle = degrade_sphere1;
    ctx.strokeStyle = '#9B59B6';
    //définition des caractéristiques pour les ombres
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
```
* Le résultat :  
<p float="left">
<img src="docs/spheres.png" height="500">
</p>

```
le reste des éléments de mon paysage tels que mon sol ou encore mon carrelage sont des formes dont le code a été réadapté d'ancienne formes déjà présentées.
```# Virtual-Landscape
