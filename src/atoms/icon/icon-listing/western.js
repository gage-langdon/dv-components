import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';

const Path = styled.path`
	fill: ${props => themeGet(`colors.accent.${props.fill}`)(props)};
`;

const Western = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<Path
						d="M22.71,10.27a1.13,1.13,0,0,0-.27-1.11,1.92,1.92,0,0,1,.17-2.67,2,2,0,0,1,2.69,0,1.9,1.9,0,0,1,.19,2.66,1.14,1.14,0,0,0-.28,1.07c.19,0,.29-.2.41-.32l3.75-3.77a4.91,4.91,0,0,1,3.47-1.5c2.56,0,5.12-.06,7.67-.12.41,0,.46.15.42.48a4.17,4.17,0,0,1-1,2.24.71.71,0,0,0-.25.47,3.74,3.74,0,0,1-1.92,3.08,1.3,1.3,0,0,0-.53.65,4.25,4.25,0,0,1-3.83,2.69A6.32,6.32,0,0,1,30.88,14a2.25,2.25,0,0,1-1.46-1.24,1.67,1.67,0,0,0-2.83-.38c-.45.52-.85,1.09-1.29,1.63a.82.82,0,0,0-.13.57q0,4,0,8.09c0,.41-.09.54-.51.48s-1-.06-1.51-.17a.44.44,0,0,1-.41-.53c0-2.6,0-5.21,0-7.81a1.26,1.26,0,0,0-.29-.84c-.37-.44-.7-.91-1.06-1.34a1.68,1.68,0,0,0-2.94.37,2.36,2.36,0,0,1-2,1.31,7.1,7.1,0,0,1-3-.18,4.1,4.1,0,0,1-2.78-2.56,1,1,0,0,0-.42-.52,3.72,3.72,0,0,1-2-3.17c0-.18-.13-.27-.22-.39A4.25,4.25,0,0,1,7,4.91c0-.28,0-.41.36-.41,2.62.06,5.24.07,7.86.13a4.72,4.72,0,0,1,3.3,1.45l3.78,3.79Z"
						fill="tertiary"
						stroke="none"
					/>
					<Path
						d="M25.4,33.87c.22-.13.39-.22.55-.33a3.48,3.48,0,0,0,1.56-3.47,2.49,2.49,0,0,0-.73-1.31,3.77,3.77,0,0,0-2.89-1.32,7.58,7.58,0,0,1-7.31-5.87,7.4,7.4,0,0,1,1-5.88l.44-.66a1.84,1.84,0,0,1,2.56-.51,1.81,1.81,0,0,1,.45,2.6,5.12,5.12,0,0,0-1,2,4,4,0,0,0,3.34,4.67,13.84,13.84,0,0,1,2,.21,6.34,6.34,0,0,1,4.84,5.3,6.3,6.3,0,0,1-1.74,5.86c-.2.21-.33.27-.58,0A6.32,6.32,0,0,0,25.4,33.87Z"
						fill="secondary"
						stroke="none"
					/>
					<Path
						d="M21.7,27.89a4,4,0,0,0-1.14,2,3.53,3.53,0,0,0,1.74,3.8c.43.23.45.21.45-.26,0-1.62,0-3.24,0-4.85,0-.34.05-.46.43-.4a12.39,12.39,0,0,1,1.6.16.47.47,0,0,1,.4.55c0,1.76,0,3.51,0,5.27a.51.51,0,0,0,.44.6,5,5,0,0,1,2.8,7.4,1.16,1.16,0,0,1-1.62.52A1.12,1.12,0,0,1,26.4,41a3.16,3.16,0,0,0-2.35-4.64c-.69,0-1.38-.1-2.07-.21a4.94,4.94,0,0,1-4-3.57,6.12,6.12,0,0,1,.84-5.75c.15-.22.25-.3.5-.11A8.31,8.31,0,0,0,21.7,27.89Z"
						fill="tertiary"
						stroke="none"
					/>
					<Path
						d="M26,23.33a4.1,4.1,0,0,0,1.91-2.65,3.88,3.88,0,0,0-.85-3.41,1.84,1.84,0,1,1,2.76-2.43A7.71,7.71,0,0,1,29.63,25c-.28.3-.44.32-.74,0A6.43,6.43,0,0,0,26,23.33Z"
						fill="tertiary"
						stroke="none"
					/>
					<Path
						d="M22.62,37c-1.52,1.22-1.78,2.41-.94,4.07a1.15,1.15,0,0,1-2,1.15,5.18,5.18,0,0,1,.1-5.62c.16-.23.28-.29.55-.15A5.84,5.84,0,0,0,22.62,37Z"
						fill="secondary"
						stroke="none"
					/>
					<Path
						d="M22.74,37.91c0-.95,0-.95,1-.81l.54.09c.94.24,1.16.64.87,1.64a1.19,1.19,0,0,1-1.56.73,1,1,0,0,1-.76-.83A7.54,7.54,0,0,1,22.74,37.91Z"
						fill="tertiary"
						stroke="none"
					/>
				</g>
			);
		case 'outline':
			return (
				<g>
					<path
						d="M22.71,10.27a1.13,1.13,0,0,0-.27-1.11,1.92,1.92,0,0,1,.17-2.67,2,2,0,0,1,2.69,0,1.9,1.9,0,0,1,.19,2.66,1.14,1.14,0,0,0-.28,1.07c.19,0,.29-.2.41-.32l3.75-3.77a4.91,4.91,0,0,1,3.47-1.5c2.56,0,5.12-.06,7.67-.12.41,0,.46.15.42.48a4.17,4.17,0,0,1-1,2.24.71.71,0,0,0-.25.47,3.74,3.74,0,0,1-1.92,3.08,1.3,1.3,0,0,0-.53.65,4.25,4.25,0,0,1-3.83,2.69A6.32,6.32,0,0,1,30.88,14a2.25,2.25,0,0,1-1.46-1.24,1.67,1.67,0,0,0-2.83-.38c-.45.52-.85,1.09-1.29,1.63a.82.82,0,0,0-.13.57q0,4,0,8.09c0,.41-.09.54-.51.48s-1-.06-1.51-.17a.44.44,0,0,1-.41-.53c0-2.6,0-5.21,0-7.81a1.26,1.26,0,0,0-.29-.84c-.37-.44-.7-.91-1.06-1.34a1.68,1.68,0,0,0-2.94.37,2.36,2.36,0,0,1-2,1.31,7.1,7.1,0,0,1-3-.18,4.1,4.1,0,0,1-2.78-2.56,1,1,0,0,0-.42-.52,3.72,3.72,0,0,1-2-3.17c0-.18-.13-.27-.22-.39A4.25,4.25,0,0,1,7,4.91c0-.28,0-.41.36-.41,2.62.06,5.24.07,7.86.13a4.72,4.72,0,0,1,3.3,1.45l3.78,3.79Z"
						stroke="currentColor"
						fill="none"
						strokeLinejoin="round"
					/>
					<path
						d="M25.4,33.87c.22-.13.39-.22.55-.33a3.48,3.48,0,0,0,1.56-3.47,2.49,2.49,0,0,0-.73-1.31,3.77,3.77,0,0,0-2.89-1.32,7.58,7.58,0,0,1-7.31-5.87,7.4,7.4,0,0,1,1-5.88l.44-.66a1.84,1.84,0,0,1,2.56-.51,1.81,1.81,0,0,1,.45,2.6,5.12,5.12,0,0,0-1,2,4,4,0,0,0,3.34,4.67,13.84,13.84,0,0,1,2,.21,6.34,6.34,0,0,1,4.84,5.3,6.3,6.3,0,0,1-1.74,5.86c-.2.21-.33.27-.58,0A6.32,6.32,0,0,0,25.4,33.87Z"
						stroke="currentColor"
						fill="none"
						strokeLinejoin="round"
					/>
					<path
						d="M21.7,27.89a4,4,0,0,0-1.14,2,3.53,3.53,0,0,0,1.74,3.8c.43.23.45.21.45-.26,0-1.62,0-3.24,0-4.85,0-.34.05-.46.43-.4a12.39,12.39,0,0,1,1.6.16.47.47,0,0,1,.4.55c0,1.76,0,3.51,0,5.27a.51.51,0,0,0,.44.6,5,5,0,0,1,2.8,7.4,1.16,1.16,0,0,1-1.62.52A1.12,1.12,0,0,1,26.4,41a3.16,3.16,0,0,0-2.35-4.64c-.69,0-1.38-.1-2.07-.21a4.94,4.94,0,0,1-4-3.57,6.12,6.12,0,0,1,.84-5.75c.15-.22.25-.3.5-.11A8.31,8.31,0,0,0,21.7,27.89Z"
						stroke="currentColor"
						fill="none"
						strokeLinejoin="round"
					/>
					<path
						d="M26,23.33a4.1,4.1,0,0,0,1.91-2.65,3.88,3.88,0,0,0-.85-3.41,1.84,1.84,0,1,1,2.76-2.43A7.71,7.71,0,0,1,29.63,25c-.28.3-.44.32-.74,0A6.43,6.43,0,0,0,26,23.33Z"
						stroke="currentColor"
						fill="none"
						strokeLinejoin="round"
					/>
					<path
						d="M22.62,37c-1.52,1.22-1.78,2.41-.94,4.07a1.15,1.15,0,0,1-2,1.15,5.18,5.18,0,0,1,.1-5.62c.16-.23.28-.29.55-.15A5.84,5.84,0,0,0,22.62,37Z"
						stroke="currentColor"
						fill="none"
						strokeLinejoin="round"
					/>
					<path
						d="M22.74,37.91c0-.95,0-.95,1-.81l.54.09c.94.24,1.16.64.87,1.64a1.19,1.19,0,0,1-1.56.73,1,1,0,0,1-.76-.83A7.54,7.54,0,0,1,22.74,37.91Z"
						stroke="currentColor"
						fill="none"
						strokeLinejoin="round"
					/>
				</g>
			);
		default:
			return (
				<g>
					<path
						d="M22.71,10.27a1.13,1.13,0,0,0-.27-1.11,1.92,1.92,0,0,1,.17-2.67,2,2,0,0,1,2.69,0,1.9,1.9,0,0,1,.19,2.66,1.14,1.14,0,0,0-.28,1.07c.19,0,.29-.2.41-.32l3.75-3.77a4.91,4.91,0,0,1,3.47-1.5c2.56,0,5.12-.06,7.67-.12.41,0,.46.15.42.48a4.17,4.17,0,0,1-1,2.24.71.71,0,0,0-.25.47,3.74,3.74,0,0,1-1.92,3.08,1.3,1.3,0,0,0-.53.65,4.25,4.25,0,0,1-3.83,2.69A6.32,6.32,0,0,1,30.88,14a2.25,2.25,0,0,1-1.46-1.24,1.67,1.67,0,0,0-2.83-.38c-.45.52-.85,1.09-1.29,1.63a.82.82,0,0,0-.13.57q0,4,0,8.09c0,.41-.09.54-.51.48s-1-.06-1.51-.17a.44.44,0,0,1-.41-.53c0-2.6,0-5.21,0-7.81a1.26,1.26,0,0,0-.29-.84c-.37-.44-.7-.91-1.06-1.34a1.68,1.68,0,0,0-2.94.37,2.36,2.36,0,0,1-2,1.31,7.1,7.1,0,0,1-3-.18,4.1,4.1,0,0,1-2.78-2.56,1,1,0,0,0-.42-.52,3.72,3.72,0,0,1-2-3.17c0-.18-.13-.27-.22-.39A4.25,4.25,0,0,1,7,4.91c0-.28,0-.41.36-.41,2.62.06,5.24.07,7.86.13a4.72,4.72,0,0,1,3.3,1.45l3.78,3.79Z"
						fill="currentColor"
						stroke="none"
					/>
					<path
						d="M25.4,33.87c.22-.13.39-.22.55-.33a3.48,3.48,0,0,0,1.56-3.47,2.49,2.49,0,0,0-.73-1.31,3.77,3.77,0,0,0-2.89-1.32,7.58,7.58,0,0,1-7.31-5.87,7.4,7.4,0,0,1,1-5.88l.44-.66a1.84,1.84,0,0,1,2.56-.51,1.81,1.81,0,0,1,.45,2.6,5.12,5.12,0,0,0-1,2,4,4,0,0,0,3.34,4.67,13.84,13.84,0,0,1,2,.21,6.34,6.34,0,0,1,4.84,5.3,6.3,6.3,0,0,1-1.74,5.86c-.2.21-.33.27-.58,0A6.32,6.32,0,0,0,25.4,33.87Z"
						fill="currentColor"
						stroke="none"
					/>
					<path
						d="M21.7,27.89a4,4,0,0,0-1.14,2,3.53,3.53,0,0,0,1.74,3.8c.43.23.45.21.45-.26,0-1.62,0-3.24,0-4.85,0-.34.05-.46.43-.4a12.39,12.39,0,0,1,1.6.16.47.47,0,0,1,.4.55c0,1.76,0,3.51,0,5.27a.51.51,0,0,0,.44.6,5,5,0,0,1,2.8,7.4,1.16,1.16,0,0,1-1.62.52A1.12,1.12,0,0,1,26.4,41a3.16,3.16,0,0,0-2.35-4.64c-.69,0-1.38-.1-2.07-.21a4.94,4.94,0,0,1-4-3.57,6.12,6.12,0,0,1,.84-5.75c.15-.22.25-.3.5-.11A8.31,8.31,0,0,0,21.7,27.89Z"
						fill="currentColor"
						stroke="none"
					/>
					<path
						d="M26,23.33a4.1,4.1,0,0,0,1.91-2.65,3.88,3.88,0,0,0-.85-3.41,1.84,1.84,0,1,1,2.76-2.43A7.71,7.71,0,0,1,29.63,25c-.28.3-.44.32-.74,0A6.43,6.43,0,0,0,26,23.33Z"
						fill="currentColor"
						stroke="none"
					/>
					<path
						d="M22.62,37c-1.52,1.22-1.78,2.41-.94,4.07a1.15,1.15,0,0,1-2,1.15,5.18,5.18,0,0,1,.1-5.62c.16-.23.28-.29.55-.15A5.84,5.84,0,0,0,22.62,37Z"
						fill="currentColor"
						stroke="none"
					/>
					<path
						d="M22.74,37.91c0-.95,0-.95,1-.81l.54.09c.94.24,1.16.64.87,1.64a1.19,1.19,0,0,1-1.56.73,1,1,0,0,1-.76-.83A7.54,7.54,0,0,1,22.74,37.91Z"
						fill="currentColor"
						stroke="none"
					/>
				</g>
			);
	}
};

Western.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

Western.defaultProps = {
	type: 'glyph'
};

export default Western;