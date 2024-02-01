// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// import "../App.css"
// import AnimatedComponent from "./animatedComponent.jsx";
// function Header() {
//
// 	return (
// 		<header
// 			className="flex flex-col items-center relative bg-[#2b3144] h-svh text-[#efeff1] text-sm sm:text-md md:text-lg lg:text-xl">
//
// 			{/* Image de la bannière */}
// 			<div className="relative w-full">
// 				<img
// 					className="h-svh w-full pt-36 object-cover lg:pt-24 sm:pt-48 "
// 					src={'./images/banner.jpg'}
// 					alt="Banner"
// 				/>
// 				<div className="absolute lg:top-24 sm:top-48 bottom-0 w-full bg-black opacity-50"></div>
// 			</div>
//
// 			{/* Logo du header */}
// 			<div
// 				className="left-7 absolute top-6 sm:my-3 md:pm-2  border-r-amber-50 border-solid border-r-2 animate-pulse animate-inline">
// 				<img
// 					className=" w-12 md:w-18"
// 					src={'./logos/logo-1.png'}
// 					alt="logo-portfolio"
// 				/>
// 			</div>
// 			<span
// 				className="flex-shrink-0 w-full border-b-2 border-gray-500 my-20 sm:my-24  sm:block absolute"></span>
//
// 			{/* La barre de navigation */}
// 			<div className="flex  items-center absolute my-0 sm:my-7 md:my-9  sm:flex-row md:flex-col">
// 				<div className="flex">
// 					<a
// 						className="LinkClass"
// 						href="#mes-projets"
// 						rel="noopener noreferrer"
// 					>
// 						Mes projets
// 					</a>
// 					<a
// 						className="LinkClass"
// 						href="#mes-compétences"
// 						rel="noopener noreferrer"
// 					>
// 						Mes compétences
// 					</a>
// 					<a
// 						className="LinkClass"
// 						href="#a-propos"
// 						rel="noopener noreferrer"
// 					>
// 						A Propos
// 					</a>
// 				</div>
// 			</div>
// 			{/* Les liens de contact */}
// 			<div
// 				className="flex absolute items-center my-8 sm:my-6 md:my-8 gap-x-4 sm:gap-x-6 md:gap-x-8  right-7 sm:right-8 md:right-10">
// 				<div>
// 					<a href="#contact">
// 						<div className="iconClass bg-[#2b3144]">
// 							<FontAwesomeIcon icon={faEnvelope}/>
// 						</div>
// 					</a>
// 				</div>
// 				<div>
// 					<div className="iconClass bg-[#2b3144] ">
// 						<a href="https://www.linkedin.com/in/nassima-bression-25291819b/" target="_blank"
// 						   rel="noopener noreferrer">
// 							<FontAwesomeIcon icon={faLinkedinIn}/>
// 						</a>
// 					</div>
// 				</div>
// 				<div>
// 					<div className="flex mb-1 items-center  w-[20px] h-[20px] rounded-3xl bg-[#efeff1] iconClass">
// 						<a href="https://github.com/nassima02" target="_blank" rel="noopener noreferrer">
// 							<img
// 								className="w-[23px] h-[23px] object-cover duration-700 hover:opacity-100 hover:scale-110"
// 								src={'./logos/logo-github.svg'}
// 								alt="logo-github"
// 							/>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			{/* Texte introduction*/}
// 			<div className="flex justify-center absolute">
// 				<span
// 					className="text-xl md:text-4xl sm:text-2xl leading-[2] sm:leading-[3] md:leading-[3] "
// 				>
// 					<img
// 						className="w-[500px] sm:[600px] md:[700px]"
// 						src={'./logos/logo-portfolio-1.png'}
// 						alt="logo-portfolio"
// 					/>
// 				</span>
// 			</div>
// 			<a href="#mes-projets">
// 				<AnimatedComponent/></a>
// 		</header>
// )
// }
//
// export default Header

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import "../App.css"
import AnimatedComponent from "./animatedComponent.jsx";
function Header() {

	return (
		<header
			className="flex flex-col items-center relative bg-[#2b3144] h-svh text-[#efeff1] text-sm sm:text-md md:text-lg lg:text-xl">

			{/* Image de la bannière */}
			<div className="flex justify-center items-center relative w-full pt-26">
				<img
					className=" absolute  w-full h-svh object-cover pt-40 md:pt-48 lg:pt-24 "
					src={'./images/banner.jpg'}
					alt="Banner"
				/>
				<div className=" absolute text-xl md:text-4xl sm:text-2xl leading-[2] sm:leading-[3] md:leading-[3] z-10">
					<img
						className="w-[300px]  md:w-[400px]"
						src={'./logos/logo-portfolio-3.png'}
						alt="logo-portfolio"
					/>
				</div>
				<div className=" h-svh bottom-0 w-full bg-black opacity-50 "></div>
				{/* Texte introduction*/}

				<a href="#mes-projets">
					<AnimatedComponent/></a>
			</div>

			{/* Logo du header */}
			<div
				className="left-7 absolute top-6 sm:my-3 md:pm-2  border-r-amber-50 border-solid border-r-2 animate-pulse animate-inline">
				<img
					className=" w-9 md:w-18"
					src={'./logos/logo-1.png'}
					alt="logo-portfolio"
				/>
			</div>
			<span
				className="flex-shrink-0 w-full border-b-2 border-gray-500 my-20 md:my-24  sm:block absolute"></span>

			{/* La barre de navigation */}
			<div className="flex items-center sm:flex-row md:flex-col my-0 sm:my-7 lg:my-0 absolute">
				<div className="flex">
					<a
						className="LinkClass"
						href="#mes-projets"
						rel="noopener noreferrer"
					>
						Mes projets
					</a>
					<a
						className="LinkClass"
						href="#mes-compétences"
						rel="noopener noreferrer"
					>
						Mes compétences
					</a>
					<a
						className="LinkClass"
						href="#a-propos"
						rel="noopener noreferrer"
					>
						A Propos
					</a>
				</div>
			</div>
			{/* Les liens de contact */}
			<div
				className="flex absolute items-center my-7 md:my-8 gap-x-4 md:gap-x-6 right-7 md:right-10">
				<div>
					<a href="#contact">
						<div className="iconClass bg-[#161822]">
							<FontAwesomeIcon icon={faEnvelope}/>
						</div>
					</a>
				</div>
				<div>
					<div className="iconClass bg-[#161822] ">
						<a href="https://www.linkedin.com/in/nassima-bression-25291819b/" target="_blank"
						   rel="noopener noreferrer">
							<FontAwesomeIcon icon={faLinkedinIn}/>
						</a>
					</div>
				</div>
				<div>
					<div className="flex mb-1 items-center  w-[20px] h-[20px] rounded-3xl bg-[#efeff1] iconClass">
						<a href="https://github.com/nassima02" target="_blank" rel="noopener noreferrer">
							<img
								className="w-[23px] h-[23px] object-cover duration-700 hover:opacity-100 hover:scale-110"
								src={'./logos/logo-github.svg'}
								alt="logo-github"
							/>
						</a>
					</div>
				</div>
			</div>

		</header>
	)
}

export default Header