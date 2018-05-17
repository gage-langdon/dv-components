import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ListItemContainer,
	ListItemTitle,
	ListItemBody,
	IconCircle,
	ArrowButton,
	ArrowButtonLink
} from 'atoms';

class IconListItem extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		iconAttributes: PropTypes.shape({
			name: PropTypes.string.isRequired
		}).isRequired,
		children: PropTypes.node.isRequired,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired,
			nostyle: true
		})
	}

	static defaultProps = {
		buttonAttributes: {}
	}

	renderButton = (buttonProps, text) => (
		buttonProps.onClick ? (
			<ArrowButton {...buttonProps} mt={3}>{text}</ArrowButton>
		) : (
			<ArrowButtonLink {...buttonProps} mt={3}>{text}</ArrowButtonLink>
		)
	)

	render() {
		const { iconAttributes, buttonAttributes, title, children, ...attrs } = this.props;
		const { text, ...buttonProps } = buttonAttributes;

		return (
			<ListItemContainer {...attrs}>
				<IconCircle {...iconAttributes} />
				<ListItemTitle mt={2}>{title}</ListItemTitle>
				<ListItemBody>{children}</ListItemBody>
				{text && this.renderButton(buttonProps, text)}
			</ListItemContainer>
		);
	}
}

export default IconListItem;