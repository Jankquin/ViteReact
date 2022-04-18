import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Tb_Similar = () => {
    const [_Post, set_Post] = useState([]); 
    const {id} = useParams();

    useEffect(() => {
        const QPost = query(collection(db, "Tb_Posts"), orderBy("id", "desc"), limit("10"));
        const FirstLoadAsync    = async () => {       
            const DPost         = await getDocs(QPost);     
            const Data          = DPost.docs.map((doc) => ({ ...doc.data()}));
            const DataPost      = Data.find(doc => doc.id == id);
            if(DataPost){
                set_Post(DataPost.title);
            }else{
                set_Post('Not Found');
            }
        };

        FirstLoadAsync();
    }, []);

    return {_Post}
}

export default Tb_Similar;