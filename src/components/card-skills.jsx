import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons';
function CardSkills({title, skillCategory}) {
	return (
		<div
			className="flex flex-col px-8 bg-[#efeff1] h-[400px] w-[230px] sm:w-[260px] md:w-[300px] my-6 md:m-8 rounded group hover:shadow-lg hover:shadow-[#808A8A] transition-all">
			<div className="flex justify-start items-center gap-4 sm:gap-6 mt-6 md:mt-10">
				<FontAwesomeIcon
					size="2x"
					className="text-[#2b3144] group-hover:text-[#808A8A]"
					icon={faGear}
				/>
				<h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
			</div>

			<div className="flex items-center gap-3 border-t border-blue-950 pt-5 mt-3  w-[100%]">
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


