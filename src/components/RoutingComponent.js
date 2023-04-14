import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tictactoe from "./Tictactoe";
import PlayerDetails from "./PlayerDetails";
import routes from "../configs/routes";
import GameSize from "./GameSize";
import DashBoard from "./DashBoard";

class RoutingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1:"",
      player2: "",
      matrixSize:"",
      gameboardsize:""
    };
  }

  getData(player1,player2) {
     this.setState({player1:player1, player2:player2})
  }

winner(winnerPerson){
  console.log("winner",winnerPerson)
  this.setState({winner:winnerPerson})
}

  gameMatrix(size) {
    this.setState({matrixSize:size})
  }

  tictactoegamesize(gameboard){
   this.setState({gameboardsize : gameboard})
    // console.log(gameboard,"rout")
  }

  allRoutes() {
    console.log("-===========---", this.props);
    let routeArr = [];
    for (let i in routes) {
      let component = routes[i].component;
      routeArr.push(
        <Route
          key={"routes" + i}
          exact
          path={routes[i].path}
          element={component}
        />
      );
    }
    routeArr.push(
      <Route
        key={"xyz-tictactoe1"}
        exact
        path="/playGame"
        element={<Tictactoe r={this.props} 
        playernames ={this.state}
        a = {this.tictactoegamesize.bind(this)}
        b = {this.winner.bind(this)}
        setTictactoetitle ={this.props.setTictactoetitle}
        />}
      />,
        <Route
        key={"xyz-tictactoe1"}
        exact
        path="/dashboard"
        element={<DashBoard 
        dashboardDetails = {this.state}
        setDash= {this.props.setDashboard}
        />}
      />,
      <Route
        key={"xyz-tictactoe1"}
        exact
        path="/"
        element={
          <PlayerDetails
            r={this.props}
            playerNames={this.getData.bind(this)}
             gameMatrix={this.gameMatrix.bind(this)}
             setTitle = {this.props.setTitle}
          />
        }
      />
    );
    return routeArr;
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>{this.allRoutes(this.props)}</Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default RoutingComponent;
