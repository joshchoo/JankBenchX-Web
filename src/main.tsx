import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://b0d556396d10489d8ceac4e4dadb4b44@o370113.ingest.sentry.io/5213792",
});

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_FAUNA_CLIENT_KEY}`,
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
