import { Sinput } from "./Sinput.style";
interface Props{
    place:string;
    f: CallableFunction;
}

export default function Input(props:Props){
    return(
        <>  
            <Sinput placeholder={props.place} onChange={(e) => props.f(e.target.value)}/>
        </>
    )
}