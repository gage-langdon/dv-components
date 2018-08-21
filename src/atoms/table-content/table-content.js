import styled from 'styled-components';
import { space, color, textAlign, borders, justifyContent } from 'styled-system';
import { fontSize } from 'utils';
export const TableHeadData = styled;

export const TableRow = styled('div').attrs({
	py: props => props.py || 2
})`
	display: grid;
	grid-template-columns: 1.7fr 1.3fr 0.2fr;
	text-transform: ${props => props.textTransform};
	font-weight: ${props => props.fontWeight};
	${space};
	${color};
	${borders};
`;

export const TableCell = styled('div').attrs({
	fontSize: props => props.fontSize || [1, 2],
	px: props => props.px || [2, 3, 3],
	fontWeight: props => props.fontWeight || 525
})`
	display: flex;
	align-items: center;
	word-break: break-word;
	${props =>
		props.headCell
			? `@media(max-width: 320px) {
			display: none;
		}`
			: ''} ${textAlign};
	${fontSize};
	${space};
	${borders};
	${justifyContent};
`;
