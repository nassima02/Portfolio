import React from 'react'

function Title({ style, children }) {
	return (
		<h1
			className="text-[#2b3144] text-center m-14 text-5xl font-bold"
			style={style}
		>
			{children}
		</h1>
	)
}

export default Title