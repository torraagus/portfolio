import React, { useState, useEffect } from "react";
import { AboutMe, Description } from "./aboutMe.styles";
import { Title, Subtitle } from "../shared/components.styles";
import Axios from "axios";

export const AboutMeSection = () => {
	const [subtitle, setSubtitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		Axios.get("/api/about")
			.then((res) => {
				setSubtitle(res.data.subtitle);
				setDescription(res.data.description);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<AboutMe id="about-me">
			<Title color="#071e3d">About me</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Description>{description}</Description>
		</AboutMe>
	);
};
