// entry to allow for HMR.
//  DON'T TOUCH THIS UNLESS YOU KNOW WHAT YOURE DOING
import * as queryString from "query-string";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
// import { Provider } from "react-redux";
// import { Rest } from "ts-force";
import { App } from "./app";
// import createGlobalStore from "./store";

// globals. set on page window
declare var __RESTHOST__: string;
declare var __ACCESSTOKEN__: string;

// Rest.config = {
//   accessToken: __ACCESSTOKEN__,
//   instanceUrl:  __RESTHOST__,
//   version: 40,
// };

// const store = createGlobalStore();

// load url params
const params = queryString.parse(location.search);
const id = params.id || "";

ReactDOM.render(
    <AppContainer>
      {/* <Provider store={store}> */}
        <App id={id}/>
      {/* </Provider> */}
    </AppContainer>
    ,
    document.getElementById("root") as HTMLElement,
);

if (module.hot) {
    module.hot.accept();

    // reducers
    // module.hot.accept("./reducers/index", () => {
    //   const nextRootReducer = require("./reducers/index");
    //   store.replaceReducer(nextRootReducer);
    // });

    // // epics
    // module.hot.accept('../modules/root-epic', () => {
    //   const newRootEpic = require('./root-epic').default;
    //   epicMiddleware.replaceEpic(newRootEpic);
    // });
}
