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

    if (InputGenre.includes("Ahegao"))       {var Ahegao = true}
    if (InputGenre.includes("Anal"))         {var Anal = true}
    if (InputGenre.includes("BDSM"))         {var BDSM = true}
    if (InputGenre.includes("Big Boobs"))    {var Big_Boobs = true}
    if (InputGenre.includes("Teacher"))      {var Teacher = true}
    if (InputGenre.includes("Glasses"))      {var Glasses = true}
    
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
            image           : InputImage, 
            embed           : InputEmbed, 
            download        : InputDownload, 
            note            : InputNote,
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
                <div className="lg:basis-3/12 bg-neutral-700 p-5">
                    <ul>
                        <li className="mb-5">
                            <h2 className="text-neutral-100 text-2lg font-bold ml-2">VAL</h2>
                        </li>
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
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white">
                                    <div className="mb-10">
                                        

                                        <form action="" className="my-10">
                                            <input className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-1" placeholder="Title" value={InputTitle} onChange={(event) => setInputTitle(event.target.value)} />
                                            
                                            <div className="mb-5">
                                                {InputGenre}
                                            </div>

                                            <div>
                                                <input id="Ahegao" className="hidden" type="checkbox" onClick={(event) => GetGenre("Ahegao")}/>
                                                {Ahegao ?
                                                    <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Ahegao">Ahegao</label>
                                                    :
                                                    <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Ahegao">Ahegao</label>
                                                }

                                                <input id="Anal" className="hidden" type="checkbox" onClick={(event) => GetGenre("Anal")}/>
                                                {Anal ?
                                                    <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Anal">Anal</label>
                                                    :
                                                    <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Anal">Anal</label>
                                                }
                                                <input id="BDSM" className="hidden" type="checkbox" onClick={(event) => GetGenre("BDSM")}/>
                                                {BDSM ?
                                                    <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="BDSM">BDSM</label>
                                                    :
                                                    <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="BDSM">BDSM</label>
                                                }

                                                <input id="Big_Boobs" className="hidden" type="checkbox" onClick={(event) => GetGenre("Big Boobs")}/>
                                                {Big_Boobs ?
                                                    <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Big_Boobs">Big Boobs</label>
                                                    :
                                                    <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Big_Boobs">Big Boobs</label>
                                                }

                                                <input id="Teacher" className="hidden" type="checkbox" onClick={(event) => GetGenre("Teacher")}/>
                                                {Teacher ?
                                                    <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Teacher">Teacher</label>
                                                    :
                                                    <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Teacher">Teacher</label>
                                                }

                                                <input id="Glasses" className="hidden" type="checkbox" onClick={(event) => GetGenre("Glasses")}/>
                                                {Glasses ?
                                                    <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Glasses">Glasses</label>
                                                    :
                                                    <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Glasses">Glasses</label>
                                                }
                                            </div>
                                        </form>
                                        
                                    </div>

                                    
                                    <div className="text-center">
                                        <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => AddPost()}>Add Post</button>
                                        <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => setModal("")}>Cancle</button>
                                    </div>
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
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white text-center">
                                    <form action="" className="my-10">
                                        {Modal[1]} - {Modal[2]}
                                        <input className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-1" value={InputTitle} placeholder="Title" onChange={(event) => setInputTitle(event.target.value)} />
                                    </form>

                                    <input id="Ahegao" className="hidden" type="checkbox" onClick={(event) => GetGenre("Ahegao")}/>

                                    <div>
                                        <input id="Ahegao" className="hidden" type="checkbox" onClick={(event) => GetGenre("Ahegao")}/>
                                        {Ahegao ?
                                            <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Ahegao">Ahegao</label>
                                            :
                                            <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Ahegao">Ahegao</label>
                                        }

                                        <input id="Anal" className="hidden" type="checkbox" onClick={(event) => GetGenre("Anal")}/>
                                        {Anal ?
                                            <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Anal">Anal</label>
                                            :
                                            <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Anal">Anal</label>
                                        }
                                        <input id="BDSM" className="hidden" type="checkbox" onClick={(event) => GetGenre("BDSM")}/>
                                        {BDSM ?
                                            <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="BDSM">BDSM</label>
                                            :
                                            <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="BDSM">BDSM</label>
                                        }

                                        <input id="Big_Boobs" className="hidden" type="checkbox" onClick={(event) => GetGenre("Big Boobs")}/>
                                        {Big_Boobs ?
                                            <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Big_Boobs">Big Boobs</label>
                                            :
                                            <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Big_Boobs">Big Boobs</label>
                                        }

                                        <input id="Teacher" className="hidden" type="checkbox" onClick={(event) => GetGenre("Teacher")}/>
                                        {Teacher ?
                                            <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Teacher">Teacher</label>
                                            :
                                            <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Teacher">Teacher</label>
                                        }

                                        <input id="Glasses" className="hidden" type="checkbox" onClick={(event) => GetGenre("Glasses")}/>
                                        {Glasses ?
                                            <label className="bg-neutral-700 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Glasses">Glasses</label>
                                            :
                                            <label className="hover:bg-neutral-700 bg-neutral-800 cursor-pointer text-xs font-thin uppercase rounded-sm px-3 py-2 mr-1" htmlFor="Glasses">Glasses</label>
                                        }
                                    </div>

                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(event) => UpdateSave(Modal[1])}>Update Post</button>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(event) => setModal([])}>Cancle</button>
                                </div>
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