import { Sinput } from "./Sinput.style";
interface Props{
    place:string;
    type:string;
    min:number;
    max:number;
    f: CallableFunction;
}

export default function Input(props:Props){
    return(
        <>  
            <Sinput minLength={props.min} maxLength={props.max} type={props.type} placeholder={props.place} onChange={(e) => props.f(e.target.value)}/>
        </>
    )
}