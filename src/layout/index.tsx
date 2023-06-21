import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/responsiveappbar";
import { Container } from "@mui/material";

function Layout() {
	return (
		<div>
			<ResponsiveAppBar />
			<Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
				<Outlet />
			</Container>
		</div>
	);
}

export default Layout;
