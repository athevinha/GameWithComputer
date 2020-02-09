let clouds=[];

let l=0;
StartCloud=()=>{//1335||620
    let CloudInterval=setInterval(() => {
        var x = Math.floor((Math.random() * 100) + 1);

        let widthCloud=Math.floor((Math.random() * 150) + 100);
        let heightCloud=Math.floor((Math.random() * 60) + 40);
        
        let color=arrColors[RandomFrom(0,7)];
        clouds.push(new sq(widthCloud,heightCloud,color,1300,x));
        l++;
    }, 2000);
}
updateCloud=()=>{
    for(let s = 0 ; s < l ; s++){
        if(clouds[s] && clouds[s].x<-100){
            clouds=RemoveElement(clouds,s);
        }
        if(clouds[s]){
            clouds[s].speedX=-1;
        clouds[s].newpos();
        clouds[s].update();
        }
    }
 
}