// <reference path='./index.d.ts'/>
import * as React from "react";
import "./styles/main.pcss";
// import { BrowserRouter, Link } from "react-router-dom";

// import Routes from "./Routes";

// tslint:disable-next-line:no-var-requires
// const reactLogo = require("./assets/React-icon.png");

import SomeComponent from "./components/SomeComponent/SomeComponent";

const App = () => (
  <div>
    <div>pong</div>
    <div className="paddingTop">
      <SomeComponent />
    </div>
  </div>
  //   <BrowserRouter>
  //     <main className="container">
  //       <div>
  //         <h1>hello world!</h1>
  //         <img className="container__image" alt="react logo" src={reactLogo} />
  //         <p>If you see this everything is working!</p>
  //       </div>
  //       <ul className="left">
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //       </ul>
  //       <Routes />
  //     </main>
  //   </BrowserRouter>
);

export default App;
