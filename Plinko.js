class Plinko{
    constructor(x,y){
      
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,10,10,options);
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("black");
        fill("brown");
        ellipse(0,0,10,10,);
        pop();
    }
}