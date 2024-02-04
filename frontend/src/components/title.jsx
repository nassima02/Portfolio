function Title({ style, children }) {
	return (
		<h1
			className="text-[#2b3144] text-center p-10 md:p-16 text-3xl sm:text-4xl md:text-5xl font-bold"
			style={style}
		>
			{children}
		</h1>
	)
}

export default Title