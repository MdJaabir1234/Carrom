const striker=document.querySelector(".ball");
const world=document.querySelector(".world");
const indicator=document.querySelector(".indicator");
const pocket=document.querySelector(".pocket.p1");
const friction=8700;
let turn=0;
let other=1;
let isStrikerMoving=false;
let isAllstopped=true;

let touchStart={x:0,y:0};
let touchEnd={x:0,y:0};
let colors=["green","purple","red"];
let elements={
  striker:{
    element:striker,
    m:400,
    x:167.5,
    y:43,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:12.5,
    color:"blue",
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece1:{
    m:250,
    x:100,
    y:100,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[0],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece2:{
    m:250,
    x:100,
    y:120,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[0],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece3:{
    m:250,
    x:130,
    y:130,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[0],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece4:{
    m:250,
    x:170,
    y:120,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[0],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece5:{
    m:250,
    x:101,
    y:199,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[0],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece6:{
    m:250,
    x:70,
    y:90,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[1],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece7:{
    m:250,
    x:190,
    y:290,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[1],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece8:{
    m:250,
    x:140,
    y:90,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[1],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece9:{
    m:250,
    x:220,
    y:280,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[1],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  piece10:{
    m:250,
    x:69,
    y:69,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[1],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  },
  red:{
    m:250,
    x:160,
    y:180,
    v:0,
    vx:0,
    vy:0,
    a:0,
    r:9,
    color:colors[2],
    hittingwall:false,
    lastTime:0,
    get d(){
      return friction/this.m;
    },
    storedVelocity:0,
    loopId:null,
    get maxX(){
      return (world.clientWidth - this.element.offsetWidth);
    },
    get maxY(){
      return (world.clientHeight - this.element.offsetHeight);
    }
  }
}
let piecesCount=[5,5,1];
let pocketCornerX=world.clientHeight-pocket.clientHeight;
let pocketCornerY=world.clientWidth-pocket.clientWidth;
let turnMoved=true;
let hasToCover=false;

let pocketCorners=[
  {
    x:world.clientWidth-pocketCornerX,
    y:pocketCornerY,
  },
  {
    x:pocketCornerX,
    y:pocketCornerY,
  },
  {
    x:world.clientWidth-pocketCornerX,
    y:world.clientHeight-pocketCornerY,
  },
  {
    x:pocketCornerX,
    y:world.clientHeight-pocketCornerY,
  }
]

function createPieces(){
  let pieceNames=Object.keys(elements);
  let piecProperties=Object.values(elements);
  pieceNames.forEach((piece,index)=>{
    let newPiece=document.createElement("div");
    if(piece!="striker"){
      newPiece.classList.add("piece");
    }
    newPiece.classList.add("ball");
    newPiece.classList.add(piecProperties[index].color);
    newPiece.style.background=piecProperties[index].color;
    elements[piece].element=newPiece;
    setPos(piece,piecProperties[index].x,piecProperties[index].y);

    world.appendChild(newPiece);
  });
}

function checkIfAllStopped(){
  isAllstopped=true;
  Object.values(elements).forEach((element,index)=>{
    if(element && element.v!==0){
      isAllstopped=false;
    }
  });
}
function setStriker(turn){
  
  if(turn==0 && elements.striker.y==43 && elements.striker.x==(360/2-elements.striker.r)){
    return;
  }else if(turn==1 && elements.striker.y==277 && elements.striker.x==(360/2-elements.striker.r)){
    return;
  }
  /*Object.values(elements).forEach((element,index)=>{
    if(element && element.v!==0){
      console.log("stopped here");
      isAllstopped=false;
    }
  });*/
  if(isAllstopped==false){
    return;
  }
  
    elements.striker.element.classList.add("smooth-moving");
    elements.striker.y=turn==0?43:277;
    elements.striker.x=360/2-elements.striker.r;
    setTimeout(()=>{
      elements.striker.element.classList.remove("smooth-moving");
    },500);
  
}

function setPos(entity,X,Y){
  if(!elements[entity]){
    return;
  }
  elements[entity].x=X;
  elements[entity].y=Y;
  elements[entity].element.style.left=X+"px";
  elements[entity].element.style.bottom=Y+"px";
}

function countPieces(){
  let ownPiecesCount=[0,0,0];
  Object.values(elements).forEach(element=>{
    if(element.color==colors[0]){
      ownPiecesCount[0]++;
    }else if(element.color==colors[1]){
      ownPiecesCount[1]++;
    }if(element.color==colors[2]){
      ownPiecesCount[2]++;
    }
  });
  return ownPiecesCount;
}

function checkWin(){
  if(piecesCount[0]==0){
    if(piecesCount[2]==0){
      alert(colors[0] + " won");
    }else{
      alert("Red is a must!");
    }
  }
  if(piecesCount[1]==0){
    if(piecesCount[2]==0){
      alert(colors[1] + " won");
    }else{
      alert("Red is a must!");
    }
  }
}

window.onload=()=>{
  createPieces();
  start();
  requestAnimationFrame((timestamp)=>{
    checkAllCollisions();
    update(timestamp);
  });
}

function strike(entity,velocity,angle){
  if(!elements[entity]){
    return;
  }
  elements[entity].lastTime=0;
  elements[entity].a=angle*(Math.PI/180);
  elements[entity].v=velocity;
  elements[entity].d=elements[entity].v/100;
  turnMoved=false;
}

function update(timestamp){
    updateEverything(timestamp);
    requestAnimationFrame((timestamp)=>{
      checkAllCollisions();
      update(timestamp);
    });
}

function updateEverything(timestamp){
  
  
  checkStrikerMovement();
  Object.keys(elements).forEach(element=>{
    updateBall(element,timestamp);
    if(element!=="striker"){
      checkAllPockets(element);
    }
  });

 
 // if(elements.striker.v==0 ){
    checkIfAllStopped();
    if(isAllstopped && !turnMoved){
      console.log("...");
      let newPiecesCount=countPieces();
      if(hasToCover){
        if(newPiecesCount[turn]== piecesCount[turn] ){
          let red=document.createElement("div");
          red.classList.add("piece");
          red.classList.add("ball");
          red.classList.add("red");
          world.appendChild(red);
          elements.red={
            element:red,
            m:250,
            x:160,
            y:180,
            v:0,
            vx:0,
            vy:0,
            a:0,
            r:9,
            color:colors[2],
            hittingwall:false,
            lastTime:0,
            get d(){
              return friction/this.m;
            },
            storedVelocity:0,
            loopId:null,
            get maxX(){
              return (world.clientWidth - this.element.offsetWidth);
            },
            get maxY(){
              return (world.clientHeight - this.element.offsetHeight);
            }
          }
        }
          hasToCover=false;
      }
      if(newPiecesCount[turn]== piecesCount[turn] && newPiecesCount[2]==piecesCount[2]){
        
        if(turn==0){
          turn=1;
          other=0;
        }else if(turn==1){
          turn=0;
          other=1;
        }
      }else{
        
        if(newPiecesCount[2]<piecesCount[2]){
          hasToCover=true;
        }
        
      }
      piecesCount=countPieces();
      checkWin();
      if(!turnMoved){
        console.log(turnMoved);
      }
      setStriker(turn);
      turnMoved=true;
    }
    
    //console.log(isAllstopped,turnMoved);
    
    
  //}
}

function checkStrikerMovement(){
  if(elements.striker.v!=0){
    isStrikerMoving=true;
  }
  
  if(isStrikerMoving && elements.striker.v==0 &&(elements.striker.y==43 || elements.striker.y==277)){
    setTimeout(()=>{
      isStrikerMoving=false;
      document.querySelector(`.slider${turn}`).style.opacity=1;
      document.querySelector(`.slider${turn} .circle`).style.left="50%";
      document.querySelector(`.slider${other}`).style.opacity=0;
    },500);
    
  }
  
}

function updateBall(entity,timestamp){
  if(!elements[entity]){
    return;
  }
  if(!elements[entity].lastTime) {
    elements[entity].lastTime=timestamp;
  };
  let t=(timestamp-elements[entity].lastTime)/1000;
  elements[entity].vx=elements[entity].v*Math.cos(elements[entity].a);
  elements[entity].vy=elements[entity].v*Math.sin(elements[entity].a);
  elements[entity].x+=elements[entity].vx*t;

  elements[entity].y+=elements[entity].vy*t;
  
  if(elements[entity].v>0){
    elements[entity].v-=elements[entity].d*t;
  }
  if(elements[entity].v<0){
    elements[entity].v=0;
  }
  
  elements[entity].lastTime=timestamp;
  setPos(entity,elements[entity].x,elements[entity].y);
  //elements.striker.x=40;
  boundBall(entity);
}

function boundBall(entity){
  if(!elements[entity]){
    return;
  }
  if(elements[entity].x<0){
    elements[entity].hittingwall="left";
    elements[entity].storedVelocity=elements[entity].v;
    elements[entity].v=0;
    elements[entity].d=0;
    sendOpposite(entity);
  }
  if(elements[entity].x>elements[entity].maxX){
    elements[entity].hittingwall="right";
    elements[entity].storedVelocity=elements[entity].v;
    elements[entity].v=0;
    elements[entity].d=0;
    sendOpposite(entity);
  }
  if(elements[entity].y<0){
    elements[entity].hittingwall="bottom";
    elements[entity].storedVelocity=elements[entity].v;
    elements[entity].v=0;
    elements[entity].d=0;
    sendOpposite(entity);
  }
  if(elements[entity].y>elements[entity].maxY){
    elements[entity].hittingwall="top";
    elements[entity].storedVelocity=elements[entity].v;
    elements[entity].v=0;
    elements[entity].d=0;
    sendOpposite(entity);
  }
}

function createDots(ix,iy){
  let indicatorCircle=document.createElement("div");
    indicator.appendChild(indicatorCircle);
    indicatorCircle.classList.add("indicator-circle");
    indicatorCircle.style.top=iy+"px";
    indicatorCircle.style.left=ix+"px";
}

function ommitDots(){
  document.querySelectorAll(".indicator-circle").forEach(circle=>{
    indicator.removeChild(circle);
  });
}

function start(){
  let striker=elements.striker.element;
  striker.ontouchstart=(event)=>{
    //if(elements.striker.v!=0) return;
    let touch=event.touches[0];
    touchStart.x=touch.clientX;
    touchStart.y=touch.clientY;
    
  }
  
  striker.ontouchend=(event)=>{
    if(isStrikerMoving) return;
    let touch=event.changedTouches[0];
    touchEnd.x=touch.pageX;
    touchEnd.y=touch.pageY;
    calculateTouch();
    ommitDots();
  }
  
  striker.ontouchmove=(event)=>{
    if(isStrikerMoving) return;
    ommitDots();
    if(elements.striker.v!=0) return;
    let x=event.touches[0].clientX;
    let y=event.touches[0].clientY;
    let absPos={
      x:striker.getBoundingClientRect().left+10,
      y:striker.getBoundingClientRect().top+10
    }
    let deltaX=Math.abs(x-absPos.x);
    let slope=((y-absPos.y)/(x-absPos.x));
    let antiSlope=1/slope;
    //console.log(slope);
      if(deltaX>70){
        if(x<absPos.x){
          for(let ix=x;ix<=absPos.x; ix+=10){
            let iy=slope*(ix-x)+y;
            createDots(ix,iy);
          }
        }else{
          for(let ix=x;ix>=absPos.x; ix-=10){
            let iy=slope*(ix-x)+y;
            createDots(ix,iy);
          }
        }
      }else{
        if(y<absPos.y){
          for(let iy=y;iy<=absPos.y; iy+=25){
            let ix=antiSlope*(iy-y)+x;
            createDots(ix,iy);
          }
        }else{
          for(let iy=y;iy>=absPos.y; iy-=25){
            let ix=antiSlope*(iy-y)+x;
            createDots(ix,iy);
          }
        }
      }
    
  }
  setStriker(turn);
}

function calculateTouch(){
  let dY=touchStart.y-touchEnd.y;
  let dX=touchEnd.x-touchStart.x;
    let slope=Math.abs((dY)/(dX));
    let angle=Math.atan(slope)*(180/Math.PI);
    if(dX<0 && dY>0){
      angle=360-angle;
    }else if(dX>0 && dY<0){
      angle=180-angle;
    }else if(dX>0 && dY>0){
      angle+=180;
    }
    let distance=Math.sqrt(dX*dX+dY*dY);
    strike("striker",distance*3.75,angle);
}

function sendOpposite(entity){
  if(!elements[entity]){
    return;
  }
  if(elements[entity].hittingwall=="left"){
    elements[entity].x=.1;
    elements[entity].a=Math.PI-elements[entity].a;
    elements[entity].v=elements[entity].storedVelocity*.6;
    elements[entity].d=friction/elements[entity].m;
    elements[entity].hittingwall=null;
  }else if(elements[entity].hittingwall=="right"){
    
    elements[entity].x=elements[entity].maxX-.1;
    elements[entity].a=Math.PI-elements[entity].a;
    elements[entity].v=elements[entity].storedVelocity*.6;
    elements[entity].d=friction/elements[entity].m;
    elements[entity].hittingwall=null;
  }else if(elements[entity].hittingwall=="top"){
    
    elements[entity].y=elements[entity].maxY-.1;
    elements[entity].a=-elements[entity].a;
    elements[entity].v=elements[entity].storedVelocity*.6;
    elements[entity].d=friction/elements[entity].m;
    elements[entity].hittingwall=null;
  }else if(elements[entity].hittingwall=="bottom"){
    elements[entity].y=.1;
    elements[entity].a=-elements[entity].a;
    elements[entity].v=elements[entity].storedVelocity*.6;
    elements[entity].d=friction/elements[entity].m;
    elements[entity].hittingwall=null;
  }
}

function detectCollision(entity1,entity2){
  if(!elements[entity1] || !elements[entity2]){
    return;
  }
  let element1=elements[entity1];
  let element2=elements[entity2];
  let c1={
    x:element1.x+element1.r,
    y:element1.y+element1.r
  }
  let c2={
    x:element2.x+element2.r,
    y:element2.y+element2.r
  }
  let xDiff=Math.abs(c1.x-c2.x);
  let yDiff=Math.abs(c1.y-c2.y);
  let centerDistance=Math.sqrt(xDiff*xDiff+yDiff*yDiff);
  let minDistance=element1.r+element2.r;
  if(centerDistance<minDistance){
      return true;
  }else{
    return false;
  }
  
}

function handleCollision(entity1,entity2){
  if(!elements[entity1] || !elements[entity2]){
    return;
  }
  let element1=elements[entity1];
  let element2=elements[entity2];
  let m1=element1.m;
  let m2=element2.m;
  let u1=element1.v;
  let a1=element1.a;
  let u2=element2.v;
  let a2=element2.a;
  let x1=element1.x+element1.r;
  let x2=element2.x+element2.r;
  let y1=element1.y+element1.r;
  let y2=element2.y+element2.r;
  let dx=x2-x1;
  let dy=y2-y1;
  let u1x=u1*Math.cos(a1);
  let u1y=u1*Math.sin(a1);
  let u2x=u2*Math.cos(a2);
  let u2y=u2*Math.sin(a2);
  if(dx*dx + dy*dy === 0) return;
  let dotProduct=(u2x-u1x)*dx+(u2y-u1y)*dy;
  let v1x=u1x+((2*m2)/(m1+m2))*(dotProduct/(dx*dx+dy*dy))*dx;
  let v1y=u1y+((2*m2)/(m1+m2))*(dotProduct/(dx*dx+dy*dy))*dy;
  let v2x=u2x-((2*m1)/(m1+m2))*(dotProduct/(dx*dx+dy*dy))*dx;
  let v2y=u2y-((2*m1)/(m1+m2))*(dotProduct/(dx*dx+dy*dy))*dy;
  let newV1=Math.sqrt(v1x*v1x+v1y*v1y);
  let newV2=Math.sqrt(v2x*v2x+v2y*v2y);
  let newA1=Math.atan2(v1y,v1x);
  let newA2=Math.atan2(v2y,v2x);
   if(entity1=="piece1" && entity2=="piece2"){
  } 
  elements[entity1].v=newV1;
  elements[entity2].v=newV2;
  elements[entity1].a=newA1;
  elements[entity2].a=newA2;
}

function checkAllCollisions(){
  let elementKeys=Object.keys(elements);
  for(let i=0;i<elementKeys.length;i++){
    for(let j=0;j<i;j++){
      if(detectCollision(elementKeys[i],elementKeys[j])){
        handleCollision(elementKeys[i],elementKeys[j]);
      }
    }
  }
}

function pocketCheck(entity,p){
  if(!elements[entity]){
    return;
  }
  let piece=elements[entity];
  if(p===0){
    if(piece.x<(pocketCorners[p].x-1.7*piece.r) && piece.y>(pocketCorners[p].y-.3*piece.r)){
      return true;
    }else{
      
      return false;
    }
  }
  if(p===1){
    
    if(piece.x>(pocketCorners[p].x-.3*piece.r) && piece.y>(pocketCorners[p].y-.3*piece.r)){
      return true;
    }else{
      
      return false;
    }
  }
  if(p===2){
    if(piece.x<(pocketCorners[p].x-1.7*piece.r) && piece.y<(pocketCorners[p].y-1.7*piece.r)){
      return true;
    }else{
      
      return false;
    }
  }
  if(p===3){
    if(piece.x>(pocketCorners[p].x-.3*piece.r) && piece.y<(pocketCorners[p].y-1.7*piece.r)){
      return true;
    }else{
      
      return false;
    }
  }
}

function checkAllPockets(entity){
  if(!elements[entity]){
    return;
  }
  if(pocketCheck(entity,0)){
    if(elements[entity].v==0) return;
    let pocket= document.querySelector(`.p0`);
    world.removeChild(elements[entity].element);
    pocket.childNodes[1].style.background=elements[entity].color;
    pocket.childNodes[1].style.display="block";
    setTimeout(()=>{
      pocket.childNodes[1].style.opacity=0;
      setTimeout(()=>{
        pocket.childNodes[1].style.display="none";
        pocket.childNodes[1].style.opacity=1;
        pocket.childNodes[1].style.height="16px";
        pocket.childNodes[1].style.width="16px";
      },50);
     },3000);
    delete elements[entity];
  }
  if(pocketCheck(entity,1)){
    if(elements[entity].v==0) return;
    let pocket= document.querySelector(`.p1`);
    setTimeout(()=>{
      if(elements[entity]){
        world.removeChild(elements[entity].element);
      }
      if(elements[entity]){
        pocket.childNodes[1].style.background=elements[entity].color;
        }
      pocket. childNodes[1].style.display="block";
      delete elements[entity];
    },50);
    setTimeout(()=>{
      pocket.childNodes[1].style.display="none";
      pocket.childNodes[1].style.opacity=0;
      setTimeout(()=>{
        pocket.childNodes[1].style.display="none";
        pocket.childNodes[1].style.opacity=1;
        pocket.childNodes[1].style.height="16px";
        pocket.childNodes[1].style.width="16px";
      },50);
     },3000)
    
  }
  if(pocketCheck(entity,2)){
    if(elements[entity].v==0) return;
    let pocket= document.querySelector(`.p2`);
    world.removeChild(elements[entity].element);
    pocket.childNodes[1].style.background=elements[entity].color;
    pocket. childNodes[1].style.display="block";
    setTimeout(()=>{
      pocket.childNodes[1].style.opacity=0;
      setTimeout(()=>{
        pocket.childNodes[1].style.display="none";
        pocket.childNodes[1].style.opacity=1;
        pocket.childNodes[1].style.height="16px";
        pocket.childNodes[1].style.width="16px";
      },50);
     },3000)
    delete elements[entity];
  }
  if(pocketCheck(entity,3)){
    if(elements[entity].v==0) return;
    let pocket= document.querySelector(`.p3`);
    world.removeChild(elements[entity].element);
    pocket.childNodes[1].style.background=elements[entity].color;
    pocket. childNodes[1].style.display="block";
    setTimeout(()=>{
      pocket.childNodes[1].style.opacity=0;
      setTimeout(()=>{
        pocket.childNodes[1].style.display="none";
        pocket.childNodes[1].style.opacity=1;
        pocket.childNodes[1].style.height="16px";
        pocket.childNodes[1].style.width="16px";
      },50);
     },3000);
    delete elements[entity];
  }
}

document.querySelectorAll(".slider").forEach(slider=>{
  slider.ontouchmove=(event)=>{
    let circle=slider.childNodes[1];
    let x=event.touches[0].clientX-50;
    let minX=8.5;
    let maxX=220;
    let offset=50;
    if(x>minX && x<maxX){
      circle.style.left=x+"px";
      setPos("striker",x+offset,elements.striker.y);
      //elements.striker.v=.0007;
      
    }
  }
});


/*document.querySelectorAll(".slider").forEach(slider=>{
  slider.ontouchstart=(event)=>{
    isAllstopped=false;
  }
})*/