import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import IncNavbar from "./Components/IncNavbar";
import IncFooter from "./Components/IncFooter";
import PagePost from "./Pages/PagePost";
import PostDetail from "./Pages/PostDetail";
import AdminPanel from "./Pages/AdminPanel";
import PageRecomended from "./Pages/PageRecomended";
import PageMostView from "./Pages/PageMostView";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <IncNavbar />

                <div className="container mx-auto mt-28 px-3 py-5">
                    <div className="flex justify-center mb-10">
                        <div className="lg:basis-5/12 md:basis-8/12 basis-full">
                            <Routes>
                                <Route path="/" element={<PagePost  />} />
                                <Route path="/:id" element={<PostDetail />} />
                                <Route path="/admin" element={<AdminPanel />} />
                                <Route path="/recomended" element={<PageRecomended />} />
                                <Route path="/mostview" element={<PageMostView />} />
                            </Routes>
                        </div>
                    </div>
                </div>

                <IncFooter />
            </BrowserRouter>
        </>
    )
}

export default App