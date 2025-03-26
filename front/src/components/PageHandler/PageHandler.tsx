import { useContext } from "react";
import { ContextoHome } from "../../contexts/contextHome";
import { IoArrowBack,IoArrowForward  } from "react-icons/io5";
import { Button } from "../Btn/Button.style";
import { Saling } from "../Salign/Salign.styles";
export default function PageHandler(){
    const {page,setPage} = useContext(ContextoHome);
  
    return(
        <>
            <Saling direction="row">
                <Button hcolor="rgb(0, 128, 255)" bgcolor="white" onClick={() => {
                    if(page === 1) return;
                    setPage(page-1)
                }}>
                    <IoArrowBack size={20}/>
                </Button>
                {page}
                <Button hcolor="rgb(0, 128, 255)" bgcolor="white" onClick={() => {
                    if(page === 20) return;
                    setPage(page+1)
                }}
                
                >
                    <IoArrowForward size={20}/>
                </Button>
            </Saling>
        </>
    )
}