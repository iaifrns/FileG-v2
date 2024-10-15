import { Route, Routes as RouteList } from "react-router-dom"
import UploadPage from "../pages/uploadPage"

const Routes = () => {
    return (
        <RouteList >
            <Route path="/" element={<UploadPage/>} ></Route>
        </RouteList>
    )
}

export default Routes