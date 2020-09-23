class Ball{
    constructor(){

    var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
 this.x=50;
 this.y=500;
 this.r=100;
 this.body=Bodies.circle(this.x,this.y,this.r/2,options);
 this.image=loadImage("paper.png");
World.add(world,this.body);
}
display(){
var pos =this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
strokeWeight(3);
imageMode(CENTER);
image(this.image,0,0,this.r);
pop();
}
}