let cpt,BoomComputer;
StartGameComputer=()=>{
    cpt=new sq(30,30,"red",1200,300);
    let ComputerInterval=setInterval(FireAuto,2000);
}

let arrColors=["blue","red","purple","orange","green","gray","white"];
FireAuto=()=>{  
    let Color=arrColors[RandomFrom(0,7)];
    BoomComputer=new sq(RandomFrom(100,150),RandomFrom(20,50),Color,cpt.x,cpt.y);
}
Aim=()=>{//Control The Boom to get target =))) (square)
    if(BoomComputer.y >= square.y){BoomComputer.y-=3;}
    else{BoomComputer.y+=3;}
}
let diecomputer=false;
updateComputer=()=>{
    if(BoomComputer && diecomputer==false){
        Aim();
        BoomComputer.x-=8 ;
        BoomComputer.update();
        if(BoomComputer.CrashWith(square)){
            SquareDie=true;
        }
    }
    AvoidBoom();
    AvoidBullets();
    //crash
    if(arrbullet)
    {
        for(let s = 0 ; s < i;s++){
            if(arrbullet[s].CrashWith(cpt)){
                diecomputer=true;
            }
        }
    }
    if(BOOM && BOOM.CrashWith(cpt)){
        diecomputer=true;
    }
    //Loang false ......
    if(diecomputer==false){
    cpt.update();
    }
}