// entry to allow for HMR.
//  DON'T TOUCH THIS UNLESS YOU KNOW WHAT YOURE DOING
// tslint:disable-next-line:no-implicit-dependencies
import { load, loaded } from "@src/actions";
// tslint:disable-next-line:no-implicit-dependencies
import { rootReducer } from "@src/reducers";
import * as queryString from "query-string";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Rest } from "ts-force";
import { App } from "./app";

// globals. set on page window
declare var __RESTHOST__: string;
declare var __ACCESSTOKEN__: string;

Rest.config = {
  accessToken: __ACCESSTOKEN__,
  instanceUrl:  __RESTHOST__,
};

const store = createStore(rootReducer);

// load url params
const params = queryString.parse(location.search);
if (params.id) {
    store.dispatch(load(params.id));
    setTimeout(() => {
        store.dispatch(loaded("My Opp Name", 5));
    }, 2000);
}

ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
    ,
    document.getElementById("root") as HTMLElement,
);

if (module.hot) {
    module.hot.accept();

    // reducers
    module.hot.accept("./reducers/index", () => {
      const nextRootReducer = require("./reducers/index");
      store.replaceReducer(nextRootReducer);
    });

    // // epics
    // module.hot.accept('../modules/root-epic', () => {
    //   const newRootEpic = require('./root-epic').default;
    //   epicMiddleware.replaceEpic(newRootEpic);
    // });
}
