import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import "../App.css"
import AnimatedComponent from "./animatedComponent.jsx";
function Header() {

	return (
		<header className="flex flex-col items-center relative bg-[#2b3144] h-svh text-[#efeff1] text-sm sm:text-md md:text-lg lg:text-xl">

			{/* Image de la bannière */}
			<div className="relative w-full">
				<img
					className="h-svh w-full pt-36 object-cover lg:pt-24 sm:pt-48 "
					src={'/banner.jpg'}
					alt="Banner"
				/>
				<div className="absolute lg:top-24 sm:top-48 bottom-0 w-full bg-black opacity-50"></div>
			</div>

			{/* Logo du header */}
			<div className="flex left-5 absolute py-5 sm:py-3 md:py-2 items-center">
				<img
					className="w-24 sm:w-34 md:w-44"
					src={'./logo-portfolio.png'}
					alt="logo-portfolio"
				/>
			</div>
			<span
				className="flex-shrink-0 w-full border-b-2 border-gray-500 my-20 sm:my-24  sm:block absolute"></span>

			{/* La barre de navigation */}
			<div className="flex  items-center absolute my-0 sm:my-7 md:my-9  sm:flex-row md:flex-col">
				<div className="flex">
					<a
						className="LinkClass"
						href="#"
						target="_blank"
						rel="noopener noreferrer"
					>
						Mes projets
					</a>
					<a
						className="LinkClass"
						href="#"
						target="_blank"
						rel="noopener noreferrer"
					>
						Mes compétences
					</a>
					<a
						className="LinkClass"
						href="#"
						target="_blank"
						rel="noopener noreferrer"
					>
						A Propos
					</a>
				</div>
			</div>
			{/* Les liens de contact */}
			<div className="flex absolute items-center my-8 sm:my-6 md:my-8 gap-x-4 sm:gap-x-6 md:gap-x-8  right-7 sm:right-8 md:right-10">
				<div>
					<div className="iconClass bg-[#2b3144] ">
						<FontAwesomeIcon icon={faEnvelope}/>
					</div>
				</div>
				<div>
					<div className="iconClass bg-[#2b3144] ">
							<FontAwesomeIcon icon={faLinkedinIn} />
						</div>
					</div>
					<div>
						<div className="flex mb-1 items-center  w-[20px] h-[20px] rounded-3xl bg-[#efeff1] iconClass">
							<img
								className=" w-[23px] h-[23px]  object-cover duration-700 hover:opacity-100 hover:scale-110 "
								src={'/logo-github.svg'}
								alt="logo-github"
							/>
						</div>
					</div>
				</div>
			{/* Texte introduction*/}
			<div className="flex mt-[80%] sm:mt-[65%] md:mt-[35%] absolute">
				<span
					className="text-xl md:text-4xl sm:text-2xl leading-[2] sm:leading-[3] md:leading-[3] animate-pulse animate-inline "
				>
					Nassima Bression <br/>
					DEVELOPPEUSE WEB<br/>
                    Bienvenue sur mon Portfolio
                </span>
			</div>

			<AnimatedComponent />
		</header>
	)
}

export default Header
