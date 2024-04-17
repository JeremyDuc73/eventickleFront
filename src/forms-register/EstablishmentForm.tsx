import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function EstablishmentForm()
{
    const [siret , setSiret] = useState("");
    const [description , setDescription] = useState("");
    const [address , setAddress] = useState("");
    const [accessibility, setAccessibility] = useState(false);
    const [name , setName] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const navigate = useNavigate();
    async function CreatePlace() {
        const establishment = {siret , description , address, accessibility , name, phoneNumber}
        console.log(establishment)
       await axiosHttp.post(GlobalConstants.baseUrl+"" , establishment)
            .then(response => {
                console.log(response.data)
                setTimeout(()=>{
                    navigate("/")
                    window.location.reload()
                },500)
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

                <div className="form-check form-switch">
                    <input className="form-check-input"
                           type="checkbox"
                           role="switch"
                           id="flexSwitchCheckDefault"
                           onChange={(e) => setAccessibility(e.target.checked)}
                    />
                    <label className="form-check-label mb-4 ms-1" htmlFor="flexSwitchCheckDefault">acces PMR
                       </label>
                </div>


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