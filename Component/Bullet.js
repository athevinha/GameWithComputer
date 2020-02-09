let oc=0;
let BOOM,ComputerBoom=false;
updateBullet=()=>{
    for(let s = 0 ; s < i ; s ++){
    if(arrbullet && arrbullet[s] && arrbullet[s].x>1300){
        arrbullet=RemoveElement(arrbullet,s);
        i--;
      }   
}
    if (myGameArea.keys && myGameArea.keys[82] ) {
        square.x-=15;
        bullets=new sq(50,3,"green",square.x,square.y);
        bullets.speedX+=50;
        arrbullet.push(bullets);
        i++;
    }
    if(i>0){
        for(let s = 0 ; s<i;s++){
           if(SquareDie==false){
             arrbullet[s].update();
            arrbullet[s].newpos();
           }
        }
       }

       if(BOOM && BOOM.x>1300){
           BOOM=null;
          
       }
    if (myGameArea.keys && myGameArea.keys[70]) {
        BOOM=new sq(200,30,"yellow",square.x,square.y); 
        square.x-=20;
        BOOM.speedX=38;
    }
       if(BOOM && SquareDie==false){
        BOOM.newpos();
           BOOM.update();
       }
}