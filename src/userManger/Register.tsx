import { useState } from 'react';
import axios from 'axios';
import  "react-router-dom";
import {GlobalConstants} from "../common/global-constants.ts";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState([''])
    const navigate = useNavigate();

   function login(){
       const userLogin = {email,password};
       axios.post(GlobalConstants.baseUrl+"/login_check",userLogin)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("bearerToken",response.data.token)
                console.log(localStorage.getItem("bearerToken"))
            })
    }

    async function register()
    {
        const userRegister = {email,password, roles};
        await axios.post("https://apieventickle.oscadeberranger.com/register",userRegister)
            .then((response)=>{
                login()
                setTimeout(() => {
                    console.log(localStorage.getItem("bearerToken"))
                    navigate(response.data)
                }, 2000)
            })
    }


    return (
        <>
            <div className="mt-5">
                <h1 className="mb-3">S'inscrire</h1>
                <input type="email"
                       placeholder="email"
                       onChange={(e) => setEmail(e.target.value)}
                       className="form-control mb-4"
                />
                <input type="password"
                       placeholder="mot de passe"
                       onChange={(e) => setPassword(e.target.value)}
                       className="form-control mb-4"
                />
                <div className="mb-5">
                    <input type="radio"
                           className="btn-check"
                           name="options"
                           id="option1"
                           autoComplete="off"
                           onChange={() => setRoles(["spectator"])}
                    />
                    <label className="btn btn-primary me-2" htmlFor="option1">Spectateur</label>

                    <input type="radio"
                           className="btn-check"
                           name="options"
                           id="option2"
                           autoComplete="off"
                           onChange={() => setRoles(["comedian"])}
                    />
                    <label className="btn btn-primary me-2" htmlFor="option2">Comédien/Artiste</label>

                    <input type="radio"
                           className="btn-check"
                           name="options"
                           id="option3"
                           autoComplete="off"
                           onChange={() => setRoles(["establishment"])}
                    />
                    <label className="btn btn-primary me-2" htmlFor="option3">Etablissement</label>

                    <input type="radio"
                           className="btn-check"
                           name="options" id="option4"
                           autoComplete="off"
                           onChange={() => setRoles(["club"])}
                    />
                    <label className="btn btn-primary" htmlFor="option4">Comedy Club</label>
                </div>

                <div>
                    <button onClick={register} className="mb-3 btn btn-outline-success">Etape suivante</button>
                    <p>Déjà un compte ? <a href="/login">Se connecter</a></p>
                </div>
            </div>
        </>

    )
}