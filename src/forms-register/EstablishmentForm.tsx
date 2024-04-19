import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function EstablishmentForm()
{
    const [siret , setSiret] = useState("");
    const [description , setDescription] = useState("");
    const [address , setAddress] = useState("");
    const [name , setName] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");

    const navigate = useNavigate()

    async function CreatePlace() {
         console.log(localStorage.getItem("bearerToken"))
        const establishment = {siret , description , address, name, phoneNumber}
        console.log(establishment)
     await axiosHttp.post(GlobalConstants.baseUrl+"/establishment/new" , establishment)
            .then(response => {
                console.log(response.data)
                localStorage.setItem("establishmentId", response.data.id)
                console.log(localStorage.getItem("establishmentId"))
                navigate("/establishment/"+localStorage.getItem("establishmentId")+"/home")
            })
    }



    return (
        <>
            <div  className="mt-5">
                <h1 className="mb-3">Créer son établissement</h1>
                <input type="text"
                       placeholder="siret"
                       onChange={(e) => setSiret(e.target.value)}
                       className="form-control mb-4"/>

                <input type="text"
                       placeholder="description"
                       onChange={(e) => setDescription(e.target.value)}
                       className="form-control mb-4"/>
                <input type="text"
                       placeholder="address"
                       onChange={(e) => setAddress(e.target.value)}
                       className="form-control mb-4"/>
                <input type="text"
                       placeholder="name"
                       onChange={(e) => setName(e.target.value)}
                       className="form-control mb-4"/>


                <input type="text"
                       placeholder="phoneNumber"
                       onChange={(e) => setPhoneNumber(e.target.value)}
                       className="form-control mb-5"/>
                <div>
                    <button onClick={CreatePlace} className="mb-3 btn btn-outline-success">créer son établissement
                    </button>
                </div>

            </div>
        </>

    )
        ;
}