import React from "react";
import { Main, Name, Rol, Button, ResumeBtn } from "./main.styles";
import MyModal from "../shared/modal/Modal";
import ResumeModal from "../resumeModal/ResumeModal";
import useModal from "../../hooks/UseModal";

export const MainSection = () => {
	const { isModalOpen, closeModal, openModal } = useModal();

	return (
		<>
			<MyModal isOpen={isModalOpen} onCloseModal={closeModal}>
				<ResumeModal
					title="Resume"
					subtitle="Choose a language"
					onCloseModal={closeModal}
				/>
			</MyModal>
			<Main>
				<Name>Hi, I'm a</Name>
				<Rol>React Web Developer</Rol>
				<Button href="#my-work">See my work</Button>
				<ResumeBtn onClick={() => openModal()}>Resume</ResumeBtn>
			</Main>
		</>
	);
};
