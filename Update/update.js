//update game
//let first=null;
let deleObstacle=false;
updateGame=()=>{
    myGameArea.clear();
            square.speedX = 0;
            square.speedY = 0;
            if (myGameArea.keys && myGameArea.keys[65]) {square.speedX = -5; }//left
            if (myGameArea.keys && myGameArea.keys[68]) {square.speedX = 5;}//right
            if (myGameArea.keys && myGameArea.keys[87]) {square.speedY = -5; }//down
            if (myGameArea.keys && myGameArea.keys[83]) {square.speedY = 5; }//up
           updateBullet();
           updateCloud();
           updateComputer();
           if(SquareDie==false){
           square.newpos();
            square.update();
          }
}
 