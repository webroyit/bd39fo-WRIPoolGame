const STICK_ORIGIN = new Vector2(970, 11);

function Stick(position){
    this.position = position;
    this.rotation = 0;
}

Stick.prototype.update = function(){
    this.updateRotation();
}

Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position, STICK_ORIGIN, this.rotation);
}

Stick.prototype.updateRotation = function(){
    // get the position of the mouse pointer
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x  -this.position.x;

    // calculate the angle
    this.rotation = Math.atan2(opposite, adjacent);
}