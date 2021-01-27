class Ground{
    constructor(x,y,width,height){
        var obtion = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,obtion)
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
   rectMode(CENTER)
 fill("brown")
 rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
 }