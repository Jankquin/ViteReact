import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import IncFooter from "./Components/IncFooter";
import PagePost from "./Pages/PagePost";
import PostDetail from "./Pages/PostDetail";
import PageMore from "./Pages/PageMore";
import PageMostView from "./Pages/PageMostView";
import IncNavbar from "./Components/IncNavbar";

import Manga from "./Pages/Manga/Manga";
import MangaDetail from "./Pages/Manga/MangaDetail";
import MangaRead from "./Pages/Manga/MangaRead";

import Asian from "./Pages/Asian/Asian";
import AsianDetail from "./Pages/Asian/AsianDetail";
import AsianRead from "./Pages/Asian/AsianRead";

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

                    <Route path="/manga" element={<Manga />} />
                    <Route path="/manga/:id" element={<MangaDetail />} />
                    <Route path="/manga/:id/:title" element={<MangaRead />} />
                    
                    <Route path="/asian" element={<Asian />} />
                    <Route path="/asian/:id" element={<AsianDetail />} />
                    <Route path="/asian/:id/:title" element={<AsianRead />} />
                </Routes>
                
                {/* <IncFooter /> */}
            </BrowserRouter>
        </>
    )
}

export default App