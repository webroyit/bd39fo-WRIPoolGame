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
function loadAssest(callback){

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

    assetsLoadingLoop(callback);
}