class Chain{
    constructor(bodyA,bodyB){
var options={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:1.0,
    lenght:5
}
this.chain=Constraint.create(options);
World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        push();
        strokeWeight(10);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}