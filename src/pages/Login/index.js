import { useState } from "react";
import "./login.css";
import {Logo} from "../../components/Logo";
import { auth } from "../../Services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "../../components/Input";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();//impede de atualizar a página ao submeter o form

        if(email === "" || password === ""){
            alert("preencha todos os campos");
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Bem vindo de volta!!");
            navigate("/admin", {replace: true });
        })
        .catch(() => {
            toast.error("Erro ao tentar fazer o login!");
        })
    }

    return(
        <div className="login-container">
            <Logo/>
            <form className="form" onSubmit={handleLogin}>
                <Input
                type="email" 
                placeholder="Digite seu Email..."
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                type="password" 
                placeholder="********" 
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}