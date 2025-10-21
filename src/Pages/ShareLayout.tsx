import { Outlet } from "react-router-dom"
import MainSlider from "../Components/MainSlider/MainSlider";



const SharedLayout = () => {
    return (
        <>
            <MainSlider />
            <Outlet />
        </>
    )
}


export default SharedLayout;