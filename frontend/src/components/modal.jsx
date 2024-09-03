import {Carousel} from "flowbite-react";
const Modal = ({ isOpen, closeModal, titreProjet, description, pictures, urlSite, urlCode, logo }) => {
	const showControls = pictures.length > 1;
	return (
		<>
			{isOpen && (
				<div
					className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-30 h-svh overflow-y-auto">
					<div
						className="flex flex-col justify-between bg-white p-5 md:p-8 max-w-screen-lg md:w-3/5 h-5/6 md:h-5/6 rounded-md md\:h-auto">

						<div className="flex justify-between items-center">
							<h2 className="text-xl font-bold">{titreProjet}</h2>
							<button
								className="px-2 text-gray-500 hover:text-gray-500 md:text-2xl text-xl hover:bg-gray-200 rounded-full"
								onClick={closeModal}
							>
								&times;
							</button>
						</div>
						<span className="flex self-stretch mb-1 border-b border-solid border-gray-300"></span>
						<div className="flex flex-col max-w-screen-lg h-4/5 md:h-5/6 ">
							<div className="flex items-center justify-center md:h-2/3 md:w-full h-full p-scroll">
								{showControls ? (
									<Carousel slide={!showControls}>
										{pictures.map((image, index) => (
											<img key={index} src={image} alt={`Image ${index + 1}`}/>
										))}
									</Carousel>
								) : (
									<img src={pictures[0]} alt="Single Image"/>
								)}
							</div>
							<p className="mt-2 md:mt-6 md:w-full h-full md:h-3/5 md:px-6 px-4  text-sm md:text-[16px] leading-relaxed shadow-xl border"
							   dangerouslySetInnerHTML={{__html: description}}></p>
						</div>

						<span className="flex self-stretch md:mb-5 mb-3 border-b border-solid border-gray-300"></span>
						<div className="flex justify-end gap-2 md:gap-6">
							{urlCode && (
								<button
									className="bg-transparent text-[#2b3144] font-bold text-sm md:text-md lg:text-lg p-2  rounded transition-all duration-700 hover:bg-[#2b3144] hover:text-[#efeff1] hover:border-[#2b3144] border border-[#2b3144] hover:border-solid"
									onClick={() => window.open(urlCode, '_blank')}
								>
									Consulter le code
								</button>
							)}
							{urlSite && (
								<button
									className="bg-[#2b3144] text-white font-bold text-xs md:text-md lg:text-lg p-4 py-2 rounded transition-all duration-700 hover:bg-transparent hover:text-[#2b3144] hover:border-[#2b3144] border hover:border-solid"
									onClick={() => window.open(urlSite, '_blank')}
								>
									Visiter le site
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</>

	);
};
export default Modal;
