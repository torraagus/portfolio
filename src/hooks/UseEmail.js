import { useState } from "react";
import Axios from "axios";

const useEmail = () => {
	const [error, setError] = useState(null);
	const [sent, setSent] = useState(false);
	const [sending, setSending] = useState(false);

	const sendEmail = (body) => {
		setSent(false);
		setError(null);
		setSending(true);
		Axios.post("/send-email", body)
			.then((res) => {
				setSent(true);
				setError(null);
				console.log(res);
			})
			.catch((err) => {
				setSent(false);
				setError(`${err}`);
				console.log(err);
			})
			.finally(() => {
				setSending(false);
			});
	};

	return { error, sent, sending, setError, sendEmail };
};

export default useEmail;
