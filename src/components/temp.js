

class PlayerDetails {
  getPlayerName(){
    return 'Babita and Ashwini'
  }

  trophy(){
    return 'is on Stage'
  }
}
 // new class

class Winner {
    getPlayerName(){
        return 'Ashwini'
    }

    trophy(){
        return 'Gold medal'
    }

}

function getXyz(arg, arg1){
    console.log('**************', arg, arg1)
    //return this.getPlayerName()
}

let playerDetails = new PlayerDetails()
let winner = new Winner()

name1 = winner.getPlayerNameb()

//console.log(name1)