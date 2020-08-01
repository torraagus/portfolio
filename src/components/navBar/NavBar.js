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

	const handleOnClick = (val) => {
		setIsOpen(val);
	};

	return (
		<>
			<BlackScreen show={isOpen} onClick={() => handleOnClick(false)} />
			<Nav>
				<Logo>AIT</Logo>
				<NavButtons>
					<Button href="#my-work" onClick={() => handleOnClick(false)}>
						My work
					</Button>
					<ResumeBtn onClick={() => handleOnClick(false)}>Resume</ResumeBtn>
				</NavButtons>
				<Menu className={`${isOpen ? "menuActive" : ""}`}>
					{menuItems.map((item) => (
						<MenuItem key={item.name}>
							<Item href={item.path} onClick={() => handleOnClick(false)}>
								{item.name}
							</Item>
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
