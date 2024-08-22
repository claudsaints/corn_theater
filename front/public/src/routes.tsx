import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home.tsx'
import Movie from './pages/Movie.tsx'
import Search from './pages/Search.tsx'
import Login from "./pages/Login.tsx"
import Cadastro from "./pages/Cadastro.tsx"
export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Cadastro' element={<Cadastro/>}/>
                <Route path='/Movie' element={<Movie/>}/>
                <Route path='/Search' element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    )
}