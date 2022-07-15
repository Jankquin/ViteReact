import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./Config";

const Database = () => {
    const {id} = useParams();
    const [Tb_Auth, setTb_Auth] = useState([]); 
    const [Tb_Hentai, setTb_Hentai] = useState([]); 
    const [Tb_Manga, setTb_Manga] = useState([]); 
    const [Tb_AsianNude, setTb_AsianNude] = useState([]); 

    useEffect(() => {
        const Tb_Auth_Post       = query(collection(db, "Tb_Auth"), orderBy("Id", "desc"));
        const Tb_Hentai_Post     = query(collection(db, "Tb_Hentai"), orderBy("Id", "desc"));
        const Tb_Manga_Post      = query(collection(db, "Tb_Manga"), orderBy("Id", "desc"));
        const Tb_AsianNude_Post  = query(collection(db, "Tb_AsianNude"), orderBy("Id", "desc"));

        const FirstLoadAsync            = async () => {       
            const Tb_Auth_Data          = await getDocs(Tb_Auth_Post);     
            const Tb_Hentai_DataPost    = await getDocs(Tb_Hentai_Post);     
            const Tb_Manga_DataPost     = await getDocs(Tb_Manga_Post);     
            const Tb_AsianNude_DataPost = await getDocs(Tb_AsianNude_Post);     

            setTb_Auth(Tb_Auth_Data.docs.map((doc) => ({ ...doc.data()})));
            setTb_Hentai(Tb_Hentai_DataPost.docs.map((doc) => ({ ...doc.data()})));
            setTb_Manga(Tb_Manga_DataPost.docs.map((doc) => ({ ...doc.data()})));
            setTb_AsianNude(Tb_AsianNude_DataPost.docs.map((doc) => ({ ...doc.data()})));
        };

        FirstLoadAsync();
    }, []);

    return {Tb_Auth, Tb_Hentai, Tb_Manga, Tb_AsianNude}
}

export default Database;