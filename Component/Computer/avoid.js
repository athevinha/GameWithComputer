AvoidBoom=()=>{
	 if(BOOM && cpt){
        if(BOOM.y >= cpt.y){
            cpt.y-=1.5;
        }
        if(BOOM.y<=cpt.y){
            cpt.y+=1.5;
        }
    }
}
AvoidBullets=()=>{
	if(arrbullet[0] && cpt){
        if(arrbullet[0].y >= cpt.y){
            cpt.y-=2;
        }
        if(arrbullet[0].y<=cpt.y){
            cpt.y+=2;
        }
    }
	
}