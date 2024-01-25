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

	const handleSubmit = (e) => {
		e.preventDefault();
		// Ajoutez ici la logique de traitement du formulaire
		console.log('Formulaire soumis avec les données :', formData);
		// Réinitialise les champs du formulaire après la soumission
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};

	return (

			<form className="flex flex-col w-80" onSubmit={handleSubmit}>
				<label className="text-left text-white">
					Nom:<br/>
					<input className="w-[100%] h-8"
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
						className="w-[100%] h-8"
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
				<br/>

				<label className="text-left text-white">
					Message:<br/>
					<textarea className="w-[100%] h-32"
							  name="message"
							  value={formData.message}
							  onChange={handleChange}
					/>
				</label>
				<br/>

				<button className="text-center text=[#2b3144] bg-[#efeff1] w-28 self-center font-bold"
						type="submit">Envoyer
				</button>
				<div className="flex items-center gap-3 border-t border-white  m-6"></div>
				<p className="text-white text-xs">
					© 2024 Nassima BRESSION, Tous droits réservés.
				</p>
</form>
);};

export default ContactForm;