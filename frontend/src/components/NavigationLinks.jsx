import { Link as ScrollLink, animateScroll } from 'react-scroll';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
function NavigationLinks (){
	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};

	return (
		<>
		<div className="flex items-center my-0 sm:my-7 md:my-4 lg:my-2 xl:my-0 absolute">
			<div className="flex">
				<ScrollLink
					className="LinkClass cursor-pointer"
					to="mes-projets"
					spy={true}
					smooth={true}
					duration={600}
					onClick={scrollToTop}
				>
					Mes projets
				</ScrollLink>
				<ScrollLink
					className="LinkClass cursor-pointer "
					to="mes-compétences"
					spy={true}
					smooth={true}
					duration={600}
					onClick={scrollToTop}
				>
					Mes compétences
				</ScrollLink>
				<ScrollLink
					className="LinkClass cursor-pointer"
					to="a-propos"
					spy={true}
					smooth={true}
					duration={600}
					onClick={scrollToTop}
				>
					A Propos
				</ScrollLink>
			</div>
		</div>
			<div
				className="flex absolute items-center mt-5 pt-0.5 md:mt-5 lg:mt-8 right-24 lg:right-28">
					<ScrollLink
						to="contact"
						spy={true}
						smooth={true}
						duration={600}
						onClick={scrollToTop}
					>
						<div className="iconClass bg-[#161822] cursor-pointer">
							<FontAwesomeIcon icon={faEnvelope}/>
						</div>
					</ScrollLink>
			</div>
		</>)
}
export default NavigationLinks;