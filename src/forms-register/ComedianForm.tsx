import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {GlobalConstants} from "../common/global-constants.ts";

export default function ComedianForm()
{
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [decription, setDescription] = useState("")

    const navigate = useNavigate()

    function createComedian()
    {
        const comedian = {firstName, surName, decription}
        console.log(comedian)
        axios.post(GlobalConstants.baseUrl+"/comedian/new", comedian)
            .then((response)=>{
                console.log(response.data)
                navigate("/login")
            })
    }

    return (
        <>
            <div className="mt-5">
                <h1 className="mb-3">Créer son profil de comédien</h1>
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
                <textarea style={{resize: "none"}}
                          rows={5}
                          placeholder="Votre description"
                          onChange={(e) => setDescription(e.target.value)}
                          className="form-control mb-4"
                />

                <div>
                    <button onClick={createComedian} className="mb-3 btn btn-outline-success">Valider mon inscription</button>
                </div>
            </div>
        </>
    )
}