import { Link } from "react-router-dom";

function NoMatch() {
	return (
		<>
			<h1>not found</h1>
			<p>page 404</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
				molestias earum sint, quis natus harum! Consequatur rem quos
				deserunt, consequuntur, explicabo doloremque in delectus
				laudantium perspiciatis corrupti fugit voluptas autem.
			</p>
			<Link to="/">Go to homepage</Link>
		</>
	);
}

export default NoMatch;
