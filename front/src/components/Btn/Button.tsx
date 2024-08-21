import { Link } from "react-router-dom";



interface Props{
    word:string;
}

export default function Button(props:Props){

    return(
        <>
            <button className="btn"><Link to='/Login'>{props.word}</Link> </button>
        </>
    )
}