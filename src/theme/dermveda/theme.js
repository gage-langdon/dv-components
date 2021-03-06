import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { themeGet } from 'styled-system';
import { systemFonts } from 'utils';
import { darken } from 'polished';
import colors from './colors';

const dermvedaTheme = {
	fonts: {
		0: `Raleway, ${systemFonts}`,
		display: `Raleway, ${systemFonts}`,
		styled: '"Abril Fatface", "Times New Roman", times, serif'
	},
	fontSizes: [0.65, 0.85, 1.092, 1.333, 1.455, 1.94, 2.585, 3.446, 4.594],
	shadows: [
		'none',
		'rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px',
		'0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)'
	],
	space: [0, 4, 8, 16, 24, 32, 64],
	lineHeights: [1, 1.125, 1.25, 1.5, 1.75],
	backgrounds: {
		gray: '#f7f7f7',
		primary: `linear-gradient(to bottom right, ${colors.gradient.primary.join(',')})`,
		secondary: `linear-gradient(to bottom right, ${colors.gradient.secondary.join(',')})`,
		tertiary: `linear-gradient(to bottom right, ${colors.gradient.tertiary.join(',')})`,
		white: '#ffffff'
	},
	textColors: ['#2B2B2B', '#103A45'],
	colors
};

const BaseFont = styled.div`
	font-family: ${themeGet('fonts.0')};
	text-rendering: optimizeLegibility;
	font-feature-settings: none;
	font-variant-ligatures: none;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	font-feature-settings: 'lnum';

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: ${themeGet('fonts.0')};
	}

	*::-moz-selection {
		color: white;
		background: ${darken(0.2, colors.primary.main)}};
	}

	*::selection {
		color: white;
		background: ${darken(0.2, colors.primary.main)}};
	}
`;

class DermvedaTheme extends React.Component {
	componentDidMount() {
		if (typeof window !== 'undefined') {
			const webFont = require('webfontloader');
			webFont.load({
				google: {
					families: ['Raleway:400,500,600,700']
				},
				typekit: {
					id: 'bsg6jcy'
				}
			});
		}
	}

	render = () => (
		<ThemeProvider theme={dermvedaTheme}>
			<BaseFont>{this.props.children}</BaseFont>
		</ThemeProvider>
	);
}

DermvedaTheme.propTypes = {
	children: PropTypes.node.isRequired
};

export default DermvedaTheme;
