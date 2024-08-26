import { Link } from "react-router-dom";
import { Sbutton } from "../components/Btn/Sbutton.style";
import Logo from "../components/Logo/Logo";

export default function Welcome() {
  return (
    <>
        
    
      <h1>Welcome</h1>
      <h2>Corn Teether</h2>
      <Logo />

      <Sbutton>
        <Link to="/Login">Vamos Lá</Link>
      </Sbutton>
    </>
  );
}
