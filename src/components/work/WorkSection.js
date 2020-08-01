import React, { useState, useEffect } from "react";
import {
	Description,
	Projects,
	Project,
	ProjectInfo,
	TechItem,
	Technologies,
	Image,
	MyWork,
	Buttons,
	GithubBtn,
	LiveVersionBtn,
} from "./work.styles";
import { Title, Subtitle } from "../shared/components.styles";
import Axios from "axios";

export const WorkSection = () => {
	const [projects, setProjects] = useState([]);
	// const projects = [
	// 	{
	// 		name: "Vessel",
	// 		subtitle: "Web app of shipping businesses",
	// 		description:
	// 			"This app allows shipping businesses to upload their vessels and be contacted by other businesses...",
	// 		thumbail:
	// 			"https://www.tu-app.net/blog/wp-content/uploads/2019/05/Web-App-Amazon-FilmAffinity.jpg",
	// 		backend: ["Node", "express", "mongodb", "docker"],
	// 		frontend: ["React", "styled-components", "typescript"],
	// 	},
	// 	{
	// 		name: "Movies",
	// 		subtitle: "Web app of movies",
	// 		description:
	// 			"This app allows shipping businesses to upload their vessels and be contacted by other businesses --- This app allows shipping businesses to upload their vessels and be contacted by other businesses...",
	// 		thumbail:
	// 			"https://www.tu-app.net/blog/wp-content/uploads/2019/05/Web-App-Amazon-FilmAffinity.jpg",
	// 		backend: ["Consume of 3rd party movies api"],
	// 		frontend: ["React", "styled-components", "typescript"],
	// 	},
	// 	{
	// 		name: "Payme",
	// 		subtitle: "Web app of payments",
	// 		description:
	// 			"This app allows shipping businesses to upload their vessels and be contacted by other businesses --- This app allows shipping businesses to upload their vessels and be contacted by other businesses...",
	// 		thumbail:
	// 			"https://www.tu-app.net/blog/wp-content/uploads/2019/05/Web-App-Amazon-FilmAffinity.jpg",
	// 		backend: ["Node", "express", "mongodb", "docker", "mercado pago api"],
	// 		frontend: ["React", "styled-components", "typescript"],
	// 	},
	// ];

	useEffect(() => {
		Axios.get("/api/projects")
			.then((res) => {
				console.log(res.data);
				setProjects(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<MyWork id="my-work">
			<Title>My work</Title>
			<Subtitle>A little bit of what i am capable of doing.</Subtitle>
			<Projects>
				<Title size={20}>Projects</Title>
				{projects.length > 0 && projects.map((p) => (
					<Project key={p.name}>
						<Image src={p.thumbail} />
						<ProjectInfo>
							<Title size={28}>{p.name}</Title>
							<Subtitle>{p.subtitle}</Subtitle>
							<Description>{p.description}</Description>
							<Title size={14}>For the backend</Title>
							<Technologies>
								{p.backend.map((bt) => (
									<TechItem key={bt}>{bt}</TechItem>
								))}
							</Technologies>
							<Title size={14}>For the frontend</Title>
							<Technologies>
								{p.frontend.map((ft) => (
									<TechItem key={ft}>{ft}</TechItem>
								))}
							</Technologies>
							<Buttons>
								<LiveVersionBtn>Live</LiveVersionBtn>
								<GithubBtn>Git</GithubBtn>
							</Buttons>
						</ProjectInfo>
					</Project>
				))}
			</Projects>
		</MyWork>
	);
};
