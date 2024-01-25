import React from 'react'

function Title({ style, children }) {
	return (
		<h1
			className="text-[#2b3144] text-center mt-14 text-3xl sm:text-4xl md:text-5xl font-bold"
			style={style}
		>
			{children}
		</h1>
	)
}

export default Title