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
		<>
			<h2 className="font-argesta_regular flex justify-center m-8 text-primary">{props.title}</h2>
			<form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl flex flex-col justify-center m-4">
				<div className="m-4">
					<div className="grid grid-rows-1 justify-center">
						<span className="label-text-alt">Votre e-mail</span>
						<input
							type="text"
							placeholder="Votre email..."
							onChange={(e) => setEmail(e.target.value)}
							name="email"
							className="input input-bordered input-primary w-full max-w-xs"
						/>
					</div>
					<div className="flex justify-center">
						<label>
							<span className="label-text-alt">Votre message</span>
						</label>
						<textarea
							className="textarea textarea-primary w-4/6"
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Votre message..."
						></textarea>
					</div>
				</div>
				<div className="flex justify-center">
					<button type="submit" className="btn btn-primary btn-sm m-4">
						Envoyer
					</button>
				</div>
			</form>
		</>
	);
}

export default Contact;
