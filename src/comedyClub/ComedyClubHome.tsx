import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../common/global-constants.ts";
import {useParams} from "react-router-dom";
import {ComedyClub} from "../interface/ComedyClub.ts";

export default function ComedyClubHome()
{
    const {id} = useParams()
    const [comedyClub, setComedyClub] = useState<ComedyClub>()

    useEffect(() => {
        axiosHttp.get(GlobalConstants.baseUrl+"/club/"+id)
            .then((response)=> {
                setComedyClub(response.data)
                console.log(response.data.organizedEvents)
            })
    }, []);

    return (
        <>
            <h1>{comedyClub?.name}</h1>
            <h2>Events : </h2>
            {comedyClub?.organizedEvents ?
                <>
                    {comedyClub!.organizedEvents.map((item, i) => {
                        return (<>
                                <p>{item.name}</p>
                            </>
                        )
                    })}
                </>:
                <>
                </>
            }

        </>
    )
}