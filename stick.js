const STICK_ORIGIN = new Vector2(970, 11);
const STICK_SHOT_ORIGIN = new Vector2(950, 11);
const MAX_POWER = 7650;

function Stick(position, onShoot){
    this.position = position;
    this.rotation = 0;
    this.origin = STICK_ORIGIN.copy();
    this.power = 0;
    this.onShoot = onShoot;
    this.shot = false;
}

Stick.prototype.update = function(){
    if(Mouse.left.down){
        this.increasePower();
    }
    else if(this.power > 0){
        this.shoot();
    }

    this.updateRotation();
}

Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
}

Stick.prototype.updateRotation = function(){
    // get the position of the mouse pointer
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x  -this.position.x;

    // calculate the angle
    this.rotation = Math.atan2(opposite, adjacent);
}

Stick.prototype.increasePower = function(){
    if(this.power > MAX_POWER){
        return;
    }

    this.power += 120;      // how hard to hit the ball
    this.origin.x += 5;     // move the stick away from white ball
}

Stick.prototype.shoot = function(){
    this.onShoot(this.power, this.rotation);
    this.power = 0;
    this.origin = STICK_SHOT_ORIGIN.copy();
    this.shot = true;
}

Stick.prototype.reposition = function(position){
    this.position = position.copy();
    this.origin = STICK_ORIGIN.copy();
    this.shot = false;
}