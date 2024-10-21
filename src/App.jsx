import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Deals from "./pages/Deals";
import Signin from "./pages/signin";
import Display from "./pages/display";
import Editdata from "./pages/editdata";
import Search from "./pages/search";

const App=()=>{
    return(
        <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="deals" element={<Deals/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="signin" element={<Signin/>}/>
        <Route path="display" element={<Display/>} />
        <Route path="editrec/:myid" element={<Editdata/>} />

          </Route>
    </Routes>
    </BrowserRouter>
        </>
    )
}
export default App;