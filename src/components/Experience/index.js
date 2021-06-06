import React from 'react';
import './index.css';

import data from './data.json'

import {
	Grid,
	Row,
	Column
} from 'carbon-components-react';

const styleImage = {
	width: '50%',
	// backgroundColor: 'white',
	// borderRadius: '50%',
}

const styleTitle = {
	textAlign: "center",
	// backgroundColor: "#04cb97",
	fontSize: '30px',
	// borderRadius: '16px'
}

const styleCard = {
	// borderRadius: '16px'
	margin: '20px 0'
}

const styleContainerText = {
	backgroundColor: "#262626"
}

const Experience = () => {
	return (
		<div className='experience'>
			<div className="section__title">
				<h3>&lt; experience &gt;</h3>
			</div>
			<Grid>
				{
					data.map(({company, logo, title, time, description, technologies}, index) => (
						<Row>
							<Column>
								<Grid style={styleCard} condensed>
									<Row>
										<Column lg={4}>
											<img src={`/images/experiences/${logo}`} alt="" style={styleImage}/>
										</Column>
										<Column lg={8} style={styleContainerText}>
											<h6 className="card__subtitle">{title}</h6>
											<p className="card__date">{time}</p>
											<p className="card__content">
												{description}
												<br/><br/>
												Technologies: {technologies}
											</p>
										</Column>
									</Row>
								</Grid>
							</Column>
						</Row>
					))
				}
			</Grid>
			{/*{*/}
			{/*	data.map(({company, logo, title, time, description, technologies}, index) => (*/}
			{/*		<div className="card" key={index}>*/}
			{/*			<h5 className="card__title">{company}</h5>*/}
			{/*			<div className="card__img">*/}
			{/*				<img src={`/images/experiences/${logo}`} width="120" alt=""/>*/}
			{/*			</div>*/}
			{/*			<h6 className="card__subtitle">{title}</h6>*/}
			{/*			<p className="card__date">{time}</p>*/}
			{/*			<p className="card__content">*/}
			{/*				{description}*/}
			{/*				<br/><br/>*/}
			{/*				Technologies: {technologies}*/}
			{/*			</p>*/}
			{/*		</div>*/}
			{/*	))*/}
			{/*}*/}
		</div>
	)
}

export default Experience;
