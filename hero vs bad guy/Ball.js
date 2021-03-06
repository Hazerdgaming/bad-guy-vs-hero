class Ball{
    constructor(x, y, width, height, angle) {
        var options = {
            'density':1,
            'frictionAir':0.005,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("ninja.png");
        

      }
      display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //ellipse( 0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
      }
}