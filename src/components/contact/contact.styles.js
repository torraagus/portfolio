import styled from "styled-components";
import { Section } from "../shared/components.styles";

export const Contact = styled(Section)`
	background-color: #278ea5;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	flex-flow: wrap;
	justify-content: center;
	padding-top: 3rem;
	width: 60%;

	@media (max-width: 1800px) {
		width: 70%;
	}
	@media (max-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 768px) {
		width: 90%;
	}
	@media (max-width: 512px) {
		width: 100%;
	}
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: white;
	font-weight: bold;
	width: 35%;
	margin-right: 0.5rem;

	:nth-child(3) {
		min-width: 70%;
	}

	@media (max-width: 1800px) {
		margin-right: 0.5rem;
		width: 35%;

		:nth-child(3) {
			min-width: 70%;
		}
	}

	@media (max-width: 1024px) {
		margin-right: 0.5rem;
		width: 45%;

		:nth-child(3) {
			min-width: 90%;
		}
	}

	@media (max-width: 512px) {
		width: 100%;
	}
`;

export const TextInput = styled.input`
	height: 50px;
	width: 100%;
	outline: none;
	border-radius: 5px;
	margin: 0.5rem 0 1rem 0;
	border: none;
	text-indent: 0.5rem;
`;

export const TextArea = styled.textarea`
	height: 200px;
	min-width: 100%;
	outline: none;
	border-radius: 5px;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
	border: none;
	text-indent: 0.5rem;
	padding-top: 1rem;
`;

export const SendButton = styled.input`
	height: 50px;
	width: 30%;
	outline: none;
	border: none;
	border-radius: 5px;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
	background-color: #1f4287;
	color: #21e6c1;
	font-weight: bold;
	text-transform: uppercase;

	:hover {
		cursor: pointer;
		opacity: 90%;
	}

	@media (max-width: 1366) {
		width: 40%;
	}

	@media (max-width: 1024px) {
		width: 50%;
	}

	@media (max-width: 768px) {
		width: 90%;
	}

	@media (max-width: 512px) {
		width: 100%;
	}
`;
