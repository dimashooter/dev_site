import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({ open, children, onClose }) => {
	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<div className="ModalWrapper">
				<div className="ModalContainer">{children}</div>
			</div>
		</>,
		document.getElementById('modal'),
	);
};

export default Modal;
