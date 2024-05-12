import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import MainPage from "./pages/mainpage/MainPage.tsx";
import FunnelPage from "./pages/funnelpage/FunnelPage.tsx";

function App() {
    return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="/:id" element={<FunnelPage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
