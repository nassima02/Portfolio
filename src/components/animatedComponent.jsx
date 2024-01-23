import React from 'react'
import "../App.css"
const AnimatedComponent = () => {
	return (
		<div
			className="absolute left-[50%] border-2 border-white rounded-lg h-10 w-6 ml-[-15px] block z-10 opacity-0.4 bottom-16">
			<div className="relative rounded bg-white w-2 h-2 top-1 ml-auto mr-auto animateDrop"></div>
		</div>
	)
};
export default AnimatedComponent;