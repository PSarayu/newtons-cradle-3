class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        
         var options={
           bodyA:body1,
           bodyB:body2,
           pointB:{x:this.offsetX,y:this.offsetY},
           stiffness:0.04
        }  

        this.chain=con.create(options);
        World.add(world,this.chain);
   } 
   display(){
    var pos=this.chain.bodyA.position
    var posi=this.chain.bodyB.position
    
    strokeWeight(2)
    push();
    var Anchor1X=pos.x
    var Anchor1Y=pos.y
    var Anchor2X=posi.x+this.offsetX
    var Anchor2Y=posi.y+this.offsetY
    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    pop();
}
}