import React,{Component} from "react";
import Tictactoe from "./Tictactoe";
import "../css/Tictactoe.css";
import PlayerDetails from "./PlayerDetails";
import ParentComponent from "./ParentComponent";
import RoutingComponent from "./RoutingComponent";

export default class GameDetails extends React.Component {
  constructor(props) {
    super(props); 
}

render(){
    return(
 <div>
<p>Player1 Name: {this.props.player1name}</p>
<p>Player2 Name: {this.props.player2name}</p>
<p>Matrix Selected:{this.props.matrixSize} </p>
 </div>
)
}
}

