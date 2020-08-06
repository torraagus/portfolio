import React from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";

Modal.setAppElement("#root");
const MyModal = ({ children, isOpen, onCloseModal }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCloseModal}
			className={styles.Modal}
			overlayClassName={styles.Overlay}
		>
			{children}
		</Modal>
	);
};

export default MyModal;
