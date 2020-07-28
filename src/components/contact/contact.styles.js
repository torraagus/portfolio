import styled from "styled-components";
export const Contact = styled.div`
	min-height: 100vh;
	background-color: #278ea5;
	padding-top: 5rem;
	padding-bottom: 2rem;
`;

export const Form = styled.form`
	padding-top: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: white;
	font-weight: bold;
`;

export const TextInput = styled.input`
	height: 50px;
	width: 300px;
	outline: none;
	border-radius: 5px;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
	padding-left: 1rem;
`;

export const TextArea = styled.textarea`
	height: 200px;
	width: 300px;
	outline: none;
	border-radius: 5px;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
	padding: 1rem 0 0 1rem;
`;

export const SendButton = styled.input`
	height: 50px;
	width: 320px;
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
`;