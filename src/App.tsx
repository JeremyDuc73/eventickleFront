import {Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./userManger/Login.tsx";
import Register from "./userManger/Register.tsx";
import {Home} from "./Home.tsx";
import EstablishmentForm from "./forms-register/EstablishmentForm.tsx";
import SpectatorForm from "./forms-register/SpectatorForm.tsx";
import ComedyClubForm from "./forms-register/ComedyClubForm.tsx";
import ComedianForm from "./forms-register/ComedianForm.tsx";
import {EstablishmentHome} from "./establishment/EstablishmentHome.tsx";
import EstablishmentEdit from "./establishment/EstablishmentEdit.tsx";
import CreateEventStep1 from "./event/CreateEventStep1.tsx";
import ComedyClubHome from "./comedyClub/ComedyClubHome.tsx";
import {EstablishmentInvite} from "./establishment/EstablishmentInvite.tsx";
import ComedyClubLandingPage from "./comedyClub/ComedyClubLandingPage.tsx";
import Scan from "./comedyClub/Scan.tsx";
import Logout from "./userManger/Logout.tsx";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/establishment/:id/home" element={<EstablishmentHome />} />
                <Route path="/establishment/:id/edit" element={<EstablishmentEdit />} />
                <Route path="/establishment/:id/show" element={<EstablishmentInvite />} />

                <Route path="/scan" element={<Scan />} />

                <Route path="/comedyClub/:id/home" element={<ComedyClubHome />} />
                <Route path="/comedyClub/:id/landing" element={<ComedyClubLandingPage />} />


                <Route path="/establishment/new" element={<EstablishmentForm />} />
                <Route path="/comedyClub/new" element={<ComedyClubForm />} />
                <Route path="/spectator/new" element={<SpectatorForm/>} />
                <Route path="/comedian/new" element={<ComedianForm/>} />


                <Route path="/event/create" element={<CreateEventStep1/>} />

                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};