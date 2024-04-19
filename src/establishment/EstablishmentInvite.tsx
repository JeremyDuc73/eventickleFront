import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {Event} from "../interface/Event.ts";
import {useEffect, useState} from "react";
import {Establishment} from "../interface/Establishment.ts";

export function EstablishmentInvite() {

    const [establishment, setEstablishment] = useState<Establishment>();
    const [event, setEvent] = useState<Event>()
    const [status, setStatus] = useState(0)
    useEffect(() => {
            axiosHttp.get(GlobalConstants.baseUrl+"Route_ici")
                .then((response)=>{
                    setEstablishment(response.data)
                    setEvent(response.data)
                })

    }, []);

        async function accept(event: Event) {
            const accept = {status}
          await axiosHttp.post(GlobalConstants.baseUrl= "" + event.id, accept)
                .then((response) => {
                    console.log(response.data);
                    setStatus(1)
                })

        }

    async function decline(event: Event) {
        const accept = {status}
        await axiosHttp.post(GlobalConstants.baseUrl= "" + event.id, accept)
            .then((response) => {
                console.log(response.data);
                setStatus(2)
            })

    }

    return (
        <>
            <div className="topBar">
                <div key={event?.id} className="card">
                    <span>{event?.name}</span>
                    <img src={event?.image} alt="non"/>
                    <span>{event?.description}</span>
                    <span>{establishment?.adress}</span>
                    <button onClick={() => accept} className="mb-3 btn btn-outline-success">Accept invite
                    </button>
                    <button onClick={() => decline} className="mb-3 btn btn-outline-success">decline invite
                    </button>
                </div>
            </div>
        </>
    );
}