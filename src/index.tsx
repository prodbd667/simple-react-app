/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with react-hot-loader
  eventhough those 2 dependencies are only used in development
  eslint has no way to tell that and outputs an error
*/

// react dependencies
import * as React from "react";
import * as ReactDOM from "react-dom";
// hot reload for development
import { AppContainer } from "react-hot-loader";

import App from "./App";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

// const root = document.getElementById("root") as HTMLElement;

// const render = (Component: React.SFC) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     root,
//   );
// };

// render(App);

// if (module.hot) {
//   module.hot.accept("./App", () => {
//     render(App);
//   });
// }