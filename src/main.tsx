import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from "./app/store";
import {Provider} from "react-redux";


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Provider store={store}> <App/></Provider>
    </BrowserRouter>
);