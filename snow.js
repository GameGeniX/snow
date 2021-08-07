class Snow{
    constructor(x,y,r){
        var options={
            restitution:0.5
        }
        this.r = r;
        this.body=Matter.Bodies.circle(x,y,r,options)
        this.Img=loadImage("snow5.webp")
        Matter.World.add(world,this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.Img,this.body.position.x,this.body.position.y,this.r,this.r)
        pop();
    }
} 