import React from "react";
// import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";
import { NavBar } from "./components/navBar/NavBar";
import { MainSection } from "./components/main/MainSection";
import { WorkSection } from "./components/work/WorkSection";
import { AboutMeSection } from "./components/about/AboutMe";
import { ContactSection } from "./components/contact/ContactSection";

function App() {
	return (
		<div className="App">
			<NavBar />
			<MainSection />
			<WorkSection />
			<AboutMeSection />			
			<ContactSection />
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
