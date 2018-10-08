class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    let minimum_raise = gameState.minimum_raise;
    let our_player = gameState.players[gameState.in_action];
    let our_hand = our_player.hole_cards;
    let common_cards = gameState.community_cards;
    
    console.log("---------------------------");
    console.log(minimum_raise);
    bet(minimum_raise+1);
  }

  static showdown(gameState) {
      
  }
   
}

module.exports = Player;
