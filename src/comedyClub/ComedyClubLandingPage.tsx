import {useNavigate} from "react-router-dom";

export default function ComedyClubLandingPage()
{
    const navigate = useNavigate()

    return (
        <div style={{height: "100vh"}} className="d-flex flex-column justify-content-center align-items-center">
            <button type="button" className="btn btn-primary btn-lg mb-5">SCANNER LES BILLETS</button>
            <button onClick={() => navigate("/")} type="button" className="btn btn-secondary">INTERFACE WEB</button>
        </div>
    )
}