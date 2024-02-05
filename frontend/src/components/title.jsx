function Title({ style, children }) {
	return (
		<h1
			className="text-[#2b3144] text-center p-10 md:p-12 lg:p-16 text-3xl sm: md:text-4xl font-bold"
			style={style}
		>
			{children}
		</h1>
	)
}

export default Title