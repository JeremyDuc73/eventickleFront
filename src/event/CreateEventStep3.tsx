import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {useNavigate} from "react-router-dom";

export const CreateEventStep3 = ()=>{
    const [templateForm, setTemplateForm] = useState(<></>)
    const navigation = useNavigate()
    useEffect(() => {
        axiosHttp.get(GlobalConstants.baseUrl + "/establishments")
            .then(response => {
                setToStep3(response.data)
            })
    }, []);


    function inviteEstablishment(id: number) {
        axiosHttp.post(GlobalConstants.baseUrl + "/invite/sendto/establishment/" + id, {
            "event": localStorage.getItem("eventId"),
            "status": 0
        })
    }

    function setToStep3(establishments: []) {
        setTemplateForm(<>
            {
                establishments.map((item, i) => {
                    return (<>
                        <p>{item.name}</p>
                        <p>{item.phoneNumber}</p>
                        <button onClick={() => inviteEstablishment(item.id)}>Invite</button>
                    </>)
                })
            }
        </>)
    }

    return(<>
        {templateForm}
        <button onClick={()=>navigation("/club/" + localStorage.getItem("roleId") + "/home")}>Back to menu</button>
    </>)
}