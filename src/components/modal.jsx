// const Modal = ({ isOpen, closeModal, titreProjet, description, photo, urlSite, urlCode }) => {
// 	return (
// 		<>
// 			{isOpen && (
// 				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 ">
// 					<div className="bg-white p-8 max-w-screen-lg h-auto rounded-md">
// 						<div className="flex justify-between items-center ">
// 							<h2 className="text-2xl font-bold ">{titreProjet}</h2>
// 							<button
// 								className="px-2 text-gray-500 hover:text-gray-500 text-2xl hover:bg-gray-200 rounded-full "
// 								onClick={closeModal}
// 							>
// 								&times;
// 							</button>
// 						</div>
// 						<span className="flex self-stretch mt-5 mb-1  border-b border-solid border-gray-300 "></span>
// 						<div className="flex py-6 ">
// 						<img src={photo} alt="projet" className="max-w-[620px] h-auto object-cover" />
// 						<p className="px-6 bg-[#efeff1]" dangerouslySetInnerHTML={{__html: description}}></p>
// 						</div>
// 						<span className="flex self-stretch mt-5 mb-3  border-b border-solid border-gray-300 "></span>
// 						<div className="flex justify-end gap-14">
//
// 							<button
// 								className="bg-transparent text-[#2b3144] font-bold p-2  rounded transition-all duration-700 hover:bg-[#2b3144] hover:text-[#efeff1] hover:border-[#2b3144]  border border-[#2b3144] hover:border-solid "
// 								onClick={() =>window.open(urlCode, '_blank')}
// 							>
// 								Consulter le code
// 							</button>
// 							<button
// 								className="bg-[#2b3144] text-white font-bold p-4 py-2 rounded transition-all duration-700 hover:bg-transparent hover:text-[#2b3144] hover:border-[#2b3144] border hover:border-solid "
// 								onClick={() =>  window.open(urlSite, '_blank')}
// 							>
// 								Visiter le site
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// };
// export default Modal;

import {Carousel} from "flowbite-react";
const Modal = ({ isOpen, closeModal, titreProjet, description, pictures, urlSite, urlCode }) => {
	const showControls = pictures.length > 1;
	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 h-svh">
					<div className="bg-white p-8 max-w-screen-lg h-auto rounded-md ">
						<div className="flex justify-between items-center">
							<h2 className="text-2xl font-bold ">{titreProjet}</h2>
							<button
								className="px-2 text-gray-500 hover:text-gray-500 text-2xl hover:bg-gray-200 rounded-full "
								onClick={closeModal}
							>
								&times;
							</button>
						</div>
						<span className="flex self-stretch mt-5 mb-1  border-b border-solid border-gray-300 "></span>
						<div className=" py-6">
							<div className="flex items-center justify-center mb-6 h-56 sm:h-64 xl:h-80 2xl:h-96">
								{showControls ? (
									<Carousel slide={!showControls}>
										{pictures.map((image, index) => (
											<img key={index} src={image} alt={`Image ${index + 1}`} />
										))}
									</Carousel>
								) : (
									<img  src={pictures[0]} alt="Single Image" />
								)}
							</div>
							<p className="px-6 bg-[#efeff1]" dangerouslySetInnerHTML={{__html: description}}></p>
						</div>
						<span className="flex self-stretch mt-5 mb-3  border-b border-solid border-gray-300 "></span>
						<div className="flex justify-end gap-2 md:gap-6">
						{urlCode && (
								<button
									className="bg-transparent text-[#2b3144] font-bold text-xs md:text-md p-2 rounded transition-all duration-700 hover:bg-[#2b3144] hover:text-[#efeff1] hover:border-[#2b3144]  border border-[#2b3144] hover:border-solid "
									onClick={() => window.open(urlCode, '_blank')}
								>
									Consulter le code
								</button>
							)}
							{urlSite && (
								<button
									className="bg-[#2b3144] text-white font-bold text-xs md:text-md p-4 py-2 rounded transition-all duration-700 hover:bg-transparent hover:text-[#2b3144] hover:border-[#2b3144] border hover:border-solid "
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
