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
	BlackScreen
} from "./navBar.styles";

export const NavBar = () => {
	const menuItems = [
		{ name: "My work", path: "#my-work" },
		{ name: "Resume", path: "resume" },
		{ name: "Github", path: "https://github.com/torraagus" },
		{ name: "Linkedin", path: "https://www.linkedin.com/in/torraagustin" },
		{ name: "About me", path: "#about-me" },
		{ name: "Contact", path: "#contact" },
	];
	const [isOpen, setIsOpen] = useState(false);

	const handleOnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<BlackScreen show={isOpen} onClick={handleOnClick} />
			<Nav>
				<Logo>AIT</Logo>
				<NavButtons>
					<Button href="#my-work" onClick={handleOnClick}>
						My work
					</Button>
					<ResumeBtn onClick={handleOnClick}>Resume</ResumeBtn>
				</NavButtons>
				<Menu className={`${isOpen ? "menuActive" : ""}`}>
					{menuItems.map((item) => (
						<MenuItem key={item.name}>
							<Item href={item.path} onClick={handleOnClick}>
								{item.name}
							</Item>
						</MenuItem>
					))}
				</Menu>
				<BurguerMenu onClick={handleOnClick}>
					<MenuLine className={`${isOpen ? "toggle" : ""} line1`} />
					<MenuLine className={`${isOpen ? "toggle" : ""} line2`} />
					<MenuLine className={`${isOpen ? "toggle" : ""} line3`} />
				</BurguerMenu>
			</Nav>
		</>
	);
};
