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

    console.log("----------our player-------------");
    console.log(our_player);

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

  function raise(gameState) {
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise;
  }

  function call(gameState) {
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet;
  }
   
}

module.exports = Player;
