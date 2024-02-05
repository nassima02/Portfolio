import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons';
function CardSkills({title, skillCategory}) {
	return (
		<div
			className="flex flex-col px-8 md:px-6 bg-[#efeff1] md:h-[400px] h-[360px] w-[320px] sm:w-[260px] md:w-[300px] mb-8 sm:mb-1 rounded group hover:shadow-lg hover:shadow-[#808A8A] transition-all">
			<div className="flex justify-start items-center gap-4 sm:gap-6 mt-6 md:mt-10">
				<FontAwesomeIcon
					size="2x"
					className="text-[#2b3144] group-hover:text-[#808A8A]"
					icon={faGear}
				/>
				<h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
			</div>

			<div className="flex items-center border-t border-blue-950 pt-5 mt-3  w-[100%]">
				<div className="grid grid-cols-2 gap-4 w-full">
					{skillCategory.map((skill) => (
						<div key={skill.name} className={`flex flex-col items-center hover:text-inherit ${skill.span ?? '' } `}>
							<img src={skill.icon} alt={skill.name} className="w-8"/>
							<span>{skill.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default CardSkills;


