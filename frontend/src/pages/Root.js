import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    return ( <div style={{backgroundImage: `url(/img/background.png)`, backgroundSize: "cover", width: "100%", height: "100vh"}}>
    <MainNavigation/>
    <main>
    <Outlet/>
    </main>
    </div>);

}

export default RootLayout;