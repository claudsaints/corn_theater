//import {Link,Outlet} from "react-router-dom"
// function FechApi(){
//   const key = "765cf6ba"
//   const url = `http://www.omdbapi.com/?apikey=${key}&`
//   fetch(url)
//     .then((res) => {
//       const resposta = res.json()
//       console.log(resposta)
//       return <li>{resposta}</li>

//     })
//     .catch((error) => {
//       return console.log(error)

//     })
// }
import { AppRoutes } from "./routes"

export default function App(){
  return(
    <AppRoutes/>
  )
}