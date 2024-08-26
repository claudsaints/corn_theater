import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home.tsx'
import Movie from './pages/Movie.tsx'
import Login from "./pages/Login.tsx"
import Cadastro from "./pages/Cadastro.tsx"
import Profile from './pages/Profile.tsx'
import Welcome from './pages/Welcome.tsx'
import Search from "./pages/Search.tsx"

export default function AppRoutes(){
    return(
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
    )
}