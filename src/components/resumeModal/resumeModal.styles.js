import styled from "styled-components";

export const ModalTitle = styled.h1`
	margin: 0;
	letter-spacing: 2px;
	color: #1f4287;
`;

export const ModalSubTitle = styled.p`
	margin-top: 0;
	letter-spacing: 3px;
	color: #278ea5;
`;

export const SpanishButton = styled.a`
	height: 23%;
	border-radius: 15px;
	margin-top: 0.5rem;
	width: 60%;
	text-align: center;
	border: none;
	background-color: #21e6c1;
	color: white;
	text-decoration: none;
	// font-size: 18px;
	text-transform: uppercase;
	font-weight: bold;
	padding: 1rem 2rem 1rem 2rem;

	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	:hover {
		cursor: pointer;
		opacity: 90%;
	}
`;

export const Note = styled.small`
	margin-top: 1.5rem;
	margin-bottom: 2rem;
	color: #aaa;
	font-style: italic;
`;

export const EnglishButton = styled(SpanishButton)`
	background-color: #278ea5;
`;
