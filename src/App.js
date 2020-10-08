import React from "react";
import "./App.css";
import { NavBar } from "./components/navBar/NavBar";
import { MainSection } from "./components/main/MainSection";
import { WorkSection } from "./components/work/WorkSection";
import { AboutMeSection } from "./components/about/AboutMe";
import { ContactSection } from "./components/contact/ContactSection";
import ScrollArrow from "./components/scrollArrow/ScrollArrow";

function App() {
	return (
		<div className="App">
			<NavBar />
			<MainSection />
			<WorkSection />
			<AboutMeSection />
			<ContactSection />
			<ScrollArrow />
		</div>
	);
}

export default App;
