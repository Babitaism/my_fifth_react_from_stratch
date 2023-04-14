import React, { Component } from "react";
import Tictactoe from "./Tictactoe";
import PlayerDetails from "./PlayerDetails";
import NavigationBar from "./NavigationBar";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(dashboard) {
    console.log("componentDidMount and firing ajax");
     this.props.setDash("Dashboard Details")
  }
  
  dashboardTable() {
    return (
     <>
        <tr>
          <th>Player1</th>
          <th>Player2</th>
          <th>Matrix</th>
          <th>Winner</th>
        </tr>
        <tr>
          <td>{this.props.dashboardDetails.player1}</td>
          <td>{this.props.dashboardDetails.player2}</td>
           <td>{this.props.dashboardDetails.gameboardsize}</td>
          <td>{this.props.dashboardDetails.winner}</td>
        </tr>
        </>
    );
  }

  tictac() {
    let trtd = this.dashboardTable();
    return (
     <table><tbody>{trtd}</tbody></table>
    );
  }

  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <div>{this.tictac()}</div>
      </>
    );
  }
}
