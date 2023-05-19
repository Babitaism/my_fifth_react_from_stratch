import React, { Component } from "react";
import "../css/Tictactoe.css";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import PlayerDetails from "./PlayerDetails";
import GameDetails from "./GameDetails";
import DashBoard from "./DashBoard";

export default class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "cons");
    this.turn = 1;
    this.cells = undefined;
    console.log("constructor");
    this.state = {
      value: "",
      gameArray: this.gameBoard(this.props.r.tictac),
      gameBoardSize: this.props.r.tictac,
      player1: this.props.playernames.player1,
      player2: this.props.playernames.player2,
      msg: this.props.playernames.player1,
      winningMsg: "",
      winner: "",
      gameOver: "false",
    };
  }

  componentDidMount() {
    console.log("componentDidMount and firing ajax");
    this.props.setTictactoetitle("Player Details");
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }

  matrixSize() {
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
            onChange={this.getGameBoard.bind(this)}
          />
          {matrixSizeElements[i]}
        </label>
      );
    }
    return x;
  }

  /**
   * this.state.gameBoardSize = value => state change karega buss
   * this.setState({gameBoardSize: value}) => this.state.gameBoardSize = value plus reRender printUi
   */

  getGameBoard(event) {
    let boardSelected = event.target.value; //3,5,7
    this.props.a(boardSelected);
    let gameArrayRequired = this.gameBoard(boardSelected); // 3*3, 5*5, 7*7
    this.setState({
      gameBoardSize: boardSelected,
      gameArray: gameArrayRequired,
    });
  }

  gameBoard(length) {
    let compiledArray = [];
    for (let i = 0; i < length; i++) {
      let arr = [];
      for (let j = 0; j < length; j++) {
        arr.push(null);
      }
      compiledArray.push(arr);
    }
    return compiledArray;
  }

  htmlGenerator() {
    let tr;
    let td;
    let table = [];
    for (let i = 0; i < this.state.gameBoardSize; i++) {
      tr = [];
      td = [];
      for (let j = 0; j < this.state.gameBoardSize; j++) {
        td = (
          <td key={`td_` + i + j} onClick={this.clickedCells.bind(this, i, j)}>
            {this.state.gameArray[i][j]}
          </td>
        );
        tr.push(td);
      }
      tr = <tr key={`tr_` + i}>{tr}</tr>;
      table.push(tr);
    }
    return table;
  }

  clickedCells(i, j) {
    let tempGameArray = this.state.gameArray;
    if (tempGameArray[i][j] == "X" || tempGameArray[i][j] == "0") {
      return;
    }
   
    if (this.turn === 1) {
      tempGameArray[i][j] = "X";
      this.setState({ gameArray: tempGameArray });
      this.turn = 0;
      let winningCondition = this.winningConditions();
      return;
    }
    if (this.turn === 0) {
      tempGameArray[i][j] = "0";
      this.setState({ gameArray: tempGameArray });
      this.turn = 1;
      let winningCondition = this.winningConditions();
    }
    if(this.state.gameOver== true){

    }
  }

  tictactoe() {
    let trtd = this.htmlGenerator();
    return (
      <table>
        <tbody>{trtd}</tbody>
      </table>
    );
  }

  isAllElementsAreEqual(array) {
    let flag = true;
    let len = array.length;
    let firstElement = array[0];
    for (let i = 0; i < len; i++) {
      if (array[i] === "blank") {
        flag = false;
        break;
      }
      if (array[0] !== array[i]) {
        flag = false;
        break;
      }
    }
    return { result: flag, element: firstElement };
  }

  winningConditions() {
    let arr = this.state.gameArray;
    let rightDiagonalMatrix = this.rightDiagonalChecker(arr);
    let leftDiagonalMatrix = this.leftDiagonalChecker(arr);
    let columnMatrix = this.columnChecker(arr);
    let rowMatrix = this.rowChecker(arr);
    let msg;
    let winner;
    let str = "";
    if (
      (rightDiagonalMatrix.status &&
        (rightDiagonalMatrix.character == "X") === true) ||
      (leftDiagonalMatrix.status &&
        (leftDiagonalMatrix.character == "X") === true) ||
      (columnMatrix.status && (columnMatrix.character == "X") === true) ||
      (rowMatrix.status && (rowMatrix.character == "X") === true)
    ) {
      msg = this.state.player1 + " " + "Won";
      str += msg;
      this.setState({ winner: this.state.player1 });
      this.props.b(this.state.player1);
    }
   
    if (
      (rightDiagonalMatrix.status &&
        (rightDiagonalMatrix.character === "0") === true) ||
      (leftDiagonalMatrix.status &&
        (leftDiagonalMatrix.character === "0") === true) ||
      (columnMatrix.status && (columnMatrix.character === "0") === true) ||
      (rowMatrix.status && (rowMatrix.character === "0") === true)
    ) {
      msg = this.state.player2 + " " + "Won";
      str += msg;
      this.setState({ winner: this.state.player2 });
      this.props.b(this.state.player2);
    }
   
    this.setState({ winningMsg: str });
   
   
  }

  

  rightDiagonalChecker(array) {
    let len = array.length;
    let newArray = [];
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (len - 1 === i + j) {
          newArray.push(array[i][j]);
        }
      }
    }
    let flag, element;
    for (let j in newArray) {
      if (newArray[0] !== newArray[j] && newArray[j] !== null) {
        flag = false;
        element = null;
        break;
      } else {
        flag = true;
        element = newArray[j];
      }
    }
    return { status: flag, character: element };
  }

  rowChecker(array) {
    let flag, element;
    let flag1 = false;
    for (let i in array) {
      flag = true;
      if (flag1 === true) {
        break;
      }
      let arr = array[i];
      for (let j in arr) {
        if (arr[j] === null) {
          flag = false;
          flag1 = false;
          element = null;
        }
        if (arr[0] !== arr[j] || arr[j] == null) {
          flag = false;
          flag1 = false;
          element = null;
          break;
        } else {
          flag1 = true;
          element = arr[i];
        }
      }
    }
    return { status: flag1, character: element };
  }

  leftDiagonalChecker(array) {
    let len = array.length;
    let newArray = [];
    for (let i = 0; i < len; i++) {
      for (let j = i; j <= i; j++) {
        newArray.push(array[i][j]);
      }
    }
    let flag, element;
    for (let j in newArray) {
      if (newArray[0] === newArray[j] && newArray[j] !== null) {
        flag = true;
        element = newArray[j];
      } else {
        flag = false;
        break;
        element = null;
      }
    }
    return { status: flag, character: element };
  }

  columnChecker(array) {
    let length = array.length;
    let newArray = [];
    for (let i = 0; i < length; i++) {
      let temp = [];
      for (let j = 0; j < length; j++) {
        temp.push(array[j][i]);
      }
      newArray.push(temp);
    }
    let flag, element;
    let flag1 = false;
    for (let i in newArray) {
      flag = true;
      if (flag1 === true) {
        break;
      }
      let arr = newArray[i];
      for (let j in arr) {
        if (arr[j] === null) {
          flag = false;
          flag1 = false;
          element = null;
        }
        if (arr[0] !== arr[j] || arr[j] === null) {
          flag = false;
          flag1 = false;
          element = null;
          break;
        } else {
          flag1 = true;
          element = arr[i];
        }
      }
    }
    return { status: flag1, character: element };
  }

  tictac(gameBoardSize) {
    console.log(this.props.r.tictac, "lll");
  }

  render() {
    return (
      <div>
        <p>
          <strong>Choose your Matrix</strong>
        </p>
        <div>{this.matrixSize()}</div>
        <GameDetails
          player1name={this.state.player1}
          player2name={this.state.player2}
          matrixSize={this.state.gameBoardSize}
        />
        <div>{this.tictactoe()}</div>
        <p className="win">{this.state.winningMsg}</p>
        <div>
          <li>
            <div className="back">
              <Link style={{ textDecoration: "none" }} to="/">
                Back
              </Link>
            </div>
            <div className="dashboard">
              <Link style={{ textDecoration: "none" }} to="/dashboard">
                DashBoard
              </Link>
            </div>
          </li>
        </div>
      </div>
    );
  }
}
