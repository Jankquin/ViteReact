import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Tb_Post = () => {
    const [UsePost, setUsePost] = useState([]); 
    const [UseMostView, setUseMostView] = useState([]); 

    useEffect(() => {
        const QPost     = query(collection(db, "Tb_Post"), orderBy("Id", "desc"));
        const QMostView = query(collection(db, "Tb_Post"), orderBy("View", "desc"), limit(10));
        
        const FirstLoadAsync = async () => {       
            const DPost      = await getDocs(QPost);     
            const DPosts     = await getDocs(QMostView);     
            setUsePost(DPost.docs.map((doc) => ({ ...doc.data()})));
            setUseMostView(DPosts.docs.map((doc) => ({ ...doc.data()})));
        };

        FirstLoadAsync();
    }, []);

    return {UsePost, UseMostView}
}

export default Tb_Post;