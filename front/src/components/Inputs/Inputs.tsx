
interface Props{
    place:string;
    class:string;
}

export default function Input(props:Props){
    return(
        <>
            <input className={props.class} placeholder={props.place}/>
        </>
    )
}