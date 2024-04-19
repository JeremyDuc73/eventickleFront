import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalConstants} from "../common/global-constants.ts";
import axiosHttp from "../auth/interceptor.ts";

export default function ComedyClubForm()
{
    const [name, setName] = useState("")
    const navigate = useNavigate()

    function createComedyClub()
    {
        const comedyClub = {name}
        axiosHttp.post(GlobalConstants.baseUrl+"/club/new", comedyClub)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("comedyClubId", response.data.id)
                console.log(localStorage.getItem("comedyClubId"))
                navigate("/club/"+localStorage.getItem("comedyClubId")+"/landing")
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