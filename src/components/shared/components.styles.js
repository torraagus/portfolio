import styled from "styled-components";

export const Section = styled.div`
	padding-top: 12vh;
	padding-bottom: 10vh;
`;

export const Title = styled.h1`
	color: ${(props) => (props.color ? props.color : "white")};
	text-transform: uppercase;
	margin: 0;
	padding: 0;
	font-size: ${(props) => props.size}px;
`;

export const Subtitle = styled.p`
	color: #21e6c1;
	font-weight: 600;
	margin: 0;
	padding: 0;
	letter-spacing: 2px;
`;
