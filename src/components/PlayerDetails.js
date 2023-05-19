import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import GameSize from "./GameSize";
import "../css/Tictactoe.css";
import Tictactoe from "./Tictactoe";
import StartGame from "./StartGame";
import RoutingComponent from "./RoutingComponent";



class PlayerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: null,
      player2: null,
      p1errmsg: "Please enter Player 1 name",
      p2errmsg: "Please enter Player 2 name",
      gameBoardSize: "",
      matrixGameSize:"",
      p1errmsgflag : false,
      p2errmsgflag: false,
      p3errmsgflag: false,
    };
  
  }

  componentDidMount() {
    console.log("componentDidMount and firing ajax");
    this.props.setTitle("Lets Play TicTacToe")
  }
  // (event) => this.handleUserInput(event) is equivalent to this.handleUserInput.bind(this)

  formValidation(player, event) {
    if (player == "player1") {
      this.setState({ player1: event.target.value });
    }
    if (player == "player2") {
      this.setState({ player2: event.target.value });
    }
  }

p1err(status){
this.setState({ p1errmsgflag: status });
console.log(status)
}


p2err(status){
  this.setState({ p2errmsgflag: status });
  console.log(status,"p2")
}

p3err(status){
  this.setState({ p3errmsgflag: status });
  console.log(status)
}

babita(player1, player2){
  player1 = this.state.player1;
    player2 = this.state.player2;
    this.props.playerNames(player1,player2)
}

babita1(game){
this.setState({matrixGameSize:game})
}

  playerDetails(props) {
    // console.log("PlayerdetailsProps", this.props);
    return (
      <form>
        <label>
          <div>
            <strong>Player 1: </strong>
            <input
              onChange={this.formValidation.bind(this, "player1")}
              className="player1"
              type="text"
            />
            <p className="err">{!this.state.player1 && this.state.p1errmsgflag && this.state.p1errmsg }</p>
          </div>
          <div>
            <strong>Player 2: </strong>
            <input
              onChange={this.formValidation.bind(this, "player2")}
              className="player2"
              type="text"
            />
            <p className="err">{!this.state.player2 && this.state.p2errmsgflag && this.state.p2errmsg }</p>
          </div>
        </label>
      </form>
    );
  }

  validationCheck(props) {
    // console.log(
    //   "validationCheck--parent wala-",
    //   this.state.player1,
    //   this.state.player2,
    // );
  }

  matSize(valueOfGameBoardSize) {
    // console.log(valueOfGameBoardSize, "valueOfGameBoardSize", this.props);
    this.props.r.sizeOfGameboard(valueOfGameBoardSize);
    this.props.gameMatrix(valueOfGameBoardSize)
  }

  //TODO:: Remove Navbar from here it shouldn't be a child component on any
  render() {
    return (
      <div>
        <div className="playerdetails">
          <div>{this.playerDetails()}</div>
          <GameSize matSize={this.matSize.bind(this)}
          rishu = {this.babita1.bind(this)}
          login = {this.state.matrixGameSize}
          z= {this.state.p3errmsgflag}
           />
          <StartGame
          name = {this.context}
            validator={this.validationCheck.bind(this)}
            player1name={this.state.player1}
            player2name={this.state.player2}
            rawat = {this.babita.bind(this)}
            login = {this.state.matrixGameSize}
            x = {this.p1err.bind(this)}
            y = {this.p2err.bind(this)}
            v ={this.p3err.bind(this)}
          />
        </div>
      </div>
    );
  }
}
export default PlayerDetails;
