let sprites = {};
let assetsStillLoading = 0;

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
}