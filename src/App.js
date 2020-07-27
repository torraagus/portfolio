import React from "react";
// import logo from './logo.svg';
import "./App.css";
import styled from "styled-components"
import { Nav, Logo, Menu, MenuItem, BurguerMenu, MenuLine } from "./components/nav/nav.styles";

function App() {
	const menuItems = ["My work", "Github", "About me", "Contact", "Resume"];

	return (
		<div className="App">
			<Nav>
				<Logo>AIT</Logo>
				<Menu>
					{menuItems.map((item) => (
						<MenuItem>{item}</MenuItem>
					))}
        </Menu>
        <BurguerMenu>
          <MenuLine />
          <MenuLine />
          <MenuLine />
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
