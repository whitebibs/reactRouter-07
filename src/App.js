import {Routes, Route} from "react-router-dom"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import {ShowGithubUser} from "./ShowGithubUser"
import {PageNotFound} from "./NotFound"

export function App() {
  return (
<Routes>
  <Route path="/" element={<Welcome name="Bianca"/>}/>
  <Route path="/counter" element={<Counter/>}/>
  <Route path = "*" element= {<PageNotFound/>} />
  <Route index element={<ShowGithubUser/>}/>
</Routes>
  
  )
}

//<Route path = "*" element={<Navigate to="/counter"/>}/>
