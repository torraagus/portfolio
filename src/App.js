import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";
import { NavBar } from "./components/navBar/NavBar";

const Main = styled.div`
	height: 82vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #1f4287;
`;

const Name = styled.h3`
	margin: 0;
	color: white;
	letter-spacing: 5px;
`;

const Rol = styled.h1`
	margin: 0;
	color: white;
	letter-spacing: 3px;
	margin-bottom: 2rem;
`;

const Button = styled.a`
	background-color: #21e6c1;
	color: white;
	width: 200px;
	height: 40px;
	line-height: 40px;
	border-radius: 15px;
	font-weight: bold;
	margin-top: 0.5rem;

	:hover {
		opacity: 90%;
		color: white;
		cursor: pointer;
	}
`;

const ResumeBtn = styled(Button)`
	background-color: #278ea5;
	color: white;
	width: 200px;
	height: 40px;
	line-height: 40px;
	border-radius: 15px;
	font-weight: bold;
	margin-top: 0.5rem;

	:hover {
		opacity: 90%;
		color: white;
		cursor: pointer;
	}
`;

function App() {
	return (
		<div className="App">
			<NavBar />
			<Main>
				<Name>Agustin Ignacio Torra</Name>
				<Rol>React web developer</Rol>
				<Button>See my work</Button>
				<ResumeBtn>Resume</ResumeBtn>
			</Main>
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
