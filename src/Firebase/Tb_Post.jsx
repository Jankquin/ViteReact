import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Tb_Post = () => {
    const [UsePost, setUsePost] = useState([]); 
    const [UseMostView, setUseMostView] = useState([]); 
    const [UseRecomended, setUseRecomended] = useState([]); 
    const [UseNewRelease, setUseNewRelease] = useState([]); 

    useEffect(() => {
        const QuerryPost         = query(collection(db, "Tb_Post"), orderBy("Id", "desc"));
        const QuerryMostView     = query(collection(db, "Tb_Post"), orderBy("View", "desc"), limit(8));
        const QuerryRecomended   = query(collection(db, "Tb_Post"), orderBy("Id", "desc"), limit(3));
        const QuerryNewRelease   = query(collection(db, "Tb_Post"), orderBy("Release", "desc"), limit(8));
        
        const FirstLoadAsync     = async () => {       
            const DataPost       = await getDocs(QuerryPost);     
            const DataMostView   = await getDocs(QuerryMostView);     
            const DataRecomended = await getDocs(QuerryRecomended);  
            const DataNewRelease = await getDocs(QuerryNewRelease);  

            setUsePost(DataPost.docs.map((doc) => ({ ...doc.data()})));
            setUseMostView(DataMostView.docs.map((doc) => ({ ...doc.data()})));
            setUseRecomended(DataRecomended.docs.map((doc) => ({ ...doc.data()})));
            setUseNewRelease(DataNewRelease.docs.map((doc) => ({ ...doc.data()})));
        };

        FirstLoadAsync();
    }, []);

    return {UsePost, UseMostView, UseRecomended, UseNewRelease}
}

export default Tb_Post;