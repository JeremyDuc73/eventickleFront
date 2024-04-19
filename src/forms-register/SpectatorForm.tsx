import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalConstants} from "../common/global-constants.ts";
import axiosHttp from "../auth/interceptor.ts";

export default function SpectatorForm()
{
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const navigate = useNavigate()

    async function createSpectator()
    {
        console.log(localStorage.getItem("bearerToken"))
        const spectator = {name, surname, phoneNumber}
        await axiosHttp.post(GlobalConstants.baseUrl+"/spectator/new", spectator)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("spectatorId", response.data.id)
                console.log(localStorage.getItem("spectatorId"))
                navigate("/spectator/"+localStorage.getItem("spectatorId")+"/home")
            })
    }

    return (
        <>
            <div className="mt-5">
                <h1 className="mb-3">Créer son profil de spectateur</h1>
                <input type="text"
                       placeholder="Votre prénom"
                       onChange={(e) => setName(e.target.value)}
                       className="form-control mb-4"
                />
                <input type="text"
                       placeholder="Votre nom"
                       onChange={(e) => setSurname(e.target.value)}
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