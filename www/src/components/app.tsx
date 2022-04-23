import { FunctionalComponent, h } from 'preact';
import { StoreContext } from 'storeon/preact';

import { CartridgeInfo } from './cartridge-info';
import { NavBar } from './navbar';
import { Game } from './game';
import { Header, Content, Footer, MainPanel, SidePanel } from './layout';

import store from '../store';

const App: FunctionalComponent = () => (
    <StoreContext.Provider value={store}>
        <Header>
            <NavBar />
        </Header>
        <Content>
            <SidePanel>
                <CartridgeInfo />
            </SidePanel>
            <MainPanel>
                <Game />
            </MainPanel>
            <SidePanel>
            </SidePanel>
        </Content>
        <Footer>
            v{process.env.VERSION} | <a href={process.env.GIT_LINK}>{process.env.GIT_SHA}</a>
        </Footer>
    </StoreContext.Provider>
);

export default App;
