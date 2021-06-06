import React from 'react';
import './index.css'
import defaultImage from './project.png'

const Projects = () => (
	<div className="projects" id="projects">
		<div className="projects__title">
			<h3>&lt; projects &gt;</h3>
		</div>
		<div className="card__project">
			<img src={defaultImage} alt="project photo"/>
			<div className="card__project-content">
				<p>Coming soon I'll upload my projects.</p>
				<a className="know-more">Source</a>
			</div>
			<div className="card__project-title">Coming soon.</div>
		</div>
	</div>
)

export default Projects;
