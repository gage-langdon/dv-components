import React from 'react';
import PropTypes from 'prop-types';

const CircleCross = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<path
						fill="#ff6565"
						d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M32.7,31.3c0.4,0.4,0.4,1,0,1.4 C32.5,32.9,32.3,33,32,33s-0.5-0.1-0.7-0.3L24,25.4l-7.3,7.3C16.5,32.9,16.3,33,16,33s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4 l7.3-7.3l-7.3-7.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l7.3,7.3l7.3-7.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L25.4,24L32.7,31.3z"
					/>
				</g>
			);
		// TODO: add outline type
		default:
			return (
				<g>
					<path
						fill="currentColor"
						d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M32.7,31.3c0.4,0.4,0.4,1,0,1.4 C32.5,32.9,32.3,33,32,33s-0.5-0.1-0.7-0.3L24,25.4l-7.3,7.3C16.5,32.9,16.3,33,16,33s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4 l7.3-7.3l-7.3-7.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l7.3,7.3l7.3-7.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L25.4,24L32.7,31.3z"
					/>
				</g>
			);
	}
};
CircleCross.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph'])
};
CircleCross.defaultProps = {
	type: 'colored'
};
export default CircleCross;
