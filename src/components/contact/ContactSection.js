import React, { useState } from "react";
import {
	Contact,
	SendButton,
	TextInput,
	Form,
	Label,
	TextArea,
} from "./contact.styles";
import { Title, Subtitle } from "../shared/components.styles";
import Axios from "axios";

export const ContactSection = () => {
	const [subject, setSubject] = useState("");
	const [from, setFrom] = useState("");
	const [message, setMessage] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		Axios.post("/send-email", {
			from,
			subject,
			message,
		})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<Contact id="contact">
			<Title>Contact</Title>
			<Subtitle>Use the following form to contact me</Subtitle>
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
				<SendButton type="submit" value="Send" />
			</Form>
		</Contact>
	);
};
