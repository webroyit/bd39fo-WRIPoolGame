const DELTA = 1/100;    // how often to update on each iteration

// update the game
function GameWorld(){
    this.whiteBall = new Ball(new Vector2(413, 413));
    this.stick = new Stick(
        new Vector2(413, 413),
        // prevent losing reference to the white ball
        this.whiteBall.shoot.bind(this.whiteBall)
    );
}

GameWorld.prototype.update = function(){
    this.stick.update();
    this.whiteBall.update(DELTA);
}

// display images
GameWorld.prototype.draw = function(){

    Canvas.drawImage(sprites.background, {x: 0, y: 0});

    this.stick.draw();
    this.whiteBall.draw();
}