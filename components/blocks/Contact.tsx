import { BlockContact } from '../Contact.types';
import React, { FormEvent, useState } from 'react';

function Contact(props: BlockContact) {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = {
			email,
			message,
		};

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			if (res.status === 204) {
				setSubmitted(true);
				setEmail('');
				setMessage('');
			}
		});
	};

	return (
		<form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl flex flex-col justify-center m-4">
			<div className="m-4">
				<div>
					<span className="label-text-alt">Votre e-mail</span>
				</div>
				<div>
					<input
						type="text"
						placeholder="Type here"
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						className="input input-bordered input-primary w-full max-w-xs"
					/>
				</div>

				<div>
					<span className="label-text-alt">Votre message</span>
				</div>
				<div>
					<textarea
						className="textarea textarea-primary"
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Say hello"
					></textarea>
				</div>
			</div>
			<button type="submit" className="btn btn-primary m-4">
				prout
			</button>
		</form>
	);
}

export default Contact;
