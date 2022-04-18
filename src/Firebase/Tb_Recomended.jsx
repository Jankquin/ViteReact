import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Tb_Post = () => {
    const [UseRecomended, setUseRecomended] = useState([]); 

    useEffect(() => {
        const QPost = query(collection(db, "Tb_Posts"), orderBy("id", "desc"), limit("1"));
        const FirstLoadAsync = async () => {       
            const DPost = await getDocs(QPost);     
            setUseRecomended(DPost.docs.map((doc) => ({ ...doc.data()})));
        };

        FirstLoadAsync();
    }, []);

    return {UseRecomended}
}

export default Tb_Post;