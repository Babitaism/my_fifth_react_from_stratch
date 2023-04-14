import Navbar from "./NavigationBar";
import React,{Component} from "react";

class NoPageError extends React.Component {
  constructor() {
    super();
  }
noPage = () => {
    return(<div>
      <Navbar/>
       <h1>404</h1>
       </div>
    );
  };
}
  export default NoPageError;