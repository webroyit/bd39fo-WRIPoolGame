function handleMouseMove(e){
    let x = e.pageX;
    let y = y.pageY;

    Mouse.position = new Vertor2(x, y);
}

function handleMouseDown(e){
    handleMouseMove(e);

    // which check which button on the mouse is press
    if(e.which === 1){
        if(!Mouse.left.down){
            Mouse.left.pressed = true;
        }
        Mouse.left.down = true;
    }
    else if(e.which === 2){
        if(!Mouse.middle.down){
            Mouse.middle.pressed = true;
        }
        Mouse.middle.down = true;
    }
    else if(e.which === 3){
        if(!Mouse.right.down){
            Mouse.right.pressed = true;
        }
        Mouse.right.down = true;
    }
}

function MouseHandler(){
    this.left = new ButtonState();
    this.middle = new ButtonState();
    this.right = new ButtonState();

    this.position = new Vector2();

    document.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
}

let Mouse = new MouseHandler();