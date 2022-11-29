import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { ThemeProvider } from "@mui/styles";
import darkTheme from "./Theme/darkTheme";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
