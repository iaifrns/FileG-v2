import { Route, Routes as RouteList } from "react-router-dom"
import UploadPage from "../pages/uploadPage"
import MainLayout from "../layouts/MainLayout"

const Routes = () => {
    return (
        <RouteList >
            <Route path="/" element={<MainLayout/>}>
            <Route index element={<UploadPage/>} ></Route>
            </Route>
        </RouteList>
    )
}

export default Routes