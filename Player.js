class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    let minimum_raise = gameState.minimum_raise;
    let our_player = gameState.players[gameState.in_action];
    let our_hand = our_player.hole_cards;
    let common_cards = gameState.community_cards;
    let output = minimum_raise;
    let ranks = [];

    console.log("----------our player-------------");
    console.log(our_player);
    try{
      ranks.push(our_hand[0].rank);
      ranks.push(our_hand[1].rank);
      
      for (var i=0; i<common_cards.length; i++){
          ranks.push(common_cards[i].rank);
      }
        
        console.log("------ ranks in hand and community ------- ");
        console.log(ranks);
    } catch (e){
        console.log("------------ checking ranks -------------");
        console.log(e);
    }
      
    try{
        var isPair = Player.isPair(ranks);
    } catch (e){
        console.log("ERROR: ----- isPair --------")
        console.log(e);
    }
      

    try {
      output = raise(gameState);
      console.log("------ in try ------- ");
      console.log(gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise);


    } catch (e) {
      console.log("---------error----------");
      console.log(e);
    }
    
    console.log("---------bet-----------");
    console.log(output);
    bet(output);
  }

  static showdown(gameState) {
      
  }
    
  static isPair(ranks){
      for (var i=0; i<ranks.length-1; i++){
          for (var j=i+1; j<ranks.length; j++){
              if (ranks[i] == ranks[j]){
                  return true;
              }
          }
      }
      return false;
  }
}

  function raise(gameState) {
    console.log("------ raise function ------- ");
    console.log(gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise);
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise;
  }

  function call(gameState) {
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet;
  }
   


module.exports = Player;
