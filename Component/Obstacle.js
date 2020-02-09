let ls=1
let obstacles=[],noframe=0;
StartGameObstacle=()=>{
     obstacles.push(new sq(10,70,"blue",1000,520));
     obstacles[0].speedX=-1;
     obstacles[0].update();
     let intervals=setInterval(UpdateObstacle,4000);
}
UpdateObstacle=()=>{
     obstacles.push(new sq(10,70,"blue",1300,520));
     obstacles[ls].speedX=-1;
     ls++;
     console.log("push one");
     //noframe++;
}