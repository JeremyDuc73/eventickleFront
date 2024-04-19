import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";

export default function ComedianProfile()
{
    const {id} = useParams();
    const navigate = useNavigate()
    const [comedian, setComedian] = useState()

    useEffect(() => {
        console.log('lala')


        axiosHttp.get(GlobalConstants.baseUrl + '/comedian/'+id)
            .then((response) => {
                setComedian(response.data)
                //   console.log(response.data)
            })

    }, [id]);

    if(comedian){
        return (
            <>

                <h1>Salut, {comedian.name}</h1>

                <div className={"mb-2"}>
                    <button className={"btn btn-secondary me-1"}
                            onClick={() => navigate("/comedian/" + comedian.id + "/profile")}>Spectacles
                    </button>
                    <button className={"btn btn-secondary me-1"}>Disponibilités</button>
                    <button className={"btn btn-secondary"}
                            onClick={() => navigate("/comedian/" + comedian.id + "/profile/invites")}>Invitations
                    </button>
                </div>

                <div>
                    {comedian.events.map((event: any) => (
                        <div key={event.id} className="card mb-2 p-2">

                            <h5>{event.name}</h5>
                            <p>{event.date}</p>
                            {/*
                            moment().format("MMM Do YY")
*/}
                            <p>{event.price} €</p>
                            <p> location {event.location}</p>

                        </div>
                    ))}
                </div>

            </>
        )
    }
}