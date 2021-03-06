import styled from "styled-components";
import colors from "../../colors";

export const Main = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${colors.primary};
	padding: 0 3vw 0 3vw;
`;

export const Name = styled.h3`
	margin: 0;
	color: white;
	font-size: 18px;
	letter-spacing: 5px;
`;

export const Rol = styled.h1`
	margin: 0;
	color: white;
	font-size: 36px;
	letter-spacing: 3px;
	margin-bottom: 2rem;
`;

export const Button = styled.a`
	background-color: white;
	color: ${colors.primary};
	width: 200px;
	height: 40px;
	line-height: 40px;
	border-radius: 5px;
	font-weight: bold;
	margin-top: 0.5rem;
	text-decoration: none;

	:hover {
		opacity: 75%;
		cursor: pointer;
	}

	:active {
		opacity: 90%;
		cursor: pointer;
	}
`;

export const ResumeBtn = styled(Button)`
	background-color: ${colors.secondary};
	color: ${colors.terciary};
	width: 200px;
	height: 40px;
	line-height: 40px;
	border-radius: 5px;
	font-weight: bold;
	margin-top: 0.5rem;

	:hover {
		opacity: 75%;
		cursor: pointer;
	}

	:active {
		opacity: 90%;
		cursor: pointer;
	}
`;
