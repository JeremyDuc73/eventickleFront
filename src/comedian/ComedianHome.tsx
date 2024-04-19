import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import moment from 'moment';
import {useNavigate} from "react-router-dom";


export default function ComedianHome()
{
    const [events, setEvents] = useState<Event[]>()
    const navigate = useNavigate();

    useEffect(() => {

        axiosHttp.get(GlobalConstants.baseUrl+"/events")
            .then(response => {
                setEvents(response.data);
                console.log(response.data);
            });
    }, []);


    if(events){

        return (
            <>
                <h1>Coucou comédien</h1>

                <div>
                    {events.map((event: Event) => (
                        <div key={event.id} className="card" onClick={ ()=> navigate("/event/"+ event.id)}>

                            <h5>{ event.name }</h5>
                            <p>{ event.date }</p>
                            {/*
                            moment().format("MMM Do YY")
*/}
                            <p>{ event.price } €</p>
                            <p> location { event.location}</p>

                        </div>
                    ))}
                </div>

            </>

        )

    }
}