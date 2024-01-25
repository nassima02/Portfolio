import projects from './datas/projects.json'
import skills from './datas/skills.json'


export async function loadProjects() {
	return { projects }
}
export async function loadSkills() {
	return { skills }
}