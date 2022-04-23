import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import IncFooter from "./Components/IncFooter";
import PagePost from "./Pages/PagePost";
import PostDetail from "./Pages/PostDetail";
import PageRecomended from "./Pages/PageRecomended";
import PageMostView from "./Pages/PageMostView";
import IncNavbar from "./Components/IncNavbar";

import PageDashboard from "./Admin/PageDashboard";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <IncNavbar />
    
                <Routes>
                    <Route path="/" element={<PagePost  />} />
                    <Route path="/:id" element={<PostDetail />} />
                    <Route path="/recomended" element={<PageRecomended />} />
                    <Route path="/mostview" element={<PageMostView />} />
                    <Route path="/adminpanel" element={<PageDashboard />} />
                </Routes>
                
                <IncFooter />
            </BrowserRouter>
        </>
    )
}

export default App