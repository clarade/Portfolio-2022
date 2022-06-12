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
			<h2 className="font-argesta_regular flex justify-center mt-6 text-primary">{props.title}</h2>
			<div className="px-4">
				<form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl grid place-items-center gap-5 p-5">
					<div className="form-control w-full max-w-lg">
						<label className="label">
							<span className="label-text">What is your name?</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							onChange={(e) => setEmail(e.target.value)}
							className="input input-bordered w-full max-w-lg"
						/>
					</div>
					<div className="form-control w-full max-w-lg">
						<label className="label">
							<span className="label-text">Your bio</span>
						</label>
						<textarea
							className="textarea textarea-bordered w-full h-24 max-w-lg"
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Bio"
						></textarea>
					</div>

					<div className="flex justify-center">
						<button type="submit" className="btn btn-primary btn-sm m-4">
							Envoyer
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Contact;
