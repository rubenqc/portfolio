import React from 'react';
import './index.css';

import logoEntel from './entel_web.png'
import logoIcetel from './icetel.png'

const Experience = () => (
	<div className="experience" id="experience">
		<div className="section__title">
			<h3>&lt; experience &gt;</h3>
		</div>
		<div className="card">
			<h5 className="card__title">Entel</h5>
			<div className="card__img">
				<img src={logoEntel} width="120" alt=""/>
			</div>
			<h6 className="card__subtitle">Full Stack Developer</h6>
			<p className="card__date">Feb 2020 - current</p>
			<p className="card__content">
				Develop Full-Stack CRUD platforms to handle data related to
				telecommunications sector like network inventory, management of
				projects, office tracking. Support and maintenance of Apps in PHP,
				REST integrations, data extraction, network KPIs analysis.
				<br/><br/>
				Technologies: Node.js, React.js, Python, Mongo DB, Oracle DB, REST,
				Sockets, PHP.
			</p>
		</div>
		<div className="card">
			<h5 className="card__title">Icetel</h5>
			<div className="card__img">
				<img src={logoIcetel} alt=""/>
			</div>
			<h6 className="card__subtitle">Developer</h6>
			<p className="card__date">2019 - Jan 2020</p>
			<p className="card__content">
				Built frontend interface and backend for an application in Node.js,
				this application needs to connect to network equipment manager to
				extract data in real time from equipments like routers, switches,
				antennas using XML NBI (North Bound Interface).
				<br/><br/>
				Technologies: Node.js, SOAP, REST, Oracle DB.
			</p>
		</div>
	</div>
)

export default Experience;
