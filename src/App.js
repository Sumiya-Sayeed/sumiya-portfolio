import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import Layout from './components/Layout';


const theme = createTheme({
	palette: {
		primary: {
			main: '#0D4C92', //lighter green
			dark: '#1b5e20', //darker green
			light: '#e8f5e9' //lightest green for poppers
		},
		secondary: {
			main: '#f2f9fb',
			dark: '#37474f', //darker color for font
		},
	},
	typography: {
		fontFamily: "sans-serif",
		useNextVariants: true,
	},
});

const styles = {
	'@global': {
		'html, body, #root': {
			width: '100%',
			maxWidth: '100vw',
			height: 'auto',
			minHeight: '100vh',
			// overflowX: 'hidden',
			padding: 0,
			margin: 0,
			backgroundColor: '#eceff1',
		},
	},
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Layout />
		</ThemeProvider>
	)
};

export default withStyles(styles)(App);