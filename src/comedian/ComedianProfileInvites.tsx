import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";

export default function ComedianProfileInvites()
{

    const {id} = useParams();
    const navigate = useNavigate()
    const [comedian, setComedian] = useState()

    useEffect(() => {

        axiosHttp.get(GlobalConstants.baseUrl + '/comedian/'+id)
            .then((response) => {
                setComedian(response.data)
                //console.log(response.data)
            })

    }, [id]);


    function acceptInvite(inviteId:number){

        axiosHttp.get(GlobalConstants.baseUrl + '/invite/accept/'+inviteId)
            .then((response) => {
                console.log(response.data)
            })
    }

    if(comedian){
        return (
            <>

                <h1>Salut, {comedian.name}</h1>

                <div class={"mb-2"}>
                    <button class={"btn btn-secondary me-1"} onClick={() => navigate("/comedian/" + comedian.id + "/profile")}>Spectacles</button>
                    <button class={"btn btn-secondary me-1"}>Disponibilités</button>
                    <button class={"btn btn-secondary"} onClick={() => navigate("/comedian/" + comedian.id + "/profile/invites")}>Invitations
                    </button>
                </div>

                <div>
                    {comedian.receivedInvites.map((invite: any) => (
                        <div key={invite.id} >
                            {invite.status == 0 ?
                                <>
                                    <div className="card mb-2 p-2">
                                        <p>{invite.id}</p>
                                        <p>du Comedy Club: {invite.comedyClub.name}</p>
                                        <ul>Event :
                                            <li>nom : {invite.event.name}</li>
                                            <li>lieu : {invite.event.location}</li>

                                        </ul>

                                        <div className="d-flex justify-content-end">
                                            <button className={"btn btn-outline-secondary"}>Refuser</button>
                                            <button className="btn btn-secondary"
                                                    onClick={() => acceptInvite(invite.id)}>Accepter invitation
                                            </button>
                                        </div>
                                    </div>

                                </>
                                : <></>
                            }
                        </div>
                    ))}
                </div>


            </>
        );
    }

}