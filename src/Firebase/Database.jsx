import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Database = () => {
    const {id} = useParams();

    const [Tb_Manga, setTb_Manga] = useState([]); 
    
    const [UseDataPost, setUseDataPost] = useState([]); 
    const [UseDataCarousel, setUseDataCarousel] = useState([]); 
    const [UseDataNewRelease, setUseDataNewRelease] = useState([]); 
    const [UseDataPopular, setUseDataPopular] = useState([]); 
    const [UseDataSimilar, setUseDataSimilar] = useState([]); 
    
    

    useEffect(() => {
        const Tb_Manga_Post      = query(collection(db, "Tb_Manga"), orderBy("Id", "desc"));
        const QuerryDataPost     = query(collection(db, "Tb_Post"), orderBy("Id", "desc"));
        const QuerryDataCarousel = query(collection(db, "Tb_Post"), orderBy("Id", "desc"), limit(8));
        const QuerryNewRelease   = query(collection(db, "Tb_Post"), orderBy("Release", "desc"), limit(8));
        const QuerryDataPopular  = query(collection(db, "Tb_Post"), orderBy("View", "desc"), limit(8));

        const FirstLoadAsync        = async () => {       
            const Tb_Manga_DataPost = await getDocs(Tb_Manga_Post);     
            const DataPost          = await getDocs(QuerryDataPost);     
            const DataCarousel      = await getDocs(QuerryDataCarousel); 
            const DataNewRelease    = await getDocs(QuerryNewRelease);  
            const DataPopular       = await getDocs(QuerryDataPopular);     
            const DataPostDetail    = DataPost.docs.map((doc) => ({ ...doc.data()})).find(doc => doc.Id == id)

            setTb_Manga(Tb_Manga_DataPost.docs.map((doc) => ({ ...doc.data()})));
            setUseDataPost(DataPost.docs.map((doc) => ({ ...doc.data()})));
            setUseDataCarousel(DataCarousel.docs.map((doc) => ({ ...doc.data()})));
            setUseDataNewRelease(DataNewRelease.docs.map((doc) => ({ ...doc.data()})));
            setUseDataPopular(DataPopular.docs.map((doc) => ({ ...doc.data()})));

            if(DataPostDetail){
                const Data       = DataPostDetail.Title
                const DataSplit  = Data.split(" ")
                
                if(DataSplit.length <= 3){
                    const DataSplit3 = Data.split(" ", 1)
                    const DataSplitFinal = DataSplit3.toString()
                    setUseDataSimilar(DataSplitFinal);
                }else{
                    const DataSplit3 = Data.split(" ", 2)
                    const DataSplitFinal = DataSplit3.toString().split(",").join(" ")
                    setUseDataSimilar(DataSplitFinal);
                }
            }else{
                setUseDataSimilar('Not Found');
            }
        };

        FirstLoadAsync();
    }, []);

    return {UseDataPost, UseDataCarousel, UseDataNewRelease, UseDataPopular, UseDataSimilar, Tb_Manga}
}

export default Database;