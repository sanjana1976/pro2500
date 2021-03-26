class Ground {
  constructor(x,y,width,height) {
    var options = {
        "isStatic": true
       // "restitution":0.3,
       
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(700,780, this.width, this.height);
  }
};