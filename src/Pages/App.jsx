import { useState } from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
import Hentai from "./Hentai/Hentai";
import HentaiPlay from "./Hentai/HentaiPlay";
import Manga from "./Manga/Manga";
import MangaDetail from "./Manga/MangaInfo";

import { db } from "../Firebase/Config";
import { Timestamp, doc, setDoc, collection } from "firebase/firestore";


function App() {
    // const Data      = doc(collection(db, "Tb_Hentai"));
    // setDoc(Data, { 
    //     Id         : 3,
    //     Type       : 'Hentai',
    //     Title      : 'Onii-chan, Asa made Zutto Gyutte Shite! 4',
    //     Slug       : 'Onii-chan,Asa-made-Zutto-Gyutte-Shite!-4',
    //     Brand      : 'Queen Bee',
    //     Genre      : ['Anal', 'School'],
    //     Image      : 'https://194.233.66.232/wp-content/uploads/2020/09/Screenshot_9.png',
    //     Embed      : 'https://dood.pm/e/bhcpbl5tad574vacp7iphb9vzx4ghxra',
    //     Download   : 'https://hanime.tv/search',
    //     View       : 13123,
    //     Draft      : false,
    //     Report     : false,
    //     Released   : Timestamp.fromDate(new Date()), 
    //     Created_At : Timestamp.fromDate(new Date()), 
    //     Updated_At : Timestamp.fromDate(new Date()), 
    // });

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hentai" element={<Hentai />} />
                <Route path="/hentai/:Slug" element={<HentaiPlay />} />
                <Route path="/manga" element={<Manga />} />
                <Route path="/MangaDetail" element={<MangaDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
