class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){
this.offsetX=offsetX
this.offsetY=offsetY

        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:offsetX,y:this.offsetY}
        }
        this.Rope = Constraint.create(options)
        World.add(world,this.chain);
    }
    
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
    
        strokeWeight(3);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x+this.offsetX
        var Anchor2Y = pointB.y+this.offsetY
        
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        
    }
    }