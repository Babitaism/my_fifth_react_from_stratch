import "../css/Tictactoe.css";
import React,{Component} from "react";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    title:this.props.title
    }
  }

  navbar() {
    console.log("Navbarprops", this.props);
  }
    
    render() { 
      return(
      <div
        className="header-class"
        style={{
          backgroundColor: this.props.color,
          textdecorationcolor: this.props.color,
        }}
      >
        {this.props.title}
    
      </div>)
   
  }
  }

export default NavigationBar;
