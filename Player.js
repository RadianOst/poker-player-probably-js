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
        var isPairOfCards = isPair(ranks);
        console.log("Have we pair of cards?");
        console.log(isPairOfCards);
    } catch (e){
        console.log("ERROR: ----- isPair --------")
        console.log(e);
    }
    try{
        var isThreeOfCards= isThree(ranks);
        console.log("----------Have we three of cards?------------");
        console.log(isThreeOfCards);
    }catch(e){
        console.log("ERROR: -------- isThree -----");
        console.log(e);
    }  

    try {
      output = raise(gameState);

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
}

  function isPair(ranks){
      for (var i=0; i<ranks.length-1; i++){
          for (var j=i+1; j<ranks.length; j++){
              if (ranks[i] == ranks[j]){
                  return true;
              }
          }
      }
      return false;
  }

  function isThree(ranks){
      for (var i = 0; i<ranks.length-2; i++){
          for (var j = i+1; j<ranks.length - 1; j++){
              for(var k = j + 1; k<ranks.length; k++){
                  if(ranks[i] == ranks[j] && ranks[i] == ranks[k] && ranks[j] == ranks[k] && (ranks[i] == ranks[0] || ranks[i] == ranks[1] || ranks[j] == ranks[1])){
                      return true;
                  }
              }
          }
      }
      return false;
  }

  function raise(gameState) {
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise;
  }

  function call(gameState) {
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet;
  }
   


module.exports = Player;
