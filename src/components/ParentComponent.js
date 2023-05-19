import React, { Component } from "react";
import RoutingComponent from "./RoutingComponent";
import PlayerDetails from "./PlayerDetails";
import GameSize from "./GameSize";
import StartGame from "./StartGame"
import GameDetails from "./GameDetails";
import DashBoard from "./DashBoard";
import NavigationBar from "./NavigationBar";
import { UserProvider } from './UserContext';

// const user = { name: 'Tania', loggedIn: true }
export default class ParentComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gameBoardSize: "",
      player1: null,
      player2: null,
    };
   this.user = { name: 'Tania', loggedIn: true }
  }


  navbarTitle(PlayerDetailsTitle){
    console.log("Welcome",PlayerDetailsTitle) 
    this.setState({title:PlayerDetailsTitle})
  }

  tictactoe(TictactoeTitle){
    console.log("hhhhhhh",TictactoeTitle)
    this.setState({title:TictactoeTitle})
  }

  setdash(dashboard){
    console.log("pppp",dashboard)
    this.setState({title:dashboard})
  }
  gameBoard(gameBoardSize) {
    console.log('PARENT', gameBoardSize)
     this.setState({gameBoardSize:gameBoardSize})
  }

  render() {
  //  console.log(this.x)
    return (
      <div>
       <UserProvider value={this.user}>
      <NavigationBar title={this.state.title} />
      <RoutingComponent test="hi" sizeOfGameboard = {this.gameBoard.bind(this)} tictac = {this.state.gameBoardSize} 
        setTitle = {this.navbarTitle.bind(this)} setTictactoetitle = {this.tictactoe.bind(this)}
          setDashboard = {this.setdash.bind(this)}
        />
           </UserProvider>
      </div>  
    );
    
  }
}





