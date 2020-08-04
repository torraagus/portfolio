import React, { useState, useEffect, useRef } from "react";
import {
	Contact,
	SendButton,
	TextInput,
	Form,
	Label,
	TextArea,
	Alert
} from "./contact.styles";
import { Title, Subtitle } from "../shared/components.styles";
import Axios from "axios";

export const ContactSection = () => {
	const [error, setError] = useState(null);
	const [sent, setSent] = useState(false);
	const [sending, setSending] = useState(false);
	const [subject, setSubject] = useState("");
	const [from, setFrom] = useState("");
	const [message, setMessage] = useState("");

	const sendBtnRef = useRef(null);

	const onSubmit = (e) => {
		e.preventDefault();
		if (subject.length == 0 || from.length == 0 || message.length == 0) {
			setError("Please complete all the fields");
			return;
		}
		setSending(true);
		Axios.post("/send-email", {
			from,
			subject,
			message,
		})
			.then((res) => {
				setSent(true);
				setError(null);
				console.log(res);
			})
			.catch((err) => {
				setSent(false);
				setError(`${err}`);
				console.log(err);
			}).finally(() => {
				setSending(false);
				setTimeout(() => {
					resetForm();
				}, 3000);
			});
	};

	const resetForm = () => {
		setSent(false);
		setSending(false);
		setError(null);
		setFrom("");
		setSubject("");
		setMessage("");
	};

	useEffect(() => {
		setError(null);
	}, [from, message, subject]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (sendBtnRef.current) {
				if (sendBtnRef.current.value == "Sending . . .") {
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
			<Subtitle>Use the following form to contact me</Subtitle>
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
