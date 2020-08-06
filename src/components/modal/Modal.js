import React from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ModalTitle = styled.h1`
	margin: 0;
	letter-spacing: 2px;
	color: #1f4287;
`;

const ModalSubTitle = styled.p`
	margin-top: 0;
	letter-spacing: 3px;
	color: #278ea5;
`;

const SpanishButton = styled.a`
	height: 23%;
	border-radius: 15px;
	margin-top: 0.5rem;
    width: 60%;
    text-align: center;
	border: none;
	background-color: #21e6c1;
    color: white;
    text-decoration: none;
	// font-size: 18px;
	text-transform: uppercase;
	font-weight: bold;
	padding: 1rem 2rem 1rem 2rem;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	:hover {
		cursor: pointer;
		opacity: 90%;
	}
`;

const Note = styled.small`
	margin-top: 1.5rem;
	margin-bottom: 2rem;
	color: #aaa;
	font-style: italic;
`;

const EnglishButton = styled(SpanishButton)`
	background-color: #278ea5;
`;

Modal.setAppElement("#root");
const MyModal = ({ title, subtitle, isOpen, onCloseModal }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCloseModal}
			className={styles.Modal}
			overlayClassName={styles.Overlay}
		>
			<AiOutlineClose
				size={28}
				style={{ margin: "1rem 1rem 0", alignSelf: "flex-end" }}
				onClick={onCloseModal}
			/>
			<ModalTitle>{title}</ModalTitle>
			<ModalSubTitle>{subtitle}</ModalSubTitle>
			<SpanishButton href="/download?lg=es">Spanish</SpanishButton>
			<EnglishButton href="/download?lg=en">English</EnglishButton>
			<Note>A copy of my cv will be downloaded</Note>
		</Modal>
	);
};

export default MyModal;
