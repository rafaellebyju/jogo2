var chao,player,inimigo;
var gameState = 0
var botaoplay, titulo;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // 1 = pro lado pro outro , 2 = altura, 3 = largura, 4 = espaçamento
  chao = createSprite(400, 695, 220000, 50);
  player = createSprite(30,650,50,80);
  player.shapeColor = "red"

  //inimigos


  //criação do menu
  botaoplay = createButton("play")
  botaoplay.position(width/2,height/2)
  botaoplay.mouseClicked(()=>{gameState=1})

  titulo = createElement("h1","INSIRA UM TITULO AQUI!")
  titulo.class("titulo")
  titulo.position(width/2 - 100,height/2 - 100)

  player.setCollider("rectangle",0,0,player.width,player.height);
  player.debug = true


}

function draw() {
  background(0);  
  play();
  inimigo();
  
}

function movPlayer(){
  if(keyDown("d")){
    player.x +=5
  } 
  if(keyDown("a")){
    player.x -=5
  }
  if(keyDown("w")){
    player.y -=10
  }
  player.velocityY += 0.8
}

function play(){
  if(gameState == 1 ){
    //gameplay
  movPlayer();
  drawSprites();
  player.collide(chao)
  camera.position.x = player.x
  camera.position.y = player.y
  titulo.hide()
  botaoplay.hide()
  
}
}

function inimigo(){
  if(frameCount %60 === 0){
    var inimigo = createSprite(1100,650,50,80);
    inimigo.shapeColor = "blue"
    inimigo.x = Math.round(random(800,1100));
    inimigo.scale = 0.5;
    inimigo.velocityX = -2
    inimigo.lifetime = 100;

  }
  
}




