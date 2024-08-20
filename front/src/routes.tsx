import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Home from './pages/home.tsx'
import Movie from './pages/Movie.tsx'
import Search from './pages/Search.tsx'
export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Movie' element={<Movie/>}/>
                <Route path='/Search' element={<Search/>}/>
 
            </Routes>
        </BrowserRouter>
    )
}