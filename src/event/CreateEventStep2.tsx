import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {useNavigate} from "react-router-dom";

export const CreateEventStep2 = () => {
    const [templateForm, setTemplateForm] = useState(<></>)
    const navigation = useNavigate()

    useEffect(() => {
        axiosHttp.get(GlobalConstants.baseUrl + "/comedians")
            .then(response => {
                setToStep2(response.data)
            })

    }, []);


    function inviteComedian(id: number) {
        axiosHttp.post(GlobalConstants.baseUrl + "/invite/sendto/comedian/" + id, {
            "event": localStorage.getItem("eventId"),
            "status": 0
        })
    }
    function gotToPage3(){
        navigation("/event/create/step3")
    }


    function setToStep2(comedians: []) {

        setTemplateForm(<>
                {comedians.map((item, i) => {
                    return (<>
                            <p>{item.name}</p>
                            <button onClick={() => inviteComedian(item.id)}>Invite comedian</button>
                        </>
                    )
                })}
                <button onClick={() => gotToPage3()}>Invite establishments</button>
            </>
        )
    }

    return (
        <>
            {templateForm}
        </>
    );
};