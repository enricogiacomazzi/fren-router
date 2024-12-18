import { Outlet } from "react-router"



export const HomeLayout = () => {


    return (
        <div className="home-layout">
            <h1>home layout</h1>
            <Outlet/>
        </div>
    )
}