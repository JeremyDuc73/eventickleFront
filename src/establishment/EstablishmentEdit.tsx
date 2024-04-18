import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {useState} from "react";

export default function EstablishmentEdit()
{
    const [siret, setSiret] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [accessibility, setAccessibility] = useState(false);
    const [name , setName] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");


    async function editEstablishment(){
        const editedEstablishment = {name,description,siret, address,accessibility,phoneNumber}
        await axiosHttp.post(GlobalConstants.baseUrl+'/establishment/'+GlobalConstants.establishmentId+'/edit',editedEstablishment)
            .then((response) => {
                console.log(response.data);
            })
    }



    return (
        <>
            <div  className="mt-5">
                <h1 className="mb-3">Edit son établissement</h1>
                <input type="text"
                       placeholder="siret"
                       value={siret}
                       onChange={(e) => setSiret(e.target.value)}
                       className="form-control mb-4"/>

                <input type="text"
                       placeholder="description"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                       className="form-control mb-4"/>
                <input type="text"
                       placeholder="address"
                       value={address}
                       onChange={(e) => setAddress(e.target.value)}
                       className="form-control mb-4"/>
                <input type="text"
                       placeholder="name"
                       value={name}
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
                       value={phoneNumber}
                       onChange={(e) => setPhoneNumber(e.target.value)}
                       className="form-control mb-5"/>
                <div>
                    <button onClick={editEstablishment} className="mb-3 btn btn-outline-success">Modifier son établissement
                    </button>
                </div>

            </div>
        </>

    )
        ;
}