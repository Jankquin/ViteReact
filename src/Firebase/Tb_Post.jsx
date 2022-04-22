import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Tb_Post = () => {
    const [UsePost, setUsePost] = useState([]); 

    useEffect(() => {
        const QPost = query(collection(db, "Tb_Post"), orderBy("Id", "desc"));
        const FirstLoadAsync = async () => {       
            const DPost = await getDocs(QPost);     
            setUsePost(DPost.docs.map((doc) => ({ ...doc.data()})));
        };

        FirstLoadAsync();
    }, []);

    return {UsePost}
}

export default Tb_Post;