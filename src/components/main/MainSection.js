import React from "react";
import { Main, Name, Rol, Button, ResumeBtn } from "./main.styles";

export const MainSection = () => {
	return (
		<Main>
			<Name>Agustin Ignacio Torra</Name>
			<Rol>React web developer</Rol>
			<Button href="#my-work">See my work</Button>
			<ResumeBtn href="./download">Resume</ResumeBtn>
		</Main>
	);
};
