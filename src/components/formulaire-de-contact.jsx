import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('http://localhost:3002/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Formulaire soumis avec succès !');
				// Réinitialise les champs du formulaire après la soumission
				setFormData({
					name: '',
					email: '',
					message: '',
				});
			} else {
				console.error('Erreur lors de la soumission du formulaire');
			}
		} catch (error) {
			console.error('Erreur lors de la soumission du formulaire', error);
		}
	};
	return (
<div>
	<form className="flex flex-col md:w-[500px] w-full px-6 text-white text-lg" onSubmit={handleSubmit}>
		<label className="text-left text-white">
			Nom:<br/>
			<input
				className="w-[100%] h-8 text-[#2b3144]"
				type="text"
				name="name"
				value={formData.name}
				onChange={handleChange}
			/>
		</label>
		<br/>

		<label className="text-left text-white">
			Email:<br/>
			<input
				className="w-[100%] h-8 text-[#2b3144]"
				type="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
			/>
		</label>
		<br/>

		<label className="text-left text-white">
			Message:<br/>
			<textarea
				className="w-[100%] h-32 text-[#2b3144]"
				name="message"
				value={formData.message}
				onChange={handleChange}
			/>
		</label>
		<br/>

		<button
			className="text-center text-[#2b3144] bg-[#efeff1] w-28 self-center font-bold"
			type="submit"
		>
			Envoyer
		</button>
	</form>

	<div className="flex items-center gap-3 border-t border-white  m-6"></div>
	<p className="text-white text-sm">
		© 2024 Nassima BRESSION, Tous droits réservés.
	</p>
</div>
	);
};

export default ContactForm;