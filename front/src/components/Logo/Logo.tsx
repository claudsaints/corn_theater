import { Link } from "react-router-dom";


export default function Logo(){
    return(
        <Link to='/Home'>
            <img className="logo" src="../file.png"></img>
        </Link>
    )
}