import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {GlobalConstants} from "../common/global-constants.ts";

export default function SpectatorForm()
{
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const navigate = useNavigate()

    function createSpectator()
    {
        const spectator = {firstName, surName, phoneNumber}
        axios.post(GlobalConstants.baseUrl+"ROUTE ICI", spectator)
            .then((response)=>{
                console.log(response.data)
                navigate("/login")
            })
    }

    return (
        <>
            <div className="mt-5">
                <h1 className="mb-3">Créer son profil de spectateur</h1>
                <input type="text"
                       placeholder="Votre prénom"
                       onChange={(e) => setFirstName(e.target.value)}
                       className="form-control mb-4"
                />
                <input type="text"
                       placeholder="Votre nom"
                       onChange={(e) => setSurName(e.target.value)}
                       className="form-control mb-4"
                />
                <input type="text"
                       placeholder="Votre numéro (0634343434)"
                       onChange={(e) => setPhoneNumber(e.target.value)}
                       className="form-control mb-4"
                />

                <div>
                    <button onClick={createSpectator} className="mb-3 btn btn-outline-success">Valider mon inscription</button>
                </div>
            </div>
        </>
    )
}