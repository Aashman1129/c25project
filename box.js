class Dustbin{
    constructor() {
 var options ={
     isStatic: true
 }
this.bodybottom= Bodies.rectangle(600,580,200,300,options);
this.width1=200;
this.height1=200;

this.bodyleft= Bodies.rectangle(500,610,20,100,options);
this.width2=20;
this.height2=100;
    
this.bodyright= Bodies.rectangle(700,610,20,100,options);
this.width3=20;
this.height3=100;

this.image=loadImage("dustbingreen.png");


World.add(world,this.bodybottom);
World.add(world,this.bodyleft);
World.add(world,this.bodyright);


}
display(){
var bottom=this.bodybottom.position;
var boxLeft=this.bodyleft.position;
var boxRight=this.bodyright.position;
imageMode(CENTER);

image(this.image,bottom.x,bottom.y,this.width1,this.height1);
//rect(boxLeft.x,boxLeft.y,this.width2,this.height2);
//rect(boxRight.x,boxRight.y,this.width3,this.height3);
}


}