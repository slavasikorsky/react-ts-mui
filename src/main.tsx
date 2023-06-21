import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/styles/theme.tsx";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
