import { useState, useEffect } from "react";
import Logo from "../Assets/Logo.svg";
import { db } from "../Firebase/Config";
import { collection, Timestamp, getDocs, query, orderBy, doc, setDoc, limit, deleteDoc } from "firebase/firestore";

const PageDashboard = () => {

    // Panel Dashboard
    const [Panel, setPanel] = useState("Valonime")
    const [Modal, setModal] = useState("")

    // View Function
    const [Posts, setPosts] = useState([]); 
    useEffect(() => {
        const GetPosts = query(collection(db, "Tb_Post"), orderBy("Id", "desc"));
        const GetPostsAsync = async () => {
            const DataPosts = await getDocs(GetPosts);
            setPosts(DataPosts.docs.map((doc) => ({ ...doc.data() })));
        };
        GetPostsAsync();
    }, []);
    
    // Post Function
    const [InputId, setInputId] = useState("");
    const [InputTitle, setInputTitle] = useState("");
    const [InputGenre, setInputGenre] = useState([])
    const [InputImage, setInputImage] = useState("");
    const [InputDownload, setInputDownload] = useState("");
    const [InputEmbed, setInputEmbed] = useState("");
    const [InputNote, setInputNote] = useState("");

    if (InputGenre.includes("Ahegao"))          {var Ahegao = true}
    if (InputGenre.includes("Anal"))            {var Anal = true}
    if (InputGenre.includes("BDSM"))            {var BDSM = true}
    if (InputGenre.includes("BigBoobs"))        {var BigBoobs = true}
    if (InputGenre.includes("BlowJob"))         {var BlowJob = true}
    if (InputGenre.includes("Bondage"))         {var Bondage = true}
    if (InputGenre.includes("BoobJob"))         {var BoobJob = true}
    if (InputGenre.includes("Censored"))        {var Censored = true}
    if (InputGenre.includes("Comedy"))          {var Comedy = true}
    if (InputGenre.includes("Cosplay"))         {var Cosplay = true}
    if (InputGenre.includes("Creampie"))        {var Creampie = true}
    if (InputGenre.includes("DarkSkin"))        {var DarkSkin = true}
    if (InputGenre.includes("Facial"))          {var Facial = true}
    if (InputGenre.includes("Fantasy"))         {var Fantasy = true}
    if (InputGenre.includes("Filmed"))          {var Filmed = true}
    if (InputGenre.includes("FootJob"))         {var FootJob = true}
    if (InputGenre.includes("Futanari"))        {var Futanari = true}
    if (InputGenre.includes("Gangbang"))        {var Gangbang = true}
    if (InputGenre.includes("Glasses"))         {var Glasses = true}
    if (InputGenre.includes("HandJob"))         {var HandJob = true}
    if (InputGenre.includes("Harem"))           {var Harem = true}
    if (InputGenre.includes("HD"))              {var HD = true}
    if (InputGenre.includes("Horror"))          {var Horror = true}
    if (InputGenre.includes("Incest"))          {var Incest = true}
    if (InputGenre.includes("Inflation"))       {var Inflation = true}
    if (InputGenre.includes("Lactation"))       {var Lactation = true}
    if (InputGenre.includes("Loli"))            {var Loli = true}
    if (InputGenre.includes("Maid"))            {var Maid = true}
    if (InputGenre.includes("Masturbation"))    {var Masturbation = true}
    if (InputGenre.includes("Milf"))            {var Milf = true}
    if (InputGenre.includes("MindBreak"))       {var MindBreak = true}
    if (InputGenre.includes("MindControl"))     {var MindControl = true}
    if (InputGenre.includes("Monster"))         {var Monster = true}
    if (InputGenre.includes("Nekomimi"))        {var Nekomimi = true}
    if (InputGenre.includes("NTR"))             {var NTR = true}
    if (InputGenre.includes("Nurse"))           {var Nurse = true}
    if (InputGenre.includes("Orgy"))            {var Orgy = true}
    if (InputGenre.includes("Plot"))            {var Plot = true}
    if (InputGenre.includes("POV"))             {var POV = true}
    if (InputGenre.includes("Pregnant"))        {var Pregnant = true}
    if (InputGenre.includes("PublicSex"))       {var PublicSex = true}
    if (InputGenre.includes("Rape"))            {var Rape = true}
    if (InputGenre.includes("ReveseRape"))      {var ReveseRape = true}
    if (InputGenre.includes("RimJob"))          {var RimJob = true}
    if (InputGenre.includes("Scat"))            {var Scat = true}
    if (InputGenre.includes("SchoolGirl"))      {var SchoolGirl = true}
    if (InputGenre.includes("Shota"))           {var Shota = true}
    if (InputGenre.includes("Softcore"))        {var Softcore = true}
    if (InputGenre.includes("Swimsuit"))        {var Swimsuit = true}
    if (InputGenre.includes("Teacher"))         {var Teacher = true}
    if (InputGenre.includes("Tentacle"))        {var Tentacle = true}
    if (InputGenre.includes("Threesome"))       {var Threesome = true}
    if (InputGenre.includes("Toys"))            {var Toys = true}
    if (InputGenre.includes("Trap"))            {var Trap = true}
    if (InputGenre.includes("Tsundere"))        {var Tsundere = true}
    if (InputGenre.includes("UglyBastard"))     {var UglyBastard = true}
    if (InputGenre.includes("Uncensored"))      {var Uncensored = true}
    if (InputGenre.includes("Vanilla"))         {var Vanilla = true}
    if (InputGenre.includes("Virgin"))          {var Virgin = true}
    if (InputGenre.includes("Watersports"))     {var Watersports = true}
    if (InputGenre.includes("XRay"))            {var XRay = true}
    if (InputGenre.includes("Yaoi"))            {var Yaoi = true}
    if (InputGenre.includes("Yuri"))            {var Yuri = true}
    
    // Add Id
    const GetId = query(collection(db, "Tb_Post"), orderBy("Id", "desc"), limit(1));
    const GetIdAsync = async () => {
        const DataId = await getDocs(GetId);
        DataId.forEach((doc) => {
            if(DataId){
                setInputId(doc.data().Id * 1 + 1)
            }else{
                
            }
        })
    };
    GetIdAsync();

    // Add genre
    const GetGenre  = (event) => {
        const Check = InputGenre.includes(event) 
        if(Check){
            setInputGenre(InputGenre.filter(doc => doc !== event));
        }else{
            setInputGenre( arr => [...arr, `${event}`]);
        }
    }

    // Add Post
    const AddPost = () => {
        if(InputId){
            var id = InputId;
        }else{
            var id = 0;
        }

        // console.log(InputId)
        const Data = doc(db, 'Tb_Post', `${id}`);

        setDoc(Data, { 
            Id              : id, 
            Title           : InputTitle, 
            Genre           : InputGenre, 
            Image           : InputImage, 
            Embed           : InputEmbed, 
            Download        : InputDownload, 
            Note            : InputNote,
            View            : Math.floor(Math.random() * 1000) + 300,
            CreatedAt       : Timestamp.fromDate(new Date()), 
            UpdatedAt       : Timestamp.fromDate(new Date()), 
        });

        setModal("")
        setInputTitle("")
        setInputGenre([])
    }

    // Update Function    
    const UpdatePost = (event) => {
        setModal(event)
        setInputTitle(event[2])
        setInputGenre(event[3])
    }  

    const UpdateSave = (event) => {
        const Data = doc(db, 'Tb_Post', `${event}`);
        setDoc(Data, { 
            Id              : `${event}`, 
            Title           : InputTitle, 
            Genre           : InputGenre, 
            Image           : InputImage, 
            Embed           : InputEmbed, 
            Download        : InputDownload, 
            Note            : InputNote,
            View            : Math.floor(Math.random() * 1000) + 300,
            CreatedAt       : Timestamp.fromDate(new Date()), 
            UpdatedAt       : Timestamp.fromDate(new Date()),
        });
        setModal("")
    }

    // Delete Function
    const DeletePost = (event) => {
        const Data = deleteDoc(doc(db, "Tb_Post", `${event}`));
        setModal(['']);
    }


    const css = `
    body {
        overflow: hidden;
    }
`

    return (
        <>
            <div className="flex h-screen">
                <div className="lg:basis-3/12 md:basis-4/12 md:block hidden bg-neutral-700 p-5">
                    <ul>
                        <li>
                            <button className="flex hover:bg-neutral-800/40 rounded-sm px-3 py-2.5 w-full" onClick={(event) => setPanel("Valonime")}>
                                <img src={Logo} alt="Logo" width={'16'} className="self-center" />
                                <h3 className="text-neutral-100 font-medium self-center ml-3">Valonime</h3>
                            </button>
                        </li>
                        <li>
                            <button className="flex hover:bg-neutral-800/40 rounded-sm px-3 py-2.5 w-full" onClick={(event) => setPanel("Site2")}>
                                <img src={Logo} alt="Logo" width={'16'} className="self-center" />
                                <h3 className="text-neutral-100 font-medium self-center ml-3">Asian Sister</h3>
                            </button>
                        </li>
                    </ul>
                </div>


                <div className="lg:basis-9/12 bg-neutral-700 p-5">
                    {Panel == 'Valonime' && 
                        <>
                            <div className="mb-10">
                                <button className="hover:bg-neutral-800 focus:bg-neutral-800 bg-neutral-700 text-white font-medium text-xs uppercase rounded-sm mx-auto px-6 py-2.5 mt-3" type="button" onClick={(event) => setModal('AddPost')}>Add Post</button>
                                <button className="hover:bg-neutral-800 focus:bg-neutral-800 bg-neutral-700 text-white font-medium text-xs uppercase rounded-sm mx-auto px-6 py-2.5 mt-3" type="button" onClick={(event) => setModal('AddPost')}>Broken Link</button>
                            </div>

                            <div className="grid grid-cols-2 gap-1 mb-10">
                                {Posts.map((doc) => {
                                    return (
                                        <div key={doc.Id} className="bg-neutral-800/40 rounded-sm p-3">
                                            <div className="flex justify-between">
                                                <h1 className="self-center text-white text-sm font-thin">{doc.Title}</h1>
                                                <div>
                                                    <button className="hover:bg-neutral-700 self-center rounded-sm text-xs px-2 py-1 mx-1" onClick={(event) => UpdatePost(['UpdatePost', doc.Id, doc.Title, doc.Genre])}>
                                                        <i className="bi-plus text-xl text-white"></i>
                                                    </button>
                                                    <button className="hover:bg-neutral-700 self-center rounded-sm text-xs px-2 py-1 mx-1" onClick={(event) => setModal(['DeletePost', doc.Id, doc.Title])}>
                                                        <i className="bi-x text-xl text-white"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    }

                    {Panel == 'Site2' && 
                        <div>
                            Site2
                        </div>
                    }
                </div>
            </div>

            {Modal == "AddPost"  &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="lg:w-5/12 md:w-8/12 w-full text-white text-center mx-auto">
                                <form action="" className="my-10">
                                    <input className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-10" placeholder="Title" value={InputTitle} onChange={(event) => setInputTitle(event.target.value)} />

                                    <div className="">
                                        <input id="Ahegao" className="hidden" type="checkbox" onClick={(event) => GetGenre("Ahegao")}/>
                                        {Ahegao ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Ahegao">Ahegao</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Ahegao">Ahegao</label>
                                        }

                                        <input id="Anal" className="hidden" type="checkbox" onClick={(event) => GetGenre("Anal")}/>
                                        {Anal ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Anal">Anal</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Anal">Anal</label>
                                        }
                                        <input id="BDSM" className="hidden" type="checkbox" onClick={(event) => GetGenre("BDSM")}/>
                                        {BDSM ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BDSM">BDSM</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BDSM">BDSM</label>
                                        }

                                        <input id="BigBoobs" className="hidden" type="checkbox" onClick={(event) => GetGenre("BigBoobs")}/>
                                        {BigBoobs ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BigBoobs">BigBoobs</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BigBoobs">BigBoobs</label>
                                        }

                                        <input id="BlowJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("BlowJob")}/>
                                        {BlowJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BlowJob">BlowJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BlowJob">BlowJob</label>
                                        }

                                        <input id="Bondage" className="hidden" type="checkbox" onClick={(event) => GetGenre("Bondage")}/>
                                        {Bondage ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Bondage">Bondage</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Bondage">Bondage</label>
                                        }

                                        <input id="BoobJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("BoobJob")}/>
                                        {BoobJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BoobJob">BoobJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BoobJob">BoobJob</label>
                                        }

                                        <input id="Censored" className="hidden" type="checkbox" onClick={(event) => GetGenre("Censored")}/>
                                        {Censored ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Censored">Censored</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Censored">Censored</label>
                                        }

                                        <input id="Comedy" className="hidden" type="checkbox" onClick={(event) => GetGenre("Comedy")}/>
                                        {Comedy ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Comedy">Comedy</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Comedy">Comedy</label>
                                        }

                                        <input id="Cosplay" className="hidden" type="checkbox" onClick={(event) => GetGenre("Cosplay")}/>
                                        {Cosplay ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Cosplay">Cosplay</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Cosplay">Cosplay</label>
                                        }

                                        <input id="Creampie" className="hidden" type="checkbox" onClick={(event) => GetGenre("Creampie")}/>
                                        {Creampie ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Creampie">Creampie</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Creampie">Creampie</label>
                                        }

                                        <input id="DarkSkin" className="hidden" type="checkbox" onClick={(event) => GetGenre("DarkSkin")}/>
                                        {DarkSkin ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="DarkSkin">DarkSkin</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="DarkSkin">DarkSkin</label>
                                        }

                                        <input id="Facial" className="hidden" type="checkbox" onClick={(event) => GetGenre("Facial")}/>
                                        {Facial ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Facial">Facial</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Facial">Facial</label>
                                        }

                                        <input id="Fantasy" className="hidden" type="checkbox" onClick={(event) => GetGenre("Fantasy")}/>
                                        {Fantasy ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Fantasy">Fantasy</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Fantasy">Fantasy</label>
                                        }

                                        <input id="Filmed" className="hidden" type="checkbox" onClick={(event) => GetGenre("Filmed")}/>
                                        {Filmed ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Filmed">Filmed</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Filmed">Filmed</label>
                                        }

                                        <input id="FootJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("FootJob")}/>
                                        {FootJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="FootJob">FootJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="FootJob">FootJob</label>
                                        }

                                        <input id="Futanari" className="hidden" type="checkbox" onClick={(event) => GetGenre("Futanari")}/>
                                        {Futanari ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Futanari">Futanari</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Futanari">Futanari</label>
                                        }

                                        <input id="Gangbang" className="hidden" type="checkbox" onClick={(event) => GetGenre("Gangbang")}/>
                                        {Gangbang ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Gangbang">Gangbang</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Gangbang">Gangbang</label>
                                        }

                                        <input id="Glasses" className="hidden" type="checkbox" onClick={(event) => GetGenre("Glasses")}/>
                                        {Glasses ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Glasses">Glasses</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Glasses">Glasses</label>
                                        }

                                        <input id="HandJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("HandJob")}/>
                                        {HandJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="HandJob">HandJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="HandJob">HandJob</label>
                                        }

                                        <input id="Harem" className="hidden" type="checkbox" onClick={(event) => GetGenre("Harem")}/>
                                        {Harem ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Harem">Harem</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Harem">Harem</label>
                                        }

                                        <input id="HD" className="hidden" type="checkbox" onClick={(event) => GetGenre("HD")}/>
                                        {HD ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="HD">HD</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="HD">HD</label>
                                        }

                                        <input id="Horror" className="hidden" type="checkbox" onClick={(event) => GetGenre("Horror")}/>
                                        {Horror ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Horror">Horror</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Horror">Horror</label>
                                        }

                                        <input id="Incest" className="hidden" type="checkbox" onClick={(event) => GetGenre("Incest")}/>
                                        {Incest ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Incest">Incest</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Incest">Incest</label>
                                        }

                                        <input id="Inflation" className="hidden" type="checkbox" onClick={(event) => GetGenre("Inflation")}/>
                                        {Inflation ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Inflation">Inflation</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Inflation">Inflation</label>
                                        }

                                        <input id="Lactation" className="hidden" type="checkbox" onClick={(event) => GetGenre("Lactation")}/>
                                        {Lactation ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Lactation">Lactation</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Lactation">Lactation</label>
                                        }

                                        <input id="Loli" className="hidden" type="checkbox" onClick={(event) => GetGenre("Loli")}/>
                                        {Loli ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Loli">Loli</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Loli">Loli</label>
                                        }

                                        <input id="Maid" className="hidden" type="checkbox" onClick={(event) => GetGenre("Maid")}/>
                                        {Maid ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Maid">Maid</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Maid">Maid</label>
                                        }

                                        <input id="Masturbation" className="hidden" type="checkbox" onClick={(event) => GetGenre("Masturbation")}/>
                                        {Masturbation ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Masturbation">Masturbation</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Masturbation">Masturbation</label>
                                        }

                                        <input id="Milf" className="hidden" type="checkbox" onClick={(event) => GetGenre("Milf")}/>
                                        {Milf ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Milf">Milf</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Milf">Milf</label>
                                        }

                                        <input id="MindBreak" className="hidden" type="checkbox" onClick={(event) => GetGenre("MindBreak")}/>
                                        {MindBreak ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="MindBreak">MindBreak</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="MindBreak">MindBreak</label>
                                        }

                                        <input id="MindControl" className="hidden" type="checkbox" onClick={(event) => GetGenre("MindControl")}/>
                                        {MindControl ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="MindControl">MindControl</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="MindControl">MindControl</label>
                                        }

                                        <input id="Monster" className="hidden" type="checkbox" onClick={(event) => GetGenre("Monster")}/>
                                        {Monster ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Monster">Monster</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Monster">Monster</label>
                                        }

                                        <input id="Nekomimi" className="hidden" type="checkbox" onClick={(event) => GetGenre("Nekomimi")}/>
                                        {Nekomimi ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Nekomimi">Nekomimi</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Nekomimi">Nekomimi</label>
                                        }

                                        <input id="NTR" className="hidden" type="checkbox" onClick={(event) => GetGenre("NTR")}/>
                                        {NTR ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="NTR">NTR</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="NTR">NTR</label>
                                        }

                                        <input id="Nurse" className="hidden" type="checkbox" onClick={(event) => GetGenre("Nurse")}/>
                                        {Nurse ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Nurse">Nurse</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Nurse">Nurse</label>
                                        }

                                        <input id="Orgy" className="hidden" type="checkbox" onClick={(event) => GetGenre("Orgy")}/>
                                        {Orgy ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Orgy">Orgy</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Orgy">Orgy</label>
                                        }

                                        <input id="Plot" className="hidden" type="checkbox" onClick={(event) => GetGenre("Plot")}/>
                                        {Plot ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Plot">Plot</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Plot">Plot</label>
                                        }

                                        <input id="POV" className="hidden" type="checkbox" onClick={(event) => GetGenre("POV")}/>
                                        {POV ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="POV">POV</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="POV">POV</label>
                                        }

                                        <input id="Pregnant" className="hidden" type="checkbox" onClick={(event) => GetGenre("Pregnant")}/>
                                        {Pregnant ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Pregnant">Pregnant</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Pregnant">Pregnant</label>
                                        }

                                        <input id="PublicSex" className="hidden" type="checkbox" onClick={(event) => GetGenre("PublicSex")}/>
                                        {PublicSex ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="PublicSex">PublicSex</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="PublicSex">PublicSex</label>
                                        }

                                        <input id="Rape" className="hidden" type="checkbox" onClick={(event) => GetGenre("Rape")}/>
                                        {Rape ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Rape">Rape</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Rape">Rape</label>
                                        }

                                        <input id="ReveseRape" className="hidden" type="checkbox" onClick={(event) => GetGenre("ReveseRape")}/>
                                        {ReveseRape ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="ReveseRape">ReveseRape</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="ReveseRape">ReveseRape</label>
                                        }

                                        <input id="RimJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("RimJob")}/>
                                        {RimJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="RimJob">RimJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="RimJob">RimJob</label>
                                        }

                                        <input id="Scat" className="hidden" type="checkbox" onClick={(event) => GetGenre("Scat")}/>
                                        {Scat ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Scat">Scat</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Scat">Scat</label>
                                        }

                                        <input id="SchoolGirl" className="hidden" type="checkbox" onClick={(event) => GetGenre("SchoolGirl")}/>
                                        {SchoolGirl ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="SchoolGirl">SchoolGirl</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="SchoolGirl">SchoolGirl</label>
                                        }

                                        <input id="Shota" className="hidden" type="checkbox" onClick={(event) => GetGenre("Shota")}/>
                                        {Shota ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Shota">Shota</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Shota">Shota</label>
                                        }

                                        <input id="Softcore" className="hidden" type="checkbox" onClick={(event) => GetGenre("Softcore")}/>
                                        {Softcore ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Softcore">Softcore</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Softcore">Softcore</label>
                                        }

                                        <input id="Swimsuit" className="hidden" type="checkbox" onClick={(event) => GetGenre("Swimsuit")}/>
                                        {Swimsuit ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Swimsuit">Swimsuit</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Swimsuit">Swimsuit</label>
                                        }

                                        <input id="Teacher" className="hidden" type="checkbox" onClick={(event) => GetGenre("Teacher")}/>
                                        {Teacher ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Teacher">Teacher</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Teacher">Teacher</label>
                                        }

                                        <input id="Tentacle" className="hidden" type="checkbox" onClick={(event) => GetGenre("Tentacle")}/>
                                        {Tentacle ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Tentacle">Tentacle</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Tentacle">Tentacle</label>
                                        }

                                        <input id="Threesome" className="hidden" type="checkbox" onClick={(event) => GetGenre("Threesome")}/>
                                        {Threesome ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Threesome">Threesome</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Threesome">Threesome</label>
                                        }

                                        <input id="Toys" className="hidden" type="checkbox" onClick={(event) => GetGenre("Toys")}/>
                                        {Toys ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Toys">Toys</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Toys">Toys</label>
                                        }

                                        <input id="Trap" className="hidden" type="checkbox" onClick={(event) => GetGenre("Trap")}/>
                                        {Trap ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Trap">Trap</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Trap">Trap</label>
                                        }

                                        <input id="Tsundere" className="hidden" type="checkbox" onClick={(event) => GetGenre("Tsundere")}/>
                                        {Tsundere ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Tsundere">Tsundere</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Tsundere">Tsundere</label>
                                        }

                                        <input id="UglyBastard" className="hidden" type="checkbox" onClick={(event) => GetGenre("UglyBastard")}/>
                                        {UglyBastard ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="UglyBastard">UglyBastard</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="UglyBastard">UglyBastard</label>
                                        }

                                        <input id="Uncensored" className="hidden" type="checkbox" onClick={(event) => GetGenre("Uncensored")}/>
                                        {Uncensored ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Uncensored">Uncensored</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Uncensored">Uncensored</label>
                                        }

                                        <input id="Vanilla" className="hidden" type="checkbox" onClick={(event) => GetGenre("Vanilla")}/>
                                        {Vanilla ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Vanilla">Vanilla</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Vanilla">Vanilla</label>
                                        }

                                        <input id="Virgin" className="hidden" type="checkbox" onClick={(event) => GetGenre("Virgin")}/>
                                        {Virgin ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Virgin">Virgin</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Virgin">Virgin</label>
                                        }

                                        <input id="Watersports" className="hidden" type="checkbox" onClick={(event) => GetGenre("Watersports")}/>
                                        {Watersports ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Watersports">Watersports</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Watersports">Watersports</label>
                                        }

                                        <input id="XRay" className="hidden" type="checkbox" onClick={(event) => GetGenre("XRay")}/>
                                        {XRay ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="XRay">XRay</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="XRay">XRay</label>
                                        }

                                        <input id="Yaoi" className="hidden" type="checkbox" onClick={(event) => GetGenre("Yaoi")}/>
                                        {Yaoi ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Yaoi">Yaoi</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Yaoi">Yaoi</label>
                                        }

                                        <input id="Yuri" className="hidden" type="checkbox" onClick={(event) => GetGenre("Yuri")}/>
                                        {Yuri ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Yuri">Yuri</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Yuri">Yuri</label>
                                        }
                                    </div>
                                </form>
                                
                                <div className="text-center">
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => AddPost()}>Add Post</button>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => setModal("")}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }
          
            {Modal[0] == "UpdatePost"  &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="lg:w-5/12 md:w-8/12 w-full text-white text-center mx-auto">
                                <form action="" className="my-10">
                                    <input className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-10" value={InputTitle} placeholder="Title" onChange={(event) => setInputTitle(event.target.value)} />

                                    <div className="">
                                        <input id="Ahegao" className="hidden" type="checkbox" onClick={(event) => GetGenre("Ahegao")}/>
                                        {Ahegao ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Ahegao">Ahegao</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Ahegao">Ahegao</label>
                                        }

                                        <input id="Anal" className="hidden" type="checkbox" onClick={(event) => GetGenre("Anal")}/>
                                        {Anal ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Anal">Anal</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Anal">Anal</label>
                                        }
                                        <input id="BDSM" className="hidden" type="checkbox" onClick={(event) => GetGenre("BDSM")}/>
                                        {BDSM ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BDSM">BDSM</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BDSM">BDSM</label>
                                        }

                                        <input id="BigBoobs" className="hidden" type="checkbox" onClick={(event) => GetGenre("BigBoobs")}/>
                                        {BigBoobs ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BigBoobs">BigBoobs</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BigBoobs">BigBoobs</label>
                                        }

                                        <input id="BlowJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("BlowJob")}/>
                                        {BlowJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BlowJob">BlowJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BlowJob">BlowJob</label>
                                        }

                                        <input id="Bondage" className="hidden" type="checkbox" onClick={(event) => GetGenre("Bondage")}/>
                                        {Bondage ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Bondage">Bondage</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Bondage">Bondage</label>
                                        }

                                        <input id="BoobJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("BoobJob")}/>
                                        {BoobJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BoobJob">BoobJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="BoobJob">BoobJob</label>
                                        }

                                        <input id="Censored" className="hidden" type="checkbox" onClick={(event) => GetGenre("Censored")}/>
                                        {Censored ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Censored">Censored</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Censored">Censored</label>
                                        }

                                        <input id="Comedy" className="hidden" type="checkbox" onClick={(event) => GetGenre("Comedy")}/>
                                        {Comedy ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Comedy">Comedy</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Comedy">Comedy</label>
                                        }

                                        <input id="Cosplay" className="hidden" type="checkbox" onClick={(event) => GetGenre("Cosplay")}/>
                                        {Cosplay ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Cosplay">Cosplay</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Cosplay">Cosplay</label>
                                        }

                                        <input id="Creampie" className="hidden" type="checkbox" onClick={(event) => GetGenre("Creampie")}/>
                                        {Creampie ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Creampie">Creampie</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Creampie">Creampie</label>
                                        }

                                        <input id="DarkSkin" className="hidden" type="checkbox" onClick={(event) => GetGenre("DarkSkin")}/>
                                        {DarkSkin ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="DarkSkin">DarkSkin</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="DarkSkin">DarkSkin</label>
                                        }

                                        <input id="Facial" className="hidden" type="checkbox" onClick={(event) => GetGenre("Facial")}/>
                                        {Facial ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Facial">Facial</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Facial">Facial</label>
                                        }

                                        <input id="Fantasy" className="hidden" type="checkbox" onClick={(event) => GetGenre("Fantasy")}/>
                                        {Fantasy ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Fantasy">Fantasy</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Fantasy">Fantasy</label>
                                        }

                                        <input id="Filmed" className="hidden" type="checkbox" onClick={(event) => GetGenre("Filmed")}/>
                                        {Filmed ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Filmed">Filmed</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Filmed">Filmed</label>
                                        }

                                        <input id="FootJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("FootJob")}/>
                                        {FootJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="FootJob">FootJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="FootJob">FootJob</label>
                                        }

                                        <input id="Futanari" className="hidden" type="checkbox" onClick={(event) => GetGenre("Futanari")}/>
                                        {Futanari ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Futanari">Futanari</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Futanari">Futanari</label>
                                        }

                                        <input id="Gangbang" className="hidden" type="checkbox" onClick={(event) => GetGenre("Gangbang")}/>
                                        {Gangbang ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Gangbang">Gangbang</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Gangbang">Gangbang</label>
                                        }

                                        <input id="Glasses" className="hidden" type="checkbox" onClick={(event) => GetGenre("Glasses")}/>
                                        {Glasses ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Glasses">Glasses</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Glasses">Glasses</label>
                                        }

                                        <input id="HandJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("HandJob")}/>
                                        {HandJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="HandJob">HandJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="HandJob">HandJob</label>
                                        }

                                        <input id="Harem" className="hidden" type="checkbox" onClick={(event) => GetGenre("Harem")}/>
                                        {Harem ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Harem">Harem</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Harem">Harem</label>
                                        }

                                        <input id="HD" className="hidden" type="checkbox" onClick={(event) => GetGenre("HD")}/>
                                        {HD ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="HD">HD</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="HD">HD</label>
                                        }

                                        <input id="Horror" className="hidden" type="checkbox" onClick={(event) => GetGenre("Horror")}/>
                                        {Horror ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Horror">Horror</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Horror">Horror</label>
                                        }

                                        <input id="Incest" className="hidden" type="checkbox" onClick={(event) => GetGenre("Incest")}/>
                                        {Incest ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Incest">Incest</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Incest">Incest</label>
                                        }

                                        <input id="Inflation" className="hidden" type="checkbox" onClick={(event) => GetGenre("Inflation")}/>
                                        {Inflation ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Inflation">Inflation</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Inflation">Inflation</label>
                                        }

                                        <input id="Lactation" className="hidden" type="checkbox" onClick={(event) => GetGenre("Lactation")}/>
                                        {Lactation ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Lactation">Lactation</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Lactation">Lactation</label>
                                        }

                                        <input id="Loli" className="hidden" type="checkbox" onClick={(event) => GetGenre("Loli")}/>
                                        {Loli ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Loli">Loli</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Loli">Loli</label>
                                        }

                                        <input id="Maid" className="hidden" type="checkbox" onClick={(event) => GetGenre("Maid")}/>
                                        {Maid ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Maid">Maid</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Maid">Maid</label>
                                        }

                                        <input id="Masturbation" className="hidden" type="checkbox" onClick={(event) => GetGenre("Masturbation")}/>
                                        {Masturbation ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Masturbation">Masturbation</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Masturbation">Masturbation</label>
                                        }

                                        <input id="Milf" className="hidden" type="checkbox" onClick={(event) => GetGenre("Milf")}/>
                                        {Milf ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Milf">Milf</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Milf">Milf</label>
                                        }

                                        <input id="MindBreak" className="hidden" type="checkbox" onClick={(event) => GetGenre("MindBreak")}/>
                                        {MindBreak ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="MindBreak">MindBreak</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="MindBreak">MindBreak</label>
                                        }

                                        <input id="MindControl" className="hidden" type="checkbox" onClick={(event) => GetGenre("MindControl")}/>
                                        {MindControl ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="MindControl">MindControl</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="MindControl">MindControl</label>
                                        }

                                        <input id="Monster" className="hidden" type="checkbox" onClick={(event) => GetGenre("Monster")}/>
                                        {Monster ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Monster">Monster</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Monster">Monster</label>
                                        }

                                        <input id="Nekomimi" className="hidden" type="checkbox" onClick={(event) => GetGenre("Nekomimi")}/>
                                        {Nekomimi ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Nekomimi">Nekomimi</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Nekomimi">Nekomimi</label>
                                        }

                                        <input id="NTR" className="hidden" type="checkbox" onClick={(event) => GetGenre("NTR")}/>
                                        {NTR ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="NTR">NTR</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="NTR">NTR</label>
                                        }

                                        <input id="Nurse" className="hidden" type="checkbox" onClick={(event) => GetGenre("Nurse")}/>
                                        {Nurse ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Nurse">Nurse</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Nurse">Nurse</label>
                                        }

                                        <input id="Orgy" className="hidden" type="checkbox" onClick={(event) => GetGenre("Orgy")}/>
                                        {Orgy ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Orgy">Orgy</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Orgy">Orgy</label>
                                        }

                                        <input id="Plot" className="hidden" type="checkbox" onClick={(event) => GetGenre("Plot")}/>
                                        {Plot ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Plot">Plot</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Plot">Plot</label>
                                        }

                                        <input id="POV" className="hidden" type="checkbox" onClick={(event) => GetGenre("POV")}/>
                                        {POV ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="POV">POV</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="POV">POV</label>
                                        }

                                        <input id="Pregnant" className="hidden" type="checkbox" onClick={(event) => GetGenre("Pregnant")}/>
                                        {Pregnant ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Pregnant">Pregnant</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Pregnant">Pregnant</label>
                                        }

                                        <input id="PublicSex" className="hidden" type="checkbox" onClick={(event) => GetGenre("PublicSex")}/>
                                        {PublicSex ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="PublicSex">PublicSex</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="PublicSex">PublicSex</label>
                                        }

                                        <input id="Rape" className="hidden" type="checkbox" onClick={(event) => GetGenre("Rape")}/>
                                        {Rape ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Rape">Rape</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Rape">Rape</label>
                                        }

                                        <input id="ReveseRape" className="hidden" type="checkbox" onClick={(event) => GetGenre("ReveseRape")}/>
                                        {ReveseRape ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="ReveseRape">ReveseRape</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="ReveseRape">ReveseRape</label>
                                        }

                                        <input id="RimJob" className="hidden" type="checkbox" onClick={(event) => GetGenre("RimJob")}/>
                                        {RimJob ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="RimJob">RimJob</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="RimJob">RimJob</label>
                                        }

                                        <input id="Scat" className="hidden" type="checkbox" onClick={(event) => GetGenre("Scat")}/>
                                        {Scat ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Scat">Scat</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Scat">Scat</label>
                                        }

                                        <input id="SchoolGirl" className="hidden" type="checkbox" onClick={(event) => GetGenre("SchoolGirl")}/>
                                        {SchoolGirl ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="SchoolGirl">SchoolGirl</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="SchoolGirl">SchoolGirl</label>
                                        }

                                        <input id="Shota" className="hidden" type="checkbox" onClick={(event) => GetGenre("Shota")}/>
                                        {Shota ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Shota">Shota</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Shota">Shota</label>
                                        }

                                        <input id="Softcore" className="hidden" type="checkbox" onClick={(event) => GetGenre("Softcore")}/>
                                        {Softcore ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Softcore">Softcore</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Softcore">Softcore</label>
                                        }

                                        <input id="Swimsuit" className="hidden" type="checkbox" onClick={(event) => GetGenre("Swimsuit")}/>
                                        {Swimsuit ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Swimsuit">Swimsuit</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Swimsuit">Swimsuit</label>
                                        }

                                        <input id="Teacher" className="hidden" type="checkbox" onClick={(event) => GetGenre("Teacher")}/>
                                        {Teacher ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Teacher">Teacher</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Teacher">Teacher</label>
                                        }

                                        <input id="Tentacle" className="hidden" type="checkbox" onClick={(event) => GetGenre("Tentacle")}/>
                                        {Tentacle ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Tentacle">Tentacle</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Tentacle">Tentacle</label>
                                        }

                                        <input id="Threesome" className="hidden" type="checkbox" onClick={(event) => GetGenre("Threesome")}/>
                                        {Threesome ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Threesome">Threesome</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Threesome">Threesome</label>
                                        }

                                        <input id="Toys" className="hidden" type="checkbox" onClick={(event) => GetGenre("Toys")}/>
                                        {Toys ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Toys">Toys</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Toys">Toys</label>
                                        }

                                        <input id="Trap" className="hidden" type="checkbox" onClick={(event) => GetGenre("Trap")}/>
                                        {Trap ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Trap">Trap</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Trap">Trap</label>
                                        }

                                        <input id="Tsundere" className="hidden" type="checkbox" onClick={(event) => GetGenre("Tsundere")}/>
                                        {Tsundere ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Tsundere">Tsundere</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Tsundere">Tsundere</label>
                                        }

                                        <input id="UglyBastard" className="hidden" type="checkbox" onClick={(event) => GetGenre("UglyBastard")}/>
                                        {UglyBastard ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="UglyBastard">UglyBastard</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="UglyBastard">UglyBastard</label>
                                        }

                                        <input id="Uncensored" className="hidden" type="checkbox" onClick={(event) => GetGenre("Uncensored")}/>
                                        {Uncensored ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Uncensored">Uncensored</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Uncensored">Uncensored</label>
                                        }

                                        <input id="Vanilla" className="hidden" type="checkbox" onClick={(event) => GetGenre("Vanilla")}/>
                                        {Vanilla ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Vanilla">Vanilla</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Vanilla">Vanilla</label>
                                        }

                                        <input id="Virgin" className="hidden" type="checkbox" onClick={(event) => GetGenre("Virgin")}/>
                                        {Virgin ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Virgin">Virgin</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Virgin">Virgin</label>
                                        }

                                        <input id="Watersports" className="hidden" type="checkbox" onClick={(event) => GetGenre("Watersports")}/>
                                        {Watersports ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Watersports">Watersports</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Watersports">Watersports</label>
                                        }

                                        <input id="XRay" className="hidden" type="checkbox" onClick={(event) => GetGenre("XRay")}/>
                                        {XRay ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="XRay">XRay</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="XRay">XRay</label>
                                        }

                                        <input id="Yaoi" className="hidden" type="checkbox" onClick={(event) => GetGenre("Yaoi")}/>
                                        {Yaoi ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Yaoi">Yaoi</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Yaoi">Yaoi</label>
                                        }

                                        <input id="Yuri" className="hidden" type="checkbox" onClick={(event) => GetGenre("Yuri")}/>
                                        {Yuri ?
                                            <label className="bg-neutral-700 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Yuri">Yuri</label>
                                            :
                                            <label className="bg-neutral-800 hover:bg-neutral-900 uppercase inline-block rounded-sm text-xs font-thin px-3 py-2 m-1" htmlFor="Yuri">Yuri</label>
                                        }
                                    </div>
                                </form>

                                <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(event) => UpdateSave(Modal[1])}>Update Post</button>
                                <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(event) => setModal([])}>Cancle</button>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }

            {Modal[0] == "DeletePost"  &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white text-center">
                                    <h1>Delete Post - {Modal[1]}</h1>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(event) => DeletePost(Modal[1])}>Delete Post</button>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(event) => setModal([])}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }
        </>
    )

}


export default PageDashboard;