class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    let minimum_raise = gameState.minimum_raise;
    console.log("---------------------------");
    console.log(minimum_raise);
    bet(minimum_raise);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
