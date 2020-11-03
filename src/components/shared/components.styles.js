import styled from "styled-components";
import colors from "../../colors";

export const Section = styled.div`
	padding: 15vh 5vw 10vh 5vw;
	background-color: ${colors.secondary};
`;

export const Title = styled.h1`
	color: ${(props) => (props.color ? props.color : "white")};
	text-transform: uppercase;
	margin: 0;
	padding: ${(props) => (props.padding ? props.padding : 0)};
	font-size: ${(props) => props.size}px;
`;

export const Subtitle = styled.p`
	color: ${colors.primary};
	font-weight: 600;
	margin: 0;
	padding: 0;
	letter-spacing: 2px;
`;
