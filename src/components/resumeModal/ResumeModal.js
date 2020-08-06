import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
	ModalTitle,
	ModalSubTitle,
	SpanishButton,
	EnglishButton,
	Note,
} from "./resumeModal.styles";

const ResumeModal = ({ title, subtitle, onCloseModal }) => {
	return (
		<>
			<AiOutlineClose
				size={28}
				style={{ margin: "1rem 1rem 0", alignSelf: "flex-end" }}
				onClick={onCloseModal}
			/>
			<ModalTitle>{title}</ModalTitle>
			<ModalSubTitle>{subtitle}</ModalSubTitle>
			<SpanishButton href="/download?lg=es">In spanish</SpanishButton>
			<EnglishButton href="/download?lg=en">In english</EnglishButton>
			<Note>A copy of my cv will be downloaded</Note>
		</>
	);
};

export default ResumeModal;
