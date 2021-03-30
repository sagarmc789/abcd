class Stone  {
    constructor(x,y){
   
   var options={

    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
   }
   this.body = Bodies.rectangle(x,y,70,70,options);
      this.width =70;
      this.height = 70;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
  
    }
}