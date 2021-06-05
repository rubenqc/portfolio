import logo from './logo.svg';
import './style.css';

import {
    Grid,
    Row,
    Column
} from 'carbon-components-react';

import Header from '../Header'
import AboutMe from '../AboutMe'
import Profile from "../Profile";

function Index() {
  return (
    <div className="App">
      <Header/>

      <Grid style={{marginTop: '48px', padding: '0', width: '100%'}} >
          <Row style={{ margin: 0}}>
              <Column style={{ padding: 0}}>
                  <Profile/>
              </Column>
          </Row>
          <Row style={{margin: 0}}>
              <Column>
                  <AboutMe/>
              </Column>
          </Row>
      </Grid>

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
