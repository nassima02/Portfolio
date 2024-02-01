import "../App.css"
const AnimatedComponent = () => {
	return (
		<div
			className="absolute left-[50%] border-2 border-white  rounded-lg h-8 w-4 md:h-10 md:w-6 ml-[-15px] block z-10 opacity-0.4 bottom-12 md:bottom-16">
			<div className="relative rounded bg-white w-1.5 md:w-2 h-1.5 md:h-2  top-1 ml-auto mr-auto animateDrop"></div>
		</div>
	)
};
export default AnimatedComponent;