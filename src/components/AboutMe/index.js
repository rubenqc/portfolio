import React from 'react';
import './index.css'

const AboutMe = () => (
	<div className="about">
		<h3>
			Hey there! I'm Rubén, Full-Stack Developer at
			<span className="highlight">Entel Perú</span> and <span className="highlight">Data Science</span> enthusiast
		</h3>
		<p className="brackets">
			I build web apps to configure, deploy and manage telecommunications
			systems, these systems can use protocols like SSH, Telnet, SNMP to
			monitor the network status.
		</p>
		<p>
			I enjoy reading books by Isaac Asimov, who inspire me to build new
			applications to improve my lifestyle, one of these applications is this
			web, where I will share my experiencies of testing new technologies or
			trends. The idea is to inspire people to share their research and create
			a community where we can learn together.
			<br/>
			<br/>
			We can change the world.
		</p>
	</div>
)

export default AboutMe;
