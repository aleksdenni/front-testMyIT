import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Router from "./Components/Router";
import {BrowserRouter} from "react-router-dom";


function App() {


    return (
        <BrowserRouter>
            <Header/>

            <Router/>

            <Footer/>
        </BrowserRouter>
    )
}

export default App
