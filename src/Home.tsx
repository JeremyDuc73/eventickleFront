import {useNavigate} from "react-router-dom";
import {GlobalConstants} from "./common/global-constants.ts";
import {useEffect} from "react";

export function Home()
{
    const navigate = useNavigate()
    useEffect(() => {
        if (!GlobalConstants.isLoggedIn)
        {
            navigate("/login")
        }
    }, []);

    return (
        <h1>Bienvenue</h1>
    )
}