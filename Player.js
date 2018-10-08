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
      
      for (i=0; i<community.length; i++){
          ranks.push(community[i].rank);
      }
    } catch (e){
        console.log("------------ checking ranks -------------");
        console.log(e);
    }
      

    try {
    
      output = gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise;

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
    
  raise(gameState) {
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise;
  }

  call(gameState) {
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet;
  }
   
}

module.exports = Player;
