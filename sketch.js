var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(50,580,150,30);
    surface1.shapeColor = "RED";

    surface2 = createSprite(275,580,150,30);
    surface2.shapeColor = "BLUE";
    
    surface3 = createSprite(500,580,150,30);
    surface3.shapeColor = "GREEN";

    surface4 = createSprite(725,580,150,30);
    surface4.shapeColor = "PURPLE";



    //create box sprite and give velocity
    ball = createSprite(random(20,750),300,15,15);
    ball.shapeColor = "BLACK";
    ball.velocityX = 5;
    ball.velocityY = 7;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    music.loop();



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
       ball.shapeColor = "RED";

    }

    if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor = "BLUE";
 
     }

     if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "GREEN";
 
     }

     if(surface4.isTouching(ball)){
        ball.shapeColor = "PURPLE";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
 
     }
     drawSprites();

}
