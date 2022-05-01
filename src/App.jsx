import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import IncFooter from "./Components/IncFooter";
import PagePost from "./Pages/PagePost";
import PostDetail from "./Pages/PostDetail";
import PageMore from "./Pages/PageMore";
import PageMostView from "./Pages/PageMostView";
import IncNavbar from "./Components/IncNavbar";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <IncNavbar />
    
                <Routes>
                    <Route path="/" element={<PagePost  />} />
                    <Route path="/:id" element={<PostDetail />} />
                    <Route path="/more" element={<PageMore />} />
                    <Route path="/mostview" element={<PageMostView />} />
                </Routes>
                
                {/* <IncFooter /> */}
            </BrowserRouter>
        </>
    )
}

export default App