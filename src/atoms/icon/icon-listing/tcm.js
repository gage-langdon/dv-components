import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';

const Path = styled.path`
	fill: ${props => themeGet(`colors.accent.${props.fill}`)(props)};
`;

const TCM = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<Path
						d="M32.45,7.07c.19-.1.31,0,.43.12a18.58,18.58,0,0,1,9.86,13.73,19,19,0,0,1-14.5,21.65,19.25,19.25,0,0,1-9.3-.17,6.31,6.31,0,0,1-4.1-3.27A10.25,10.25,0,0,1,16.63,27a9.36,9.36,0,0,1,6.46-2.68,11.42,11.42,0,0,0,9.38-4.69,10.56,10.56,0,0,0,.3-12.13c-.11-.16-.21-.32-.31-.48ZM23.8,30.62a2.54,2.54,0,1,0,0,5.08,2.54,2.54,0,1,0,0-5.08Z"
						fill="secondary"
						stroke="none"
					/>
					<Path
						d="M12.23,38.9a10.32,10.32,0,0,1-2.21-2,19.24,19.24,0,0,1-4.13-7A18.37,18.37,0,0,1,5,22.44a18.52,18.52,0,0,1,5-11.29,18.62,18.62,0,0,1,11.17-6,12.8,12.8,0,0,1,4.74,0,7.61,7.61,0,0,1,5.67,5,8.6,8.6,0,0,1-7,11.71c-1.18.16-2.38.09-3.56.34a11.92,11.92,0,0,0-8.06,5.85,11.69,11.69,0,0,0-1.59,6.44,11.56,11.56,0,0,0,.84,4c0,.13.09.27.13.41ZM26.35,14.19a2.54,2.54,0,0,0-2.56-2.6,2.57,2.57,0,1,0,0,5.13A2.52,2.52,0,0,0,26.35,14.19Z"
						fill="tertiary"
						stroke="none"
					/>
					<Path
						d="M23.8,30.62a2.54,2.54,0,1,1,0,5.08,2.54,2.54,0,1,1,0-5.08Z"
						fill="tertiary"
						stroke="none"
					/>
					<Path
						d="M26.35,14.19a2.52,2.52,0,0,1-2.57,2.53,2.57,2.57,0,1,1,0-5.13A2.54,2.54,0,0,1,26.35,14.19Z"
						fill="secondary"
						stroke="none"
					/>
				</g>
			);
		case 'outline':
			return (
				<g>
					<path
						d="M32.45,7.07c.19-.1.31,0,.43.12a18.58,18.58,0,0,1,9.86,13.73,19,19,0,0,1-14.5,21.65,19.25,19.25,0,0,1-9.3-.17,6.31,6.31,0,0,1-4.1-3.27A10.25,10.25,0,0,1,16.63,27a9.36,9.36,0,0,1,6.46-2.68,11.42,11.42,0,0,0,9.38-4.69,10.56,10.56,0,0,0,.3-12.13c-.11-.16-.21-.32-.31-.48ZM23.8,30.62a2.54,2.54,0,1,0,0,5.08,2.54,2.54,0,1,0,0-5.08Z"
						stroke="currentColor"
						strokeMiterLimit="10"
						fill="none"
					/>
					<path
						d="M12.23,38.9a10.32,10.32,0,0,1-2.21-2,19.24,19.24,0,0,1-4.13-7A18.37,18.37,0,0,1,5,22.44a18.52,18.52,0,0,1,5-11.29,18.62,18.62,0,0,1,11.17-6,12.8,12.8,0,0,1,4.74,0,7.61,7.61,0,0,1,5.67,5,8.6,8.6,0,0,1-7,11.71c-1.18.16-2.38.09-3.56.34a11.92,11.92,0,0,0-8.06,5.85,11.69,11.69,0,0,0-1.59,6.44,11.56,11.56,0,0,0,.84,4c0,.13.09.27.13.41ZM26.35,14.19a2.54,2.54,0,0,0-2.56-2.6,2.57,2.57,0,1,0,0,5.13A2.52,2.52,0,0,0,26.35,14.19Z"
						stroke="currentColor"
						fill="none"
						strokeMiterLimit="10"
					/>
				</g>
			);
		default:
			return (
				<g>
					<path
						d="M32.45,7.07c.19-.1.31,0,.43.12a18.58,18.58,0,0,1,9.86,13.73,19,19,0,0,1-14.5,21.65,19.25,19.25,0,0,1-9.3-.17,6.31,6.31,0,0,1-4.1-3.27A10.25,10.25,0,0,1,16.63,27a9.36,9.36,0,0,1,6.46-2.68,11.42,11.42,0,0,0,9.38-4.69,10.56,10.56,0,0,0,.3-12.13c-.11-.16-.21-.32-.31-.48ZM23.8,30.62a2.54,2.54,0,1,0,0,5.08,2.54,2.54,0,1,0,0-5.08Z"
						fill="currentColor"
						stroke="none"
					/>
					<path
						d="M12.23,38.9a10.32,10.32,0,0,1-2.21-2,19.24,19.24,0,0,1-4.13-7A18.37,18.37,0,0,1,5,22.44a18.52,18.52,0,0,1,5-11.29,18.62,18.62,0,0,1,11.17-6,12.8,12.8,0,0,1,4.74,0,7.61,7.61,0,0,1,5.67,5,8.6,8.6,0,0,1-7,11.71c-1.18.16-2.38.09-3.56.34a11.92,11.92,0,0,0-8.06,5.85,11.69,11.69,0,0,0-1.59,6.44,11.56,11.56,0,0,0,.84,4c0,.13.09.27.13.41ZM26.35,14.19a2.54,2.54,0,0,0-2.56-2.6,2.57,2.57,0,1,0,0,5.13A2.52,2.52,0,0,0,26.35,14.19Z"
						fill="currentColor"
						stroke="none"
					/>
				</g>
			);
	}
};

TCM.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

TCM.defaultProps = {
	type: 'glyph'
};

export default TCM;
