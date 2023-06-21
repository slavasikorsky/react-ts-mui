import AccordionSection from "../../components/accordion";
import Featured from "../../components/featured";
import Gallery from "../../components/gallery";
import itemData from "../../data/gallery";

function Home() {
	return (
		<>
			<h1>Home page</h1>
			<Featured />
			<AccordionSection />
			<Gallery data={itemData} />
		</>
	);
}

export default Home;
