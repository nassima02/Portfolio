import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import AnimatedComponent from "./animatedComponent.jsx";
import NavigationLinks from "./NavigationLinks.jsx";
import "../App.css"
function Header() {
	return (
		<header
			className="flex flex-col items-center relative bg-[#2b3144] h-svh text-[#efeff1] text-sm  lg:text-xl">

			{/* Image de la bannière */}
			<div className="flex justify-center items-center relative w-full pt-26  md:pt-26 lg:pt-26">
				<img
					className="absolute w-full h-svh object-cover top-0 pt-32 md:pt-16 xl:pt-24 lg:pt-24"
					src="./images/banner.jpg"
					alt="Banner"
				/>
				<div className="absolute sm:mt-16 z-10">
					<img
						className="w-[180px]  lg:w-[400px]"
						src={'./logos/logo-portfolio-3.png'}
						alt="logo-portfolio"
					/>
				</div>

				{/* le filtre de l'image de la bannière */}
				<div className=" h-svh bottom-0 w-full bg-black opacity-50 "></div>
				<AnimatedComponent/>
			</div>

			{/* Le logo */}
			<div
				className="logoClass animate-pulse animate-inline">
				<img
					className=" w-7 sm:w-9 lg:w-12 md:w-8"
					src={'./logos/logo-1.png'}
					alt="logo-portfolio"
				/>
			</div>
			<span
				className="flex-shrink-0 w-full border-b-2 border-gray-500 my-16 ms:my-20 lg:my-24 md:my-16 sm:block absolute"></span>

			{/* La barre de navigation */}
			<NavigationLinks/>
			{/* Liens vers Linkedin et GitHub */}
			<div
				className="flex items-center absolute mt-5 sm:sm:mt-5  lg:mt-8 md:mt-5 gap-x-4 lg:gap-x-5 right-7 md:right-7">
				<div>
					<div className="iconClass bg-[#161822]">
						<a href="https://www.linkedin.com/in/nassima-bression-25291819b/" target="_blank"
						   rel="noopener noreferrer">
							<FontAwesomeIcon icon={faLinkedinIn}/>
						</a>
					</div>
				</div>
				<div>
					<div className="flex mb-2 items-center  w-[17px] h-[17px]  lg:w-[21px] lg:h-[21px] rounded-3xl bg-[#efeff1] iconClass">
						<a href="https://github.com/nassima02" target="_blank" rel="noopener noreferrer">
							<img
								className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] object-cover duration-700 hover:opacity-100 hover:scale-110"
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