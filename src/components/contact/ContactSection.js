import React, { useState, useEffect, useRef } from "react";
import {
	Contact,
	SendButton,
	TextInput,
	Form,
	Label,
	TextArea,
	Alert,
} from "./contact.styles";
import { Title, Subtitle } from "../shared/components.styles";
import useEmail from "../../hooks/UseEmail";

export const ContactSection = () => {
	const [subject, setSubject] = useState("");
	const [from, setFrom] = useState("");
	const [message, setMessage] = useState("");
	const { error, sendEmail, sending, sent, setError } = useEmail();

	const sendBtnRef = useRef(null);

	const onSubmit = (e) => {
		e.preventDefault();
		if (subject.length === 0 || from.length === 0 || message.length === 0) {
			setError("Please complete all the fields");
			return;
		}
		sendEmail({
			from,
			subject,
			message,
		});
	};

	useEffect(() => {
		setError(null);
	}, [from, message, setError, subject]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (sendBtnRef.current) {
				if (sendBtnRef.current.value === "Sending . . .") {
					sendBtnRef.current.value = "Sending";
				}
				sendBtnRef.current.value += " .";
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Contact id="contact">
			<Title>Contact</Title>
			<Subtitle>You can use this form to contact me</Subtitle>
			{sent && <Alert type="success">Email enviado con exito </Alert>}
			{error && <Alert type="error">{error}</Alert>}
			<Form onSubmit={onSubmit}>
				<Label>
					Name
					<TextInput
						type="text"
						placeholder="Your name"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
				</Label>
				<Label>
					Email
					<TextInput
						type="email"
						placeholder="Your email"
						value={from}
						onChange={(e) => setFrom(e.target.value)}
					/>
				</Label>
				<Label>
					Message
					<TextArea
						type="text"
						placeholder="Let's have a conversation :)"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</Label>
				{!sending && <SendButton type="submit" value="Send" />}
				{sending && (
					<SendButton ref={sendBtnRef} type="button" value="Sending" />
				)}
			</Form>
		</Contact>
	);
};
