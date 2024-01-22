"use client";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Input, TextField } from "@mui/material";
import Image from "next/image";

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const footers = [
	{
		title: "Boa",
		description: ["Team", "History", "Contact us", "Locations"],
	},
	{
		title: "Features",
		description: [
			"Cool stuff",
			"Random feature",
			"Team feature",
			"Developer stuff",
			"Another one",
		],
	},
	{
		title: "Resources",
		description: [
			"Resource",
			"Resource name",
			"Another resource",
			"Final resource",
		],
	},
	{
		title: "Legal",
		description: ["Privacy policy", "Terms of use"],
	},
];

const defaultTheme = createTheme();

export default function App() {
	const [age, setAge] = React.useState<number>(0);
	const [candles, setCandles] = React.useState<JSX.Element[]>([]); // Initialize candles state as an empty array

	function loop(age: number) {
		let i = 0;
		const candleElements: JSX.Element[] = [];

		while (i < age) {
			candleElements.push(
				<Image
					key={i}
					src="/candle.png"
					width={100}
					height={500}
					alt="Candle"
				/>
			);
			i++;
		}

		setCandles(candleElements); // Update the candles state with the new elements
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
			/>
			<CssBaseline />
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
			>
				<Toolbar sx={{ flexWrap: "wrap" }}>
					<Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
						Boa
					</Typography>
					<nav>
						<Link
							variant="button"
							color="text.primary"
							href="#"
							sx={{ my: 1, mx: 1.5 }}
						>
							Features
						</Link>
						<Link
							variant="button"
							color="text.primary"
							href="#"
							sx={{ my: 1, mx: 1.5 }}
						>
							Enterprise
						</Link>
						<Link
							variant="button"
							color="text.primary"
							href="#"
							sx={{ my: 1, mx: 1.5 }}
						>
							Support
						</Link>
					</nav>
					<Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
						Login
					</Button>
				</Toolbar>
			</AppBar>
			{/* Hero unit */}
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{ pt: 8, pb: 6 }}
			>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
				>
					Candle Simulator
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					component="p"
				>
					What should I say there?? Not sure right now lol
				</Typography>
			</Container>
			{/* Simulator*/}
			<Container>
				{/* Input */}
				<Box>
					<Typography>Enter Your Age: </Typography>
					<TextField
						id="outlined-basic"
						label="Age"
						variant="outlined"
						type="number"
						onChange={(e) => setAge(parseInt(e.target.value, 10))}
					/>
					<Button variant="contained" onClick={() => loop(age)}>
						{" "}
						Simulate!
					</Button>
				</Box>
				{/* Cake */}
				<Box>
					<Box>{candles}</Box>
					<Box>
						<Image
							src="/cake.png"
							width={800}
							height={500}
							alt="Picture of the author"
						/>
					</Box>
				</Box>
			</Container>

			{/* Footer */}
			<Container
				maxWidth="md"
				component="footer"
				sx={{
					borderTop: (theme) => `1px solid ${theme.palette.divider}`,
					mt: 8,
					py: [3, 6],
				}}
			>
				<Grid container spacing={4} justifyContent="space-evenly">
					{footers.map((footer) => (
						<Grid item xs={6} sm={3} key={footer.title}>
							<Typography variant="h6" color="text.primary" gutterBottom>
								{footer.title}
							</Typography>
							<ul>
								{footer.description.map((item) => (
									<li key={item}>
										<Link href="#" variant="subtitle1" color="text.secondary">
											{item}
										</Link>
									</li>
								))}
							</ul>
						</Grid>
					))}
				</Grid>
				<Copyright sx={{ mt: 5 }} />
			</Container>
			{/* End footer */}
		</ThemeProvider>
	);
}
