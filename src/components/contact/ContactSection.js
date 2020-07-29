import React from "react";
import { Contact, SendButton, TextInput, Form, Label, TextArea } from "./contact.styles";
import { Title, Subtitle } from "../shared/components.styles";

export const ContactSection = () => {
	return (
		<Contact id="contact">
			<Title>Contact Me</Title>
			<Subtitle>Use the following form to contact me</Subtitle>
			<Form>
				<Label>
					Name
					<TextInput type="text" placeholder="Your name" />
				</Label>
				<Label>
					Email
					<TextInput type="email" placeholder="Your email" />
				</Label>
				<Label>
					Message
					<TextArea type="text" placeholder="Let's have a conversation :)" />
				</Label>
				<SendButton type="submit" value="Send" />
			</Form>
		</Contact>
	);
};
