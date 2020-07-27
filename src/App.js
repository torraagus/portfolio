import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";
import {
	Nav,
	Logo,
	Button,
	Menu,
	MenuItem,
	BurguerMenu,
	MenuLine,
} from "./components/nav/nav.styles";

function App() {
	const menuItems = ["My work", "Resume", "Github", "About me", "Contact"];
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="App">
			<Nav>
				<Logo>AIT</Logo>
				<Button>See my work</Button>
				{/* <div style={{ display: "flex" }}>
					<Button>Resume</Button>
				</div> */}
				<Menu className={`${isOpen ? "menuActive" : ""}`}>
					{menuItems.map((item) => (
						<MenuItem>{item}</MenuItem>
					))}
				</Menu>
				<BurguerMenu onClick={() => setIsOpen(!isOpen)}>
					<MenuLine className={`${isOpen ? "toggle" : ""} line1`} />
					<MenuLine className={`${isOpen ? "toggle" : ""} line2`} />
					<MenuLine className={`${isOpen ? "toggle" : ""} line3`} />
				</BurguerMenu>
			</Nav>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
