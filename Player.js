class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    let output = gameState.minimum_raise;

    try {
      
      output = gameState.current_buy_in - gameState.players[in_action].bet + minimum_raise;
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
