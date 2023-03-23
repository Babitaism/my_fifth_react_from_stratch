import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "../configs/routes";

function allRoutes() {
  let routeArr = [];
  for (let i in routes) {
    let component = routes[i].component;
    routeArr.push(<Route key={'routes'+i} exact path={routes[i].path} element= { component } />);
  }
 return routeArr
}


export default function RoutingComponent() {
    return (
      <BrowserRouter>
        <Routes>
         {allRoutes()}
        </Routes>
      </BrowserRouter>
    );
}

