import React,{Component, createContext} from "react";
import "../css/Tictactoe.css";
import { Link } from "react-router-dom";
import Tictactoe from "./Tictactoe";
import DashBoard from "./DashBoard";
import PlayerDetails from "./PlayerDetails";
import UserContext from './UserContext'


class StartGame extends React.Component {
  static contextType = UserContext
  constructor(props) {
    super(props);
    this.state = {
      player1: null,
      player2: null,
      matrixGameSize:"",
      p1errmsgflag : false,
      p2errmsgflag:false,
      p3errmsgflag:false,
    };
  }

  componentDidMount() {
    const user = this.context

    console.log(user) // { name: 'Tania', loggedIn: true }
  }

  clicked(event){
    let player1 = this.props.player1name;
    let player2 = this.props.player2name;
    let loginsize = this.props.login;
    if(player1 == null || player1== "" || player2 == null || player2 == "" || loginsize == ""){
      event.preventDefault();
      console.log('Please fill names & size')
      this.props.validator()
    }
    if(player1 === null || player1 === ""){
      this.setState({p1errmsgflag:true}) 
      this.props.x(true)
    }
    if(player2===null || player2 === ""){
      this.setState({p2errmsgflag:true}) 
      this.props.y(true)
    }
    if(loginsize === ""){
      this.setState({p3errmsgflag:true}) 
      this.props.v(true)
    }
    if(player1 != null && player2 != null && loginsize != "" ){
      console.log('NamesFilled')
      console.log('link clicked', player1, player2)
      this.props.rawat()
    }
  }



render(){
  return(
  <>
{/* <div>{this.context.name}</div> */}
  <div className="start">
  <Link style={{textDecoration: 'none'}} to ="/playGame"
   onClick={this.clicked.bind(this)}>
   Start Game
    </Link>
   </div>
   </>
  )
}
}
export default StartGame;

