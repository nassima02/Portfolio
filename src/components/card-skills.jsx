import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function CardSkills({ title, skillCategory }) {
	return (
		<div className="flex flex-col px-8 bg-[#efeff1] h-[400px] w-[350px] m-8 rounded group hover:shadow-lg hover:shadow-[#95A569] transition-all">
			<div className="flex justify-start items-center gap-4 mt-14">
				<FontAwesomeIcon
					size="3x"
					className="text-[#2b3144] group-hover:text-[#95A569]"
					icon={faGear}
				/>
				<h1 className="text-4xl font-bold">{title}</h1>
			</div>

			<div className="flex items-center gap-3 border-t border-blue-950 pt-5 mt-3">
				<ul className="grid grid-cols-3 gap-4">
					{skillCategory.map((skill, index) => (
						<li key={skill.name} className={`flex items-center ${index % 2 === 0 ? 'col-span-2' : ''}`}>
              <span className="hover:text-inherit">
                <img src={skill.icon} alt={skill.name} className="w-10" /> {skill.name}
              </span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

CardSkills.propTypes = {
	title: PropTypes.string.isRequired,
	skillCategory: PropTypes.array.isRequired,
};

export default CardSkills;


