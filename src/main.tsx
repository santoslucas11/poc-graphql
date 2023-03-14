import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { api } from "./service/index";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={api}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
