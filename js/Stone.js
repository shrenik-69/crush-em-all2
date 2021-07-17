class Stone 
{
  constructor(x, y,r) 
  {
    let options = {
     restitution:0.8
    };
    
    this.body = Bodies.circle(x, y,r, options);
    this.r = r
    World.add(world, this.body);
  }

  display() {
    let pos = this.body.position;
    push();
    ellipseMode(CENTER);
    noStroke();
    fill("grey");
    ellipse(pos.x,pos.y, this.r, this.r);
    pop();
  }
}