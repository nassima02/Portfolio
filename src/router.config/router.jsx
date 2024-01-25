//import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../App'
import {loadProjects, loadSkills} from "../projects-services.jsx";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
		loader: async () => {
			const projectsData = await loadProjects()
			const skillsData = await loadSkills()
			return { ...projectsData, ...skillsData }
		},
	},
])
