import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Establishment} from "../interface/Establishment.ts";

export function EstablishmentHome() {
    const [establishment, setEstablishment] = useState<Establishment>();
    const navigate = useNavigate()

    useEffect(() => {
        console.log(localStorage.getItem("establishmentId"))
        axiosHttp.get(GlobalConstants.baseUrl+"/establishment/"+localStorage.getItem("roleId"))
            .then((response)=>{
                setEstablishment(response.data)
            })

    },[]);



   if(establishment){
       return (
           <>
               <h1 className="mt-4 mb-4">{establishment?.name}</h1>
               <p>{establishment?.description}</p>
               <p>{establishment?.address}</p>

               <h1>Spectacles à venir</h1>

               {establishment.events ?
                   <>

                   </>
                   :
                   <></>
               }



           </>
       )
   }
}