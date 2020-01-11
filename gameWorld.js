// update the game
function GameWorld(){
    this.whiteBall = new Ball(new Vector2(413, 413));
    this.stick = new Stick();
}

GameWorld.prototype.update = function(){
    this.stick.update();
    this.whiteBall.update();
}

// display images
GameWorld.prototype.draw = function(){

    Canvas.drawImage(sprites.background, {x: 0, y: 0});

    this.stick.draw();
    this.whiteBall.draw();
}