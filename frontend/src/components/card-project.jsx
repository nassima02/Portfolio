import  { useState } from 'react';
import Modal from "./modal.jsx";
function CardProject({ title, imageUrl, description, pictures, siteUrl, codeUrl, logo}) {
    const [isHovered, setIsHovered] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div  >
            <div
                className={`flex flex-col flex-end bg-transparent rounded shadow-lg shadow-gray-400 relative overflow-hidden  ${
                    isHovered ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="  flex flex-col items-center bg-[rgba(255,255,255,.8)] transform ease-out duration-400 hover:transform  ">
                    <div
                        className="  transition-all duration-700 bottom-[-25%] absolute left-0 w-full h-[50%] bg-[rgba(255,255,255,0.89)] text-[#2b3144] "
                        style={{
                            transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
                            paddingBottom: isHovered ? '20px' : '0',
                        }}
                    >
                        <div className="text-[36px] text-center py-5 px-2 text-[#2b3144] "
                             style={{fontSize: '16px', fontWeight: 700}}>{title}</div>
                        <div
                            className="flex flex-col items-center self-stretch transition-all duration-300 px-4"
                            style={{
                                transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
                                paddingTop: isHovered ? '60px' : '0',
                            }}
                        >
                            <span className="flex self-stretch mt-10 mb-1  border-b border-solid border-[#2b3144] "></span>
                            <button
                                id="page-card-link-35"
                                className="m-5 bg-[#2b3144] text-white font-bold px-4 py-2 rounded transition-all duration-700 hover:bg-transparent hover:text-[#2b3144] hover:border-[#2b3144] border hover:border-solid"
                                onClick={openModal}
                                title="Spipoll : Connaissances sur les insectes pollinisateurs"
                            >
                                Voir le projet
                            </button>
                        </div>
                    </div>
                    <img
                        className="w-full h-[330px] object-cover rounded shadow shadow-gray-400"
                        src={imageUrl}
                         alt={`Image de ${title}`}
                    />
                </div>
                <Modal isOpen={modalOpen} closeModal={closeModal} titreProjet={title} description={description} pictures={pictures} urlSite={siteUrl} urlCode={codeUrl} logo={logo}/>
            </div>

        </div>
    );
}
export default CardProject;
