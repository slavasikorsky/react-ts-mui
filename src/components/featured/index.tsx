import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";

const Item = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	border: "1px solid",
	borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
	padding: theme.spacing(1),
	borderRadius: "4px",
	textAlign: "center",
}));

export default function Featured() {
	return (
		<Box sx={{ width: "100%" }}>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			>
				<Grid xs={12} md={6}>
					<Item>
						<h4>Lorem ipsum</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus nostrum quo similique veritatis
							velit molestias quisquam numquam, ipsum inventore
							ipsam, suscipit dolorem iste adipisci unde
							voluptatibus tempore possimus architecto. Suscipit.
						</p>
					</Item>
				</Grid>
				<Grid xs={12} md={6}>
					<Item>
						<h4>Lorem ipsum</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus nostrum quo similique veritatis
							velit molestias quisquam numquam, ipsum inventore
							ipsam, suscipit dolorem iste adipisci unde
							voluptatibus tempore possimus architecto. Suscipit.
						</p>
					</Item>
				</Grid>
				<Grid xs={6}>
					<Item>
						<h4>Lorem ipsum</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus nostrum quo similique veritatis
							velit molestias quisquam numquam, ipsum inventore
							ipsam, suscipit dolorem iste adipisci unde
							voluptatibus tempore possimus architecto. Suscipit.
						</p>
					</Item>
				</Grid>
				<Grid xs={6}>
					<Item>
						<h4>Lorem ipsum</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus nostrum quo similique veritatis
							velit molestias quisquam numquam, ipsum inventore
							ipsam, suscipit dolorem iste adipisci unde
							voluptatibus tempore possimus architecto. Suscipit.
						</p>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
