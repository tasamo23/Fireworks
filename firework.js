function createFirework(x,finish)
{

    this.finishY=finish;
    this.particles=[[],[],[],[],[],[]];
    this.pos=createVector(x,window.innerHeight);
    this.v=createVector(0,-6);
    this.fillColor=random(colorArray);
    this.removed=false;
    this.deathCount=0;
    this.display=function()
    {
        
        noStroke();
        if(!this.removed)
        {
            fill(this.fillColor);
            ellipse(this.pos.x,this.pos.y,10,10)
            noFill();
        }
        else
        this.deathCount++
        if(this.deathCount>20)
        this.remove();
        for(let i=0;i<this.particles.length;i++)
        {
            for(let j=0;j<this.particles[i].length;j++)
            {
                this.particles[i][j].display();
            }
        }
        
    }
    this.update=function()
    {
        this.pos.add(this.v);
        this.pos.add(gravity);
        if(this.pos.y<this.finishY)
        {
            if(!this.removed)
            this.addParticles();
            this.removed=true;
            
        }
        for(let i=0;i<this.particles.length;i++)
        {
            for(let j=0;j<this.particles[i].length;j++)
            {
                this.particles[i][j].update();
            }
        }
    }
    this.remove=function()
    {
        fireworks.splice(fireworks.indexOf(this),1);
    }
    this.addParticles=function()
    {
        let tempColor;
        if(rows>=1)
        //first row
        {
            tempColor=random(colorArray);
            for(let i=0;i<36;i++)
            {
                this.particles[0][i]=new createParticle(this.pos.x,this.pos.y,3,tempColor,radians((i+1)*10),1);
            }
        }
        if(rows>=2)
        //second row
        {
            tempColor=random(colorArray);
            for(let i=0;i<40;i++)
            {
                this.particles[1][i]=new createParticle(this.pos.x,this.pos.y,5,tempColor,radians((i+1)*9),2);
            }
        }
        if(rows>=3)
        //third row
        {
            tempColor=random(colorArray);
            for(let i=0;i<45;i++)
            {
                this.particles[2][i]=new createParticle(this.pos.x,this.pos.y,7,tempColor,radians((i+1)*8),3);
            }
        }
        if(rows>=4)
        //forth row
        {
            tempColor=random(colorArray);
            for(let i=0;i<60;i++)
            {
                this.particles[3][i]=new createParticle(this.pos.x,this.pos.y,9,tempColor,radians((i+1)*6),4);
            }
        }
        //fifth row
        if(rows>=5)
        {
            tempColor=random(colorArray);
            for(let i=0;i<72;i++)
            {
                this.particles[4][i]=new createParticle(this.pos.x,this.pos.y,11,tempColor,radians((i+1)*5),5);
            }
        }
        //sixth row
        if(rows>=6)
        {
            tempColor=random(colorArray);
            for(let i=0;i<90;i++)
            {
                this.particles[5][i]=new createParticle(this.pos.x,this.pos.y,13,tempColor,radians((i+1)*4),6);
            }
        }
    }
}
