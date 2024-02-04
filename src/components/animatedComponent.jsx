import { Link as ScrollLink, animateScroll } from 'react-scroll';
import "../App.css"
const AnimatedComponent = () => {
	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};
	return (
		<div
			className="absolute left-[50%] border-2 border-white  rounded-lg h-7 w-4  lg:h-8 lg:w-5 ml-[-15px] block z-10 opacity-0.4 bottom-12 sm:bottom-8 lg:bottom-12">
			<ScrollLink
				to="mes-projets"
				spy={true}
				smooth={true}
				duration={600}
				onClick={scrollToTop}
			>
				<div
					className="relative rounded bg-white w-1.5 lg:w-2 h-1.5 lg:h-2   top-1 ml-auto mr-auto animateDrop"></div>
			</ScrollLink>
		</div>
	)
};
export default AnimatedComponent;