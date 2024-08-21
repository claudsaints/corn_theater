import { Link } from "react-router-dom";
import Input from "../Inputs/Inputs";
import './pad.css'


export default function Pad(){
    
    return(
        <>
            <div className="container">
                <h1>Login</h1>
                <Input class="formput" place="Nome"/>
                <Input class="formput" place="Email"/>
                <Input class="formput" place="Senha"/>
                <Input class="formput" place="Repita a Senha"/>
                <Link to="/Cadastro">Cadastro</Link>
            </div>
        </>
    )
}