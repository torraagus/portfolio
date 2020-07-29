import React, { useState } from "react";
import styled from "styled-components";
import {
	Nav,
	Logo,
	Button,
	Menu,
	MenuItem,
	Item,
	BurguerMenu,
	MenuLine,
} from "./navBar.styles";

export const NavBar = () => {
	const menuItems = ["My work", "Resume", "Github", "About me", "Contact"];
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Nav>
			<Logo>AIT</Logo>
			<Button>See my work</Button>
			{/* <div style={{ display: "flex" }}>
					<Button>Resume</Button>
				</div> */}
			<Menu className={`${isOpen ? "menuActive" : ""}`}>
				{menuItems.map((item) => (
					<MenuItem key={item}>
						<Item href={`#${String(item).replace(" ", "-").toLowerCase()}`}>
							{item}
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
