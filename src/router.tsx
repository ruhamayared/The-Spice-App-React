import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { IndexLoader, ShowLoader } from "./loaders"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={IndexLoader}/>
            <Route path="spice/:id" element={<Show/>} loader={ShowLoader}/>
            <Route path="create"/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>
        </Route>
    </>
))

export default router