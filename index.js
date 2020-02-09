let square,bullets,fps=7,i=0,arrbullet=[],SquareDie=false;


var myGameArea={
    canvas:document.createElement("canvas"),
    start:function(){
        this.canvas.width=1335;
        this.canvas.height=620;
        this.context=this.canvas.getContext("2d");
        
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval= setInterval(updateGame,fps);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
          })
          window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
          })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop:function (){
        clearInterval(this.interval);
    }
}
RandomFrom=(a,b)=>{
    return Math.floor((Math.random()*b)+a);     
}
let RemoveElement=(arr,a)=>{
    let first=arr[0];
    arr[0]=arr[a];
    arr[a]=first;
    arr.shift();
    return arr;
}
myStartGame=()=>{
    myGameArea.start();
    square= new sq(30,30,"orange",100,120);
    StartGameObstacle();
    StartCloud();
    StartGameComputer();  
}

function sq(width,height,color,x,y,type){
    this.type=type;
    if(type=="image"){
        this.image= new Image();
        this.image.src=color;
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.speedX=0;
    this.speedY=0;
    this.height=height;
    this.update=()=>{
    ctx=myGameArea.context;
    if (type == "image") {
       ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    };
    this.clear=()=>{

    }
    this.newpos=()=>{
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
    this.CrashWith=(Obj)=>{
        let myleft=this.x,
        myright=this.x+this.width,
        mytop=this.y,
        mybottom=this.y+this.height;
        let OtherLeft=Obj.x,
        OtherRight=Obj.x+Obj.width,
        OtherTop=Obj.y,
        OtherBottom=Obj.y+Obj.height;
        let crash=true;
        if(myleft>OtherRight || myright<OtherLeft || mytop>OtherBottom || mybottom<OtherTop)crash=false;
        return crash;
    }
}
