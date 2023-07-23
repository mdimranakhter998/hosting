import ReactDom from "react-dom/client";
import "./index.css";
import App from './app.js';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import {store,persistor} from './store'
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { PersistGate } from 'redux-persist/integration/react';
import 'bootswatch/dist/darkly/bootstrap.min.css';

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
    <Provider store={store}>   
    <App/>   
    </Provider>
    </BrowserRouter>
)