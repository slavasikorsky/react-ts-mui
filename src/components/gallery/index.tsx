import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

type galleryItemProps = {
	img: string;
	title: string;
};

type galleryProps = {
	data: galleryItemProps[];
};

export default function Gallery({ data }: galleryProps) {
	return (
		<ImageList sx={{ height: 650 }} cols={3} rowHeight={164}>
			{data.map((item) => (
				<ImageListItem key={item.img}>
					<img
						src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}
