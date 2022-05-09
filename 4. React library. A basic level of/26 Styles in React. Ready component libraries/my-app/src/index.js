import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

import App from "./App";
import BootstrapTest from "./BootstrapTest";
import { Button } from "./App";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <BigButton as='a'>Test</BigButton>
    <BootstrapTest />
  </StrictMode>
);
