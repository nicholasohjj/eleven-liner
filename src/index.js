import ReactDOM from 'react-dom';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { StyleReset } from 'atomize';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import App from './App';

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
  <Router>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset />
      <App />
    </StyletronProvider>
  </Router>,
  document.getElementById('root'),
);
