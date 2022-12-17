function createParticle(x,y,speed,color,rotation,size)
{
    this.pos=createVector(x,y);
    this.v=createVector(0,-speed);
    this.v.rotate(rotation);
    this.size=size;
    this.fillColor=color;
    this.display=function()
    {
        fill(this.fillColor)
        ellipse(this.pos.x,this.pos.y,this.size,this.size)
    }
    this.update=function()
    {
        this.pos.add(this.v);
        this.v.add(gravity);
        this.v.setMag(this.v.mag()/1.1);
    }

}