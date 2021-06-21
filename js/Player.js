class Player {
  constructor(){
    this.index=null
    this.distance=0
    this.name=null
    this.rank=null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
    distance:this.distance
    });
  }
static getplayerinfo(){
var playerRef=database.ref('players')
playerRef.on("value",(data)=>{
allplayers=data.val();
})
}
getCarsatend(){
database.ref('Carsatend').on("value",(data)=>{
this.rank=data.val()
})
}
static updateCarsatend(rank){
  database.ref('/').update({
    Carsatend:rank
  })
}

}





