import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const response = await fetch('https://bression.alwaysdata.net/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				console.log('Formulaire soumis avec succès !');
				// Réinitialise les champs du formulaire après la soumission
				reset();
				// Afficher un toast de succès
				toast.success('Formulaire soumis avec succès !');
			} else {
				console.error('Erreur lors de la soumission du formulaire');
			}
		} catch (error) {
			console.error('Erreur lors de la soumission du formulaire', error);
		}
	};

	return (
		<div>
			<form className="flex flex-col  w-[300px]  md:w-[400px]  lg:w-[500px] px-0 text-white text-sm md:text-lg" onSubmit={handleSubmit(onSubmit)}>
				<label className={`text-left text-white ${errors.name && 'border-red-500'}`}>
					Nom:<br />
					<input
						className={`w-[100%] h-8 text-[#2b3144] ${errors.name && 'border-red-500'}`}
						type="text"
						name="name"
						{...register('name', { required: 'Ce champ est obligatoire' })}
					/>
					{errors.name && <span className="text-[12px] text-red-500">{errors.name.message}</span>}
				</label>
				<br />

				<label className={`text-left text-white ${errors.email && 'border-red-500'}`}>
					Email:<br />
					<input
						className={`w-[100%] h-8 text-[#2b3144] ${errors.email && 'border-red-500'}`}
						type="email"
						name="email"
						{...register('email', { required: 'Ce champ est obligatoire' })}
					/>
					{errors.email && <span className="text-[12px] text-red-500">{errors.email.message}</span>}
				</label>
				<br />

				<label className={`text-left text-white ${errors.message && 'border-red-500'}`}>
					Message:<br />
					<textarea
						className={`w-[100%] h-32 text-[#2b3144] ${errors.message && 'border-red-500'}`}
						name="message"
						{...register('message', { required: 'Ce champ est obligatoire' })}
					/>
					{errors.message && <span className="text-[12px] text-red-500">{errors.message.message}</span>}
				</label>
				<br />

				<button className="text-center text-[#2b3144] bg-[#efeff1] w-28 self-center font-bold" type="submit">
					Envoyer
				</button>
			</form>
			<ToastContainer />
			<div className="flex items-center gap-3 border-t border-white m-6"></div>
			<p className="text-white text-xs md:text-sm">© 2024 Nassima BRESSION, Tous droits réservés.</p>
		</div>
	);
};

export default ContactForm;

