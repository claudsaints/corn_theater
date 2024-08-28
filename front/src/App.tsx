import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Welcome,Login,Cadastro,Home,Search,Movie,Profile} from './pages/index'
import { HomeItens } from "./contexts/contextHome"

export default function App(){
    return(
      <HomeItens>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Cadastro' element={<Cadastro/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Search/:query' element={<Search/>}/>
                <Route path='/Movie/:id' element={<Movie/>}/>
                <Route path='/Profile' element={<Profile/>}/>               
            </Routes>
        </BrowserRouter>
      </HomeItens>
    )
}