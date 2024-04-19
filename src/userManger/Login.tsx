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
                localStorage.setItem("bearerToken",response.data.token)
            })
            .then(()=>{
                axiosHttp.get(GlobalConstants.baseUrl+"/current/user")
                    .then((response)=>{
                        if (typeof response.data === "string"){
                            navigate("/"+response.data+"/new");
                        }else {
                            console.log(response.data)
                            navigate("/"+response.data.role+"/"+response.data.roleId+"/home")
                        }
                    })
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
                        <button onClick={login} className="mb-3 btn btn-outline-success">Se connecter</button>
                        <p>Pas de compte ? <a href="/register">Se créer un compte</a></p>
                    </div>

            </div>
        </>

    )
        ;
}