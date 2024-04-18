import { useState } from 'react';
import axios from 'axios';
import  "react-router-dom";
import {GlobalConstants} from "../common/global-constants.ts";
import { useNavigate } from 'react-router-dom';
import axiosHttp from "../auth/interceptor.ts";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function login(){
        const user = {email,password};
        axios.post(GlobalConstants.baseUrl+"/login_check",user)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("bearerToken",response.data.token)
            })
    }



    function getRole(){
        login()
        axiosHttp.get(GlobalConstants.baseUrl+"ROUTE ICI")
            .then((response)=>{
                if (response.data.role == "establishment")
                {
                    localStorage.setItem("establishmentId", response.data.roleId)
                    navigate("/establishment/"+response.data.roleId+"/home")
                } else if (response.data.role == "comedian")
                {
                    localStorage.setItem("comedianId", response.data.roleId)
                    navigate("/comedian/"+response.data.roleId+"/home")
                } else if (response.data.role == "spectator")
                {
                    localStorage.setItem("spectatorId", response.data.roleId)
                    navigate("/spectator/"+response.data.roleId+"/home")
                } else if (response.data.role == "comedyClub")
                {
                    localStorage.setItem("comedyClubId", response.data.roleId)
                    navigate("/comedyClub/"+response.data.roleId+"/landing")
                }
            })
    }

    return (
        <>
            <div className="mt-5">
                <h1 className="mb-3">Se Connecter</h1>
                <input type="email"
                       placeholder="email"
                       onChange={(e)=>setEmail(e.target.value)}
                       className="form-control mb-4"/>

                <input type="password"
                       placeholder="password"
                       onChange={(e)=>setPassword(e.target.value)}
                       className="form-control mb-5"/>

                    <div>
                        <button onClick={getRole} className="mb-3 btn btn-outline-success">Se connecter</button>
                        <p>Pas de compte ? <a href="/register">Se créer un compte</a></p>
                    </div>

            </div>
        </>

    )
        ;
}