import {Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./userManger/Login.tsx";
import Register from "./userManger/Register.tsx";
import {Home} from "./Home.tsx";
import EstablishmentForm from "./forms-register/EstablishmentForm.tsx";
import SpectatorForm from "./forms-register/SpectatorForm.tsx";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eta" element={<EstablishmentForm />} />
                <Route path="/spec" element={<SpectatorForm/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};