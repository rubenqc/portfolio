import React from 'react';
import menu from './menu.json';
import logo from './logo_promitia.png';

import {
	Header as HeaderCarbon,
	HeaderContainer,
	HeaderName,
	HeaderNavigation,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderGlobalBar,
	SkipToContent,
	SideNav,
	SideNavItems,
	HeaderSideNavItems, HeaderGlobalAction
} from 'carbon-components-react';

const Header = () => (
	<HeaderContainer
		render={({ isSideNavExpanded, onClickSideNavExpand }) => (
			<HeaderCarbon aria-label="Carbon Tutorial">
				<SkipToContent />
				<HeaderMenuButton
					aria-label="Open menu"
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
				/>
				<HeaderName href="/" prefix="Airdaneel">
					Promitia
					<HeaderGlobalAction aria-label="Promitia">
						<img src={logo} alt="Promitia" style={{width: '100%', height: '100%', padding: '10px'}}/>
					</HeaderGlobalAction>
				</HeaderName>
				<HeaderNavigation aria-label="Carbon Tutorial">
					{
						menu.map(({ name, href }, index) => (
							<HeaderMenuItem key={index} href={href}>{name}</HeaderMenuItem>
						))
					}
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}>
					<SideNavItems>
						<HeaderSideNavItems>
							{
								menu.map(({ name, href }, index) => (
									<HeaderMenuItem key={index} href={href}>{name}</HeaderMenuItem>
								))
							}
						</HeaderSideNavItems>
					</SideNavItems>
				</SideNav>
				<HeaderGlobalBar />
			</HeaderCarbon>
		)}
	/>
)

export default Header;

