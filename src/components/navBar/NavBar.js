import React, { useState } from "react";
import styled from "styled-components";
import {
	Nav,
	Logo,
	NavButtons,
	Button,
	ResumeBtn,
	Menu,
	MenuItem,
	Item,
	BurguerMenu,
	MenuLine,
	BlackScreen,
} from "./navBar.styles";
import MyModal from "../modal/Modal";

export const NavBar = () => {
	const menuItems = [
		{ name: "My work", path: "#my-work" },
		{ name: "Resume", path: "" },
		{ name: "Github", path: "https://github.com/torraagus" },
		{ name: "Linkedin", path: "https://www.linkedin.com/in/torraagustin" },
		{ name: "About me", path: "#about-me" },
		{ name: "Contact", path: "#contact" },
	];
	const [isOpen, setIsOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleOnClick = (val) => {
		setIsOpen(val);
	};

	const handleOnClickResume = () => {
		setIsOpen(false);
		setIsModalOpen(true);
	};

	return (
		<>
			<MyModal
				title="Resume"
				subtitle="Choose language..."
				isOpen={isModalOpen}
				onCloseModal={closeModal}
			></MyModal>
			<BlackScreen show={isOpen} onClick={() => handleOnClick(false)} />
			<Nav>
				<Logo>AIT</Logo>
				<NavButtons>
					<Button href="#my-work" onClick={() => handleOnClick(false)}>
						My work
					</Button>
					<ResumeBtn onClick={handleOnClickResume}>Resume</ResumeBtn>
				</NavButtons>
				<Menu className={`${isOpen ? "menuActive" : ""}`}>
					{menuItems.map((item) => (
						<MenuItem key={item.name}>
							{item.name == "Resume" ? (
								<Item onClick={handleOnClickResume}>{item.name}</Item>
							) : (
								<Item href={item.path} onClick={() => handleOnClick(false)}>
									{item.name}
								</Item>
							)}
						</MenuItem>
					))}
				</Menu>
				<BurguerMenu onClick={() => handleOnClick(!isOpen)}>
					<MenuLine className={`${isOpen ? "toggle" : ""} line1`} />
					<MenuLine className={`${isOpen ? "toggle" : ""} line2`} />
					<MenuLine className={`${isOpen ? "toggle" : ""} line3`} />
				</BurguerMenu>
			</Nav>
		</>
	);
};
