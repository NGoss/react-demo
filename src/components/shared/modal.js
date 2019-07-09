import React, { Component } from 'react'
import 'styles/shared/modal.scss'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import closeIcon from 'resources/times-solid.svg'

class Modal extends Component {
	render() {
		const { reset, children } = this.props
		return (
			<React.Fragment>
				<ClickAwayListener onClickAway={reset}>
					<div className="modal">
						<button className="modal__close" onClick={reset}>
							<img className="modal__close__icon" alt="Close Recipe" src={closeIcon} />
						</button>
						{children}
					</div>
				</ClickAwayListener>
				<div className="modal-overlay" />
			</React.Fragment>
		)
	}
}

export default Modal