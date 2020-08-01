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

	return (
		<Nav>
			<Logo>AIT</Logo>
			<NavButtons>
				<Button href="#my-work">My work</Button>
				<ResumeBtn>Resume</ResumeBtn>
			</NavButtons>
			<Menu className={`${isOpen ? "menuActive" : ""}`}>
				{menuItems.map((item) => (
					<MenuItem key={item.name}>
						<Item href={item.path} onClick={() => setIsOpen(false)}>
							{item.name}
						</Item>
					</MenuItem>
				))}
			</Menu>
			<BurguerMenu onClick={() => setIsOpen(!isOpen)}>
				<MenuLine className={`${isOpen ? "toggle" : ""} line1`} />
				<MenuLine className={`${isOpen ? "toggle" : ""} line2`} />
				<MenuLine className={`${isOpen ? "toggle" : ""} line3`} />
			</BurguerMenu>
		</Nav>
	);
};
