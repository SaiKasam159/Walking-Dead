

var arrow_img, blue_balloon_img, green_balloon_img, pink_balloon_img, red_balloon_img, bow_img, heart_img, end_maker;

var bow, arrow, blue_balloon, green_balloon, red_balloon,heart, pink_balloon, blue_balloon_grp, green_balloon_grp, red_balloon_grp, pink_balloon_grp;

var score, lives, ammo

var gameState = 'play'

function preload(){
 //load your images here 
 blue_balloon_img = loadImage("zombie 1.png")
 green_balloon_img = loadImage("zombie 2.png")
 red_balloon_img = loadImage("zombie 3.png")
 pink_balloon_img = loadImage("zombie 4.png")
 bow_img = loadImage("gun-png-40759.png") 
 bg_img = loadImage("background (1).jpg") 
 arrow_img = loadImage("bullet.png") 
 heart_img = loadImage('heart.png') 
}

function setup() {
  background = createSprite(300, 300, 600, 600)
  background.addImage(bg_img)
  background.scale = 5 
  background.setVelocity(-8, 0)
  createCanvas(600, 500);
  
  //add code here
  
  
  red_balloon_grp = new Group()
  
  pink_balloon_grp = new Group()
  
  green_balloon_grp = new Group()
  
  blue_balloon_grp = new Group()
  
  arrow_grp = new Group()
  
  score = 0 
  lives = 3
  
  bow = createSprite(500, 300, 50 ,50)
  bow.addImage(bow_img)
  bow.scale = 0.15
  
  
 
    heart1 = createSprite(440, 50, 50, 50)
    heart2 = createSprite(390, 50, 50, 50)
    heart3 = createSprite(340, 50, 50, 50)
    
    heart1.addImage(heart_img)
    heart1.scale = 0.05
    heart2.addImage(heart_img)
    heart2.scale = 0.05
    heart3.addImage(heart_img)
    heart3.scale = 0.05
    
  
  end_maker = createSprite(590, 0, 10, 1000)
  end_maker.visible = false

  
}

function draw() {

  
  if(gameState==='play'){
    
  
    bow.y = World.mouseY
    //add code here

    if(keyDown('space')){

      shoot()
      ammo -= 1

    }

    if(background.x < 0){
      background.x = background.width/2
    }

    colour = Math.round(random(1,5))

    console.log(colour)

    if(colour===1){
      spawnRedBalloon()
    }

    else if(colour===2){
      spawnBlueBalloon()
    }

    else if(colour===3){
      spawnGreenBalloon()
    }

    else {
      spawnPinkBalloon()

    }


    if(arrow_grp.isTouching(red_balloon_grp)){

      red_balloon_grp.destroyEach()
      //arrow_grp.destroyEach()
      score += 1

    }

    if(arrow_grp.isTouching(blue_balloon_grp)){

      blue_balloon_grp.destroyEach()
      //arrow_grp.destroyEach()
      score += 1

    }

    if(arrow_grp.isTouching(green_balloon_grp)){

      green_balloon_grp.destroyEach()
      //arrow_grp.destroyEach()
      score += 1

    }

    if(arrow_grp.isTouching(pink_balloon_grp)){

      pink_balloon_grp.destroyEach()
      //arrow_grp.destroyEach()
      score += 1

    }


    if(end_maker.isTouching(red_balloon_grp)){

      red_balloon_grp.destroyEach()
      //arrow_grp.destroyEach()
      lives -= 1

    }

    if(end_maker.isTouching(blue_balloon_grp)){

      blue_balloon_grp.destroyEach()
      //arrow_grp.destroyEach()
      lives -= 1

    }

    if(end_maker.isTouching(green_balloon_grp)){

      green_balloon_grp.destroyEach()
      //arrow_grp.destroyEach()
      lives -= 1

    }

    if(end_maker.isTouching(pink_balloon_grp)){

      pink_balloon_grp.destroyEach()
      //arrow_grp.destroyEach()
      lives -= 1


    }

    if(lives===2){
      heart1.visible = false
    }

    if(lives===1){
      heart2.visible = false
    }

    if(lives===0){
      heart3.visible = false
    }
    
    
  }

  if(lives===0){
    gameState = 'end'
  }
  
  if(gameState==='end'){
    
    red_balloon_grp.setVelocityXEach(0)
    
    blue_balloon_grp.setVelocityXEach(0)
    
    green_balloon_grp.setVelocityXEach(0)
    
    pink_balloon_grp.setVelocityXEach(0)
    
    
    red_balloon_grp.destroyEach(0)
    
    blue_balloon_grp.destroyEach(0)
    
    green_balloon_grp.destroyEach(0)
    
    pink_balloon_grp.destroyEach(0)
    
    
    noStroke();
    fill("black");
    textAlign(CENTER, TOP);
    textSize(20);
    textFont("Arial")
    text('GAME OVER', 300, 200);
 
    
    noStroke();
    fill("black");
    textAlign(CENTER, TOP);
    textSize(12);
    textFont("Arial")
    text('Click to replay', 300, 300);
 
    if(mouseDown('left')){
      gameState = 'play'
      lives = 3
    }
    
    //red_balloon_grp.setVelocityXEach(0)
    
    heart1.visible = true
    heart2.visible = true
    heart3.visible = true
    
  }
  
  
  drawSprites()
  
  noStroke();
  fill("black");
  textAlign(CENTER, TOP);
  textSize(20);
  textFont("Arial")
  text('Score: ' + score, 500, 50);
 
  
  
  
  console.log(lives)
  
}

function shoot(){
  
    arrow = createSprite(bow.x - 70, bow.y - 10, 50 ,50)
    arrow.addImage(arrow_img)
    arrow.scale = 0.1  
    arrow.velocityX = -5
    arrow.lifetime = 100
    arrow_grp.add(arrow)
    //return arrow
  
}

function spawnRedBalloon(){
   
  if(frameCount%60===0){
    red_balloon = createSprite( 0, 50, 40, 10)
    red_balloon.y = Math.round(random(50,400))  
    red_balloon.scale = 0.1
    red_balloon.addImage(red_balloon_img)
    red_balloon.setVelocity(4, 0)
    red_balloon.lifetime = 150           
    red_balloon_grp.add(red_balloon)
     
    
    if(red_balloon_grp.x > 500){
    
      red_balloon_grp.destroyEach()  
      lives -= 1
      
    }
    
  }  
  
}

function spawnGreenBalloon(){
  
    
  if(frameCount%60===0){
    green_balloon = createSprite(0, 50, 40, 10)
    green_balloon.y = Math.round(random(50,500))  
    green_balloon.scale = 0.1
    green_balloon.addImage(green_balloon_img)
    green_balloon.setVelocity(4, 0)
    green_balloon.lifetime = 150           
    green_balloon_grp.add(green_balloon)
    
     
    if(green_balloon_grp.x > 500){
    
      green_balloon_grp.destroyEach()  
      lives -= 1
      
    }
  
  }
    
  
}
function spawnBlueBalloon(){
  
    
  if(frameCount%60===0){
    blue_balloon = createSprite(0, 50, 40, 10)
    blue_balloon.y = Math.round(random(50,500))  
    blue_balloon.scale = 0.1
    blue_balloon.addImage(blue_balloon_img)
    blue_balloon.setVelocity(4, 0)
    blue_balloon.lifetime = 150           
    blue_balloon_grp.add(blue_balloon)
    
     
    if(blue_balloon_grp.x > 500){
    
      blue_balloon_grp.destroyEach()
      lives -= 1
      
    }
               
  }
    
  
}

function spawnPinkBalloon(){
  
    
  if(frameCount%60===0){
    pink_balloon = createSprite(0, 50, 40, 10)
    pink_balloon.y = Math.round(random(50,500))  
    pink_balloon.scale = 0.1
    pink_balloon.addImage(pink_balloon_img)
    pink_balloon.setVelocity(4, 0)             
    pink_balloon.lifetime = 150           
    pink_balloon_grp.add(pink_balloon)
    
    
    if(pink_balloon_grp.x > 500){    
    
      pink_balloon_grp.destroyEach()  
      lives -= 1
      
    }
    
  }
    
  
}

