import React from "react";
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

export const WorkSection = () => {
	const projects = [
		{
			name: "Vehicles",
			subtitle: "Web app of shipping businesses",
			description: "This app allow...",
			thumbail:
				"https://www.tu-app.net/blog/wp-content/uploads/2019/05/Web-App-Amazon-FilmAffinity.jpg",
			backend: ["node", "express", "mongodb", "docker"],
			frontend: ["html", "css", "javascript", "react", "styled-components"],
		},
		{
			name: "Supplieirs",
			subtitle: "Web app of suppliers businesses",
			description: "This app allow...",
			thumbail:
				"https://www.tu-app.net/blog/wp-content/uploads/2019/05/Web-App-Amazon-FilmAffinity.jpg",
			backend: ["node", "express", "mongodb", "docker"],
			frontend: ["html", "css", "javascript", "react", "styled-components"],
		},
	];

	return (
		<MyWork id="my-work">
			<Title>My work</Title>
			<Subtitle>A little bit of what i am capable of doing.</Subtitle>
			<Projects>
				<Title size={20}>Projects</Title>
				{projects.map((p) => (
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
