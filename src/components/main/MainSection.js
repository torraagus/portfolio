import React from "react";
import { Main, Name, Rol, Button, ResumeBtn } from "./main.styles";

export const MainSection = () => {
	return (
		<Main>
			<Name>Agustin Ignacio Torra</Name>
			<Rol>React web developer</Rol>
			<Button>See my work</Button>
			<ResumeBtn>Resume</ResumeBtn>
		</Main>
	);
};
