import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {Navbar} from "./Navbar.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Navbar />
        <div className="container">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    </React.StrictMode>,
)