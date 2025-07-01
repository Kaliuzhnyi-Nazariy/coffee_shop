"use client";

import React from "react";
import { Provider } from "react-redux";
import {
  store,
  // persistor
} from "../redux/store";
// import { PersistGate } from "redux-persist/lib/integration/react";

const ReduxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={null}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
};

export default ReduxLayout;
