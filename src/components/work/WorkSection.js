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
import colors from "../../colors";

export const WorkSection = () => {
	const [projects, setProjects] = useState([]);

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
			<Subtitle>Here are some projects you can see...</Subtitle>
			<Projects>
				<Title size={20}>Projects</Title>
				{projects.length > 0 &&
					projects.map((p) => (
						<Project key={p.name}>
							<Image src={p.srcImage} />
							<ProjectInfo>
								<Title size={28}>{p.name}</Title>
								<Subtitle>{p.subtitle}</Subtitle>
								<Description>{p.description}</Description>
								<Title size={14} color={colors.fiveth}>
									For the backend
								</Title>
								<Technologies>
									{p.backend.map((bt) => (
										<TechItem key={bt}>{bt}</TechItem>
									))}
								</Technologies>
								<Title size={14} color={colors.fiveth}>
									For the frontend
								</Title>
								<Technologies>
									{p.frontend.map((ft) => (
										<TechItem key={ft}>{ft}</TechItem>
									))}
								</Technologies>
								<Buttons>
									<LiveVersionBtn href={p.liveLink} target={'_blank'}>Live</LiveVersionBtn>
									<GithubBtn href={p.githubLink} target={'_blank'}>Git</GithubBtn>
								</Buttons>
							</ProjectInfo>
						</Project>
					))}
			</Projects>
		</MyWork>
	);
};
