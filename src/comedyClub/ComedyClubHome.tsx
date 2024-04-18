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
        axiosHttp.get(GlobalConstants.baseUrl+"ROUTE ICI"+id)
            .then((response)=> {
                setComedyClub(response.data)
            })
    }, []);

    return (
        <>
            <h1>{comedyClub?.name}</h1>
        </>
    )
}