import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {GlobalConstants} from "../common/global-constants.ts";

export default function ComedyClubForm()
{
    const [name, setName] = useState("")
    const navigate = useNavigate()

    function createComedyClub()
    {
        const comedyClub = {name}
        axios.post(GlobalConstants.baseUrl+"ROUTE ICI", comedyClub)
            .then((response)=>{
                console.log(response.data)
                navigate("/login")
            })
    }

    return (
        <>
            <div className="mt-5">
                <h1 className="mb-3">Créer son profil de Comedy Club</h1>
                <input type="text"
                       placeholder="Votre nom"
                       onChange={(e) => setName(e.target.value)}
                       className="form-control mb-4"
                />

                <div>
                    <button onClick={createComedyClub} className="mb-3 btn btn-outline-success">Valider mon inscription</button>
                </div>
            </div>
        </>
    )
}