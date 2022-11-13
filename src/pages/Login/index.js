import { useState } from "react";
import "./login.css";
import {Logo} from "../../components/Logo";
import { auth } from "../../Services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();//impede de atualizar a página ao submeter o form

        if(email === "" || password === ""){
            alert("preencha todos os campos");
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("Usuário logado com sucesso");
        })
        .catch(() => {
            console.log("Error");
        })
    }

    return(
        <div className="login-container">
            <Logo/>
            <form className="form" onSubmit={handleLogin}>
                <input 
                type="email" 
                placeholder="Digite seu Email..."
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>

                <input 
                type="password" 
                placeholder="********" 
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}