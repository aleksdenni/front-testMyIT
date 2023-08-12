import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Header from "./sections/Header";
import Footer from "./sections/Footer";


function App() {


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
