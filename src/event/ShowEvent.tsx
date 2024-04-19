import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import { useParams} from "react-router-dom";

export const ShowEvent = () => {


    const {id} = useParams();

    const [event, setEvent] = useState<Event>();


    useEffect(() => {

        axiosHttp.get(GlobalConstants.baseUrl + '/event/'+id)
            .then((response) => {
                setEvent(response.data)
                console.log(response.data)
            })

    }, [id]);


    if(event){

        return (
            <>

                <h1>{event.name}</h1>
                <p>{ event.description}</p>
                <p>date: {event.date}</p>
                <p>durée : {event.duration}</p>
                <p>Lieu : { event.location}</p>

                <div>
                    {event.comedians.map((comedian: any) => (
                        <div key={comedian.id} className="card">

                            <h5>{ comedian.name }</h5>


                        </div>
                    ))}
                </div>
            </>
        );
    }
};