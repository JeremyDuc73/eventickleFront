import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Event} from "../interface/Event.ts";
import {Establishment} from "../interface/Establishment.ts";

export function EstablishmentHome() {
    const [isLoading, setLoading] = useState(true);
    const [establishment, setEstablishment] = useState<Establishment>();
    const navigate = useNavigate()

    useEffect(() => {
        console.log(localStorage.getItem("establishmentId"))
        axiosHttp.get(GlobalConstants.baseUrl+"/establishment/"+id)
            .then((response)=>{
                setEstablishment(response.data)
                setLoading(false)
            })

    },[]);

    const {id} = useParams();


    if (isLoading) {
        return <div className="App">Loading...</div>;
    }



    return (
        <>
            <div className="topBar">


                <div key={establishment?.id} className="card">
                    <span>{establishment?.name}</span>
                    <img src={establishment?.image} alt="non"/>
                    <span>{establishment?.description}</span>
                    <span>{establishment?.adress}</span>
                    <a onClick={() => navigate("/establishment/" + localStorage.getItem("establishmentId") + "/edit")}
                       className="btn btn-outline-warning">Editer
                        ce </a>
                </div>

            </div>


            <div className="mainContent">
                {establishment?.events.map((events: Event) => (
                    <div key={events.id}>
                        <div>
                            <div className="">
                                <span>{events.name}</span>
                            </div>
                            <div className="">
                                <span>{events.date}</span>
                            </div>
                            <div className="">
                                <span>{events.description}</span>
                            </div>
                            <div className="">
                                <span>{events.price}</span>
                            </div>
                            <div className="">
                                <span>{events.duration}</span>
                            </div>
                            <div className="">
                                <span>{events.status}</span>
                            </div>
                        </div>
                    </div>
            ))}

            </div>

        </>
    );
}