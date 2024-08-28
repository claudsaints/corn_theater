import { ThreeDot } from "react-loading-indicators";
import { Saling } from "../Salign/Salign.styles";



export default function Loading (){
    return(
        <Saling>
            <ThreeDot color="#1a1a1a" size="medium" text="CARREGANDO" textColor="#1a1a1a" />
        </Saling>   
    )

}