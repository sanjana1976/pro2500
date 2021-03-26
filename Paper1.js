class Paper{
    constructor(x,y,){
        var options={
            "restitution":0.3,
            "friction": 5.5,
            "density": 1.2,
            "isStatic" : false
        
        }
        this.body= Bodies.circle(x,y,10.25,options)
        this.width= 80
        this.height= 90
        this.image= loadImage("sprites/paper.png");
        World.add(world,this.body);

    }    
    display(){
        var pos= this.body.position
      // pos.x= 50
      //  pos.y= mouseY
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
       // strokeWeight(6)
       // stroke("white")
       // fill("pink")
       
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    
    }
    