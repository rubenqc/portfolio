import React from 'react';
import cv from './CV_Rubén Quispe v2021_04_25.pdf'
import profile from './profile.png'
import './index.css'

const Profile = () => (
	<div className="background">
		<div className="profile">
			<img src={profile} alt="Rubén Quispe"/>
			<p className="name">RUBEN QUISPE</p>
			<p className="phrase">Full Stack Developer | Telecommunications Engineering</p>
			<a className="show-more" href={cv} download>RESUME</a>
		</div>
	</div>
)

export default Profile;
