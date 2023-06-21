import { createTheme } from "@mui/material/styles";
import { green, purple, grey } from "@mui/material/colors";
const fontName = "'Quicksand', sans-serif";

const theme = createTheme({
	palette: {
		primary: {
			main: purple[200],
		},
		secondary: {
			light: green[200],
			main: green[500],
		},
		text: {
			primary: grey[500],
			secondary: green[700],
		},
		action: {
			active: "#fff",
		},
	},
	breakpoints: {
		values: {
			xs: 320,
			sm: 360,
			md: 768,
			lg: 1024,
			xl: 1280,
		},
	},
	typography: {
		fontFamily: fontName,
	},
});

export default theme;
