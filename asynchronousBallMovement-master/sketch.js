var ball;
var database;
var position;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball2 = createSprite(50,50,15,15);
    ball2.shapeColor = "purple";
    database.ref('Ball/position').on("value",readposition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
        writeposition(0,1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readposition(data){
   position = data.val();
   ball2.x = position.x;
   ball2.y = position.y; 
}

function writeposition(x,y){
  database.ref('Ball/position').set({
      x:position.x+x, 
      y:position.y+y
  })
}


