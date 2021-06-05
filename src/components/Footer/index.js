import React from 'react'
import './index.css'
import iconEmail from './email.png'
import iconSocial from './social.png'
import iconLinkedin from './linkedin.svg'
import iconGithub from './github.svg'
import logoPromitia from './logo_promitia.png'

import {
	Grid,
	Row,
	Column,
	UnorderedList,
	ListItem,
	Link, OrderedList
} from 'carbon-components-react'

const styleFooter = {
	backgroundColor: '#161616',

}

const styleListItem = {
	marginBottom: '8px'
}

const styleLinkListItem = {
	color: 'white'
}

const styleGridBox = {
	padding: '32px'
}

const styleColumn = {
	textAlign: 'left',
	paddingTop: '1.5rem',
	paddingBottom: '1.5rem'
}

const Footer = () => (
	<footer style={styleFooter}>
		<Grid style={styleGridBox}>
			<Row>
				<Column style={styleColumn} sm={12} md={2} lg={{span: 2, offset: 1}}>
                    <UnorderedList>
	                    <ListItem style={styleListItem}>
							<Link href="/link1" style={styleLinkListItem}>Contact us</Link>
	                    </ListItem>
	                    <ListItem style={styleListItem}>
		                    <Link href="/link1" style={styleLinkListItem}>Privacy</Link>
	                    </ListItem>
	                    <ListItem style={styleListItem}>
		                    <Link href="/link1" style={styleLinkListItem}>Terms of use</Link>
	                    </ListItem>
	                    <ListItem style={styleListItem}>
		                    <Link href="/link1" style={styleLinkListItem}>IBM.com</Link>
	                    </ListItem>
                    </UnorderedList>
				</Column>
				<Column style={styleColumn} sm={12} md={2} lg={3} className="column__interline">
					<UnorderedList>
						<ListItem style={styleListItem}>
							<Link href="/link1" style={styleLinkListItem}>Medium</Link>
						</ListItem>
						<ListItem style={styleListItem}>
							<Link href="/link1" style={styleLinkListItem}>Twitter</Link>
						</ListItem>
					</UnorderedList>
				</Column>
				<Column style={styleColumn} sm={12} md={3} lg={4} className="column__interline">
					<UnorderedList>
						<ListItem style={styleListItem}>
							<span style={styleLinkListItem}>
								Have questions? Email us
								at carbon@us.ibm.com
								or open an issue on GitHub.
							</span>
						</ListItem>
						<ListItem style={styleListItem}>
							<span style={styleLinkListItem}>
								Vanilla Components version ^10.36.0
								React Components version ^7.36.0
								Last updated 01 June 2021
								Copyright © 2021 IBM
							</span>
						</ListItem>
					</UnorderedList>
				</Column>
			</Row>
			<Row>
				<Column style={styleColumn} sm={12} md={2} lg={{span: 2, offset: 1}}>
					<img src={logoPromitia} alt="Promitia" height={32} />
				</Column>
			</Row>
		</Grid>
	</footer>
)

export default Footer
