import styled from "styled-components";

export const Main = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #1f4287;
	padding: 0 2vw 0 2vw;
`;

export const Name = styled.h3`
	margin: 0;
	color: white;
	letter-spacing: 5px;
`;

export const Rol = styled.h1`
	margin: 0;
	color: white;
	letter-spacing: 3px;
	margin-bottom: 2rem;
`;

export const Button = styled.a`
	background-color: #21e6c1;
	color: white;
	width: 200px;
	height: 40px;
	line-height: 40px;
	border-radius: 15px;
	font-weight: bold;
	margin-top: 0.5rem;
	text-decoration: none;

	:hover {
		opacity: 90%;
		color: white;
		cursor: pointer;
	}
`;

export const ResumeBtn = styled(Button)`
	background-color: #278ea5;
	color: white;
	width: 200px;
	height: 40px;
	line-height: 40px;
	border-radius: 15px;
	font-weight: bold;
	margin-top: 0.5rem;

	:hover {
		opacity: 90%;
		color: white;
		cursor: pointer;
	}
`;
