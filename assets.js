let sprites = {};
let assetsStillLoading = 0;

// make sure that the image is loaded
function assetsLoadingLoop(callback){
    if(assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    }
    else{
        callback();
    }
}

// download the image
function loadAssets(callback){

    // access the image in the folder
    function loadSprite(fileName){
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName;

        // when the image finish loading
        spriteImage.onload = function(){
            assetsStillLoading--;
        }

        return spriteImage;
    }

    sprites.background = loadSprite("spr_background.png");
    sprites.stick = loadSprite("spr_stick.png");
    sprites.whiteBall = loadSprite("spr_whiteBall.png");
    sprites.redBall = loadSprite("spr_redBall.png");
    sprites.yellowBall = loadSprite("spr_yellowBall.png");
    sprites.blackBall = loadSprite("spr_blackBall.png");

    assetsLoadingLoop(callback);
}

function getBallSpriteByColor(color){
    switch(color){
        case COLOR.RED:
            return sprites.redBall;
            break;
        case COLOR.YELLOW:
            return sprites.yellowBall;
            break;
        case COLOR.BLACK:
            return sprites.blackBall;
            break;
        case COLOR.WHITE:
            return sprites.whiteBall;
            break;
    }
}