import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalConstants} from "../common/global-constants.ts";
import axiosHttp from "../auth/interceptor.ts";

export default function ComedianForm()
{
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    function createComedian()
    {
        const comedian = {name, surname, description}
        console.log(comedian)
        axiosHttp.post(GlobalConstants.baseUrl+"/comedian/new", comedian)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("comedianId", response.data.id)
                console.log(localStorage.getItem("comedianId"))
                navigate("/comedian/"+localStorage.getItem("comedianId")+"/home")
            })
    }

    return (
        <>
            <div className="mt-5">
                <h1 className="mb-3">Créer son profil de comédien</h1>
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