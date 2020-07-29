import React from "react";
import { AboutMe, Description } from "./aboutMe.styles";
import { Title, Subtitle } from "../shared/components.styles";

export const AboutMeSection = () => {
	return (
		<AboutMe id="about-me">
			<Title color="#071e3d">About me</Title>
			<Subtitle>Some things about myself</Subtitle>
			<Description>
				I am an enthusiastic of technology, a very creative person that pays
				attention to detail and quality.
			</Description>
		</AboutMe>
	);
};
