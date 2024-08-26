import { ThreeDot } from "react-loading-indicators";
import { Saling } from "../Salign/Salign.styles";



export default function Loading (){
    return(
        <Saling>
            <ThreeDot color="#4e72fe" size="medium" text="CARREGANDO" textColor="#4d92ff" />
        </Saling>   
    )

}