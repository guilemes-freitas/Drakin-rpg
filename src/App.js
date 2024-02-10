import RoutesDefiner from "./routes";
import React, {Fragment} from 'react';
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';
import Providers from "./providers";

function App() {
  return (
    <React.StrictMode>
      <Providers>
        <BrowserRouter>
          <Fragment>
            <div className="App">
              <header className="App-header">
              </header>
            </div>
            <RoutesDefiner />
            <GlobalStyles />
          </Fragment>
        </BrowserRouter>
      </Providers>
    </React.StrictMode>
  );
}

export default App;
