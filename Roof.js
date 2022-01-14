class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }

    display(){
        var posit=this.body.position
        var ang=this.body.angle
        push();
        translate(posit.x,posit.y)
        rotate(ang)
        fill("red")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();

    }

    
}