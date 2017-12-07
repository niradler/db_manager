import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './index.css';
import App from './App/App';
import { HashRouter  } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <HashRouter>
    <App />
    </HashRouter>, document.getElementById('root'));

registerServiceWorker();

