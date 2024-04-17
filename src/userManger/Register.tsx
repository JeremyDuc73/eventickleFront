import { useState } from 'react';
import axios from 'axios';
import  "react-router-dom";
import {GlobalConstants} from "../common/global-constants.ts";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState([''])
    const navigate = useNavigate();

    function register(){
        const user = {email,password, role};
        axios.post(GlobalConstants.baseUrl+"/register",user)
            .then((response)=>{
                console.log(true)
                console.log(response.data)
                setTimeout(()=>{
                    navigate(GlobalConstants.baseUrl+response.data)
                    window.location.reload()
                },500)
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
                           onChange={() => setRole(["spectator"])}
                    />
                    <label className="btn btn-primary me-2" htmlFor="option1">Spectateur</label>

                    <input type="radio"
                           className="btn-check"
                           name="options"
                           id="option2"
                           autoComplete="off"
                           onChange={() => setRole(["comedian"])}
                    />
                    <label className="btn btn-primary me-2" htmlFor="option2">Comédien/Artiste</label>

                    <input type="radio"
                           className="btn-check"
                           name="options"
                           id="option3"
                           autoComplete="off"
                           onChange={() => setRole(["establishment"])}
                    />
                    <label className="btn btn-primary me-2" htmlFor="option3">Etablissement</label>

                    <input type="radio"
                           className="btn-check"
                           name="options" id="option4"
                           autoComplete="off"
                           onChange={() => setRole(["club"])}
                    />
                    <label className="btn btn-primary" htmlFor="option4">Comedy Club</label>
                </div>

                <div>
                    <button onClick={register} className="mb-3 btn btn-outline-success">Etape suivante </button>
                    <p>Déjà un compte ? <a href="/login">Se connecter</a></p>
                </div>
            </div>
        </>

    )
}