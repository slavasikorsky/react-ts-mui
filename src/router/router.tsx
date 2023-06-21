import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import About from "../pages/about";
import NoMatch from "../pages/nomatch";

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

export default Router;
