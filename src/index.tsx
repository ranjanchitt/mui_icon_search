import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import SvgMaterialIcons from "./demo1";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <SvgMaterialIcons />
    </StyledEngineProvider>
  </React.StrictMode>
);
