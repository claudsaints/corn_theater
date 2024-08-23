import { FaSearch } from "react-icons/fa";
import Button from '../Btn/Button'
import './nav.css'
import Logo from "../Logo/Logo";
export default function Nav(){
    return(
        <div className='tdiv'>
            <Logo/>
            <form>   
                <button className="search"><FaSearch/></button>
                <input className="put"/>
            </form>
            <Button word="Login"/>
        </div>

    )
}
