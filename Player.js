class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    let minimum_raise = gameState.minimum_raise;
    let output = gameState.current_buy_in - gameState.players[in_action][bet] + minimum_raise;
    console.log("---------------------------");
    console.log(output);
    bet(output);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
