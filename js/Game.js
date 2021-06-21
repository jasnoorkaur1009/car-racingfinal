class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
car1=createSprite(100,200)
car2=createSprite(300,200)
car3=createSprite(500,200)
car4=createSprite(700,200)
car1.addImage(car1Img)
car2.addImage(car2Img)
car3.addImage(car3Img)
car4.addImage(car4Img)

cars=[car1,car2,car3,car4]

    }
  }
play(){
form.hide()
//text("gameStart",120,100)
Player.getplayerinfo()
console.log(allplayers)

player.getCarsatend()

if (allplayers!==undefined){
background(groundImg)
image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)

var x=200
var y
var index=0
for(var P in allplayers){
  x=x+200
  y=displayHeight-allplayers[P].distance
  cars[index].x=x
   cars[index].y=y
if(index=== player.index -1){
//cars[index].shapeColor="red"
fill ("red")
ellipse(x,y,60,60)
    camera.position.x=displayWidth/2
    camera.position.y=cars[index].y
}


//text (allplayers[P].name+":"+allplayers[P].distance,120,position)
//position +=20
index +=1
}
}
if(keyDown("UP")&&player.index!==null){
player.distance +=50
player.update()


}
if(player.distance>3860){
gameState=2
player.rank +=1
Player.updateCarsatend(player.rank)

}
drawSprites()
}
end(){
console.log("gameEnded")
console.log("player rank is" + player.rank)




}
}
