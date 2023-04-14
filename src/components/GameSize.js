import React,{Component} from "react";
import "../css/Tictactoe.css";
import PlayerDetails from "./PlayerDetails";

class GameSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    gameBoardSize: "",
    p3errmsgflag:this.props.z,
    p3errmsg:"Select Matrix Size"
  }
}

  matrixSizeElements() {
    let matrixSizeElements = { 3: "3*3", 5: "5*5", 7: "7*7" };
    let x = [];
    for (let i in matrixSizeElements) {
      x.push(
        <label key={`matSize_` + i}>
          <input
            type="radio"
            id={matrixSizeElements[i]}
            name="matrixSize"
            value={i}
          onChange={this.clicked.bind(this)} />    
          {matrixSizeElements[i]}
        </label>  
      );
    }
    return x;
  }

  clicked(event){
   let gameBoard = event.target.value
    this.props.matSize(gameBoard)
    this.props.rishu(gameBoard)
    console.log("gameboardlogin",gameBoard)
    }
  

  render() {
    return (
    <div>
      <div className="mat">
        <p>Choose your Matrix</p></div>
        <div>{this.matrixSizeElements()}</div>
        <div className="err">{this.props.login=="" && this.props.z==true && this.state.p3errmsg }</div> 
      </div>
    );
  }
}

export default GameSize;
