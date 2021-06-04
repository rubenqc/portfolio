import logo from './logo.svg';
import './style.css';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems
} from 'carbon-components-react';

function Index() {
  return (
    <div className="App">
      <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
              <Header aria-label="Carbon Tutorial">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label="Open menu"
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                />
                <HeaderName href="/" prefix="IBM">
                  Carbon Tutorial
                </HeaderName>
                <HeaderNavigation aria-label="Carbon Tutorial">
                  <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                </HeaderNavigation>
                <SideNav
                    aria-label="Side navigation"
                    expanded={isSideNavExpanded}
                    isPersistent={false}>
                  <SideNavItems>
                    <HeaderSideNavItems>
                      <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                    </HeaderSideNavItems>
                  </SideNavItems>
                </SideNav>
                <HeaderGlobalBar />
              </Header>
          )}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Index;
