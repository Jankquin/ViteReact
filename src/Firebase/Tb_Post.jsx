import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Tb_Post = () => {
    const [UsePost, setUsePost] = useState([]); 
    const [UseMostView, setUseMostView] = useState([]); 
    const [UseRecomended, setUseRecomended] = useState([]); 

    useEffect(() => {
        const QPost           = query(collection(db, "Tb_Post"), orderBy("Id", "desc"));
        const QMostView       = query(collection(db, "Tb_Post"), orderBy("View", "desc"), limit(10));
        const QRecomended     = query(collection(db, "Tb_Post"), orderBy("Id", "desc"), limit(3));
        
        const FirstLoadAsync  = async () => {       
            const DPost       = await getDocs(QPost);     
            const DMostView   = await getDocs(QMostView);     
            const DRecomended = await getDocs(QRecomended);  

            setUsePost(DPost.docs.map((doc) => ({ ...doc.data()})));
            setUseMostView(DMostView.docs.map((doc) => ({ ...doc.data()})));
            setUseRecomended(DRecomended.docs.map((doc) => ({ ...doc.data()})));
        };

        FirstLoadAsync();
    }, []);

    return {UsePost, UseMostView, UseRecomended}
}

export default Tb_Post;