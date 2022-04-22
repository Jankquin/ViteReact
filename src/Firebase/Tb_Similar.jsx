import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Tb_Similar = () => {
    const [UseSimilar, setUseSimilar] = useState([]); 
    const {id} = useParams();

    useEffect(() => {
        const QPost = query(collection(db, "Tb_Post"), orderBy("Id", "desc"), limit("10"));
        const FirstLoadAsync    = async () => {       
            const DPost         = await getDocs(QPost);     
            const Data          = DPost.docs.map((doc) => ({ ...doc.data()}));
            const DataPost      = Data.find(doc => doc.Id == id);
            if(DataPost){
                setUseSimilar(DataPost.Title);
            }else{
                setUseSimilar('Not Found');
            }
        };

        FirstLoadAsync();
    }, []);

    return {UseSimilar}
}

export default Tb_Similar;