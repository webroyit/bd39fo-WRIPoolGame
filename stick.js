function Stick(){
    this.position = {x: 0, y: 400};
}

Stick.prototype.update = function(){
    // for testing
    this.position = Mouse.position;

    if(Mouse.left.pressed){
        console.log("Pressed left");
    }
}

Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position);
}