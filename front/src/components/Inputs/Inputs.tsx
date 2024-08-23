
interface Props{
    place:string;
    class:string;
    f: CallableFunction;
}

export default function Input(props:Props){
    return(
        <>
            <input className={props.class} placeholder={props.place} onChange={(e) => props.f(e.target.value)}/>
        </>
    )
}