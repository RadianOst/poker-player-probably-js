class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    let output = gameState.minimum_raise;

    try {
      
      let player = gameState.in_action;
      console.log("----------in_action-------------");
      console.log(player);

      output = gameState.current_buy_in - gameState.players[player].bet + minimum_raise;
      console.log("----------in counting-------------");
      console.log(output);

    } catch (e) {
      console.log("---------error----------");
      console.log(e);
    }
    
    console.log("---------only minimum raise-----------");
    console.log(gameState.minimum_raise + "is? " + output);
    bet(output);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
