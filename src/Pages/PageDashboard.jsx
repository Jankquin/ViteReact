import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { collection, Timestamp, getDocs, query, orderBy, doc, setDoc, limit, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/Config";
import Tb_Post from '../Firebase/Tb_Post'

const PageDashboard = () => {

    // View Function
    const [Posts, setPosts] = useState([]); 
    useEffect(() => {
        const GetPosts = query(collection(db, "Tb_Posts"), orderBy("id", "desc"));
        const GetPostsAsync = async () => {
            const DataPosts = await getDocs(GetPosts);
            setPosts(DataPosts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        GetPostsAsync();
    }, []);
  

    // Create Function
    const [ModalPost, setModalPost] = useState(false);
    const [InputId, setInputId] = useState("");
    const [InputTitle, setInputTitle] = useState("");
    const [InputDescription, setInputDescription] = useState("");
    const [InputImage, setInputImage] = useState("");
    const [InputDownload, setInputDownload] = useState("");
    const [InputEmbed, setInputEmbed] = useState("");
    const [InputNote, setInputNote] = useState("");

    const GetId = query(collection(db, "Tb_Posts"), orderBy("id", "desc"), limit(1));
    const GetIdAsync = async () => {
        const DataId = await getDocs(GetId);
        DataId.forEach((doc) => {
            setInputId(doc.data().id * 1 + 1)
        })
    };
    GetIdAsync();

    const AddPosts = () => {
        const Data = doc(db, 'Tb_Posts', InputTitle);
        setDoc(Data, { 
            id          : InputId, 
            title       : InputTitle, 
            description : InputDescription, 
            image       : InputImage, 
            embed       : InputEmbed, 
            download    : InputDownload, 
            note        : InputNote, 
            createdAt   : Timestamp.fromDate(new Date()), 
            updatedAt   : Timestamp.fromDate(new Date()), 
        });
        setInputTitle("");
        setInputDescription("");
        setInputImage("");
        setInputDownload("");
        setInputEmbed("");
        setInputNote("");
        setModalPost(false);
        alert("Post Success")
    }

    // Update Function
    const [ModalUpdate, setModalUpdate] = useState("");
    // const DataPost          = Tb_Post().UsePost;  
    // const GetPostDetail     = DataPost.find(doc => doc.id == id);

    // console.log(ModalUpdate)

    // Delete Function
    const [ModalDelete, setModalDelete] = useState("");

    const DeletePost = (event) => {
        const Data = deleteDoc(doc(db, "Tb_Posts", event));
        setModalDelete("");
    }
    
    const css = `
        body {
            overflow: hidden;
        }
    `

    // Add Post
    const [Panel, setPanel] = useState("Valonime")
    const [Modal, setModal] = useState("")
    const [Genre, setGenre] = useState([])
    
    const AddGenre = (event) => {
        setGenre( arr => [...arr, `${event}`]);
    };

    const RemoveGenre = (event) => {
        setGenre(Genre.filter(doc => doc !== event));
    };

    console.log(Genre)

    if(Genre.includes("Ahegao")){
        var Ahegao = true;
    }if(Genre.includes("Anal")) {
        var Anal = true;
    }if (Genre.includes("BDSM")) {
        var BDSM = true;
    }if (Genre.includes("Big Boobs")) {
        var Big_Boobs = true;
    }
    
    
    return (
        <>
            <div className="flex h-screen">
                <div className="lg:basis-3/12 bg-neutral-700 p-5">
                    <ul>
                        <li className="mb-5">
                            <h2 className="text-neutral-100 text-2lg font-bold ml-2">VAL</h2>
                        </li>
                        <li>
                            <button className="flex hover:bg-neutral-800/40 rounded-sm px-3 py-2.5 w-full" onClick={(e) => setPanel("Valonime")}>
                                <img src={Logo} alt="Logo" width={'16'} className="self-center" />
                                <h3 className="text-neutral-100 font-medium self-center ml-3">Valonime</h3>
                            </button>
                        </li>
                        <li>
                            <button className="flex hover:bg-neutral-800/40 rounded-sm px-3 py-2.5 w-full" onClick={(e) => setPanel("Site2")}>
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
                                {/* <button className="hover:bg-neutral-800 focus:bg-neutral-800 bg-neutral-700 text-white font-medium text-xs uppercase rounded-sm mx-auto px-6 py-2.5 mt-3" type="button" onClick={(e) => setModalPost(true)}>Add Post</button> */}
                                <button className="hover:bg-neutral-800 focus:bg-neutral-800 bg-neutral-700 text-white font-medium text-xs uppercase rounded-sm mx-auto px-6 py-2.5 mt-3" type="button" onClick={(e) => setModal('AddPost')}>Add Post</button>
                            </div>

                            <div className="grid grid-cols-2 gap-1 mb-10">
                                {Posts.map((doc) => {
                                    return (
                                        <div key={doc.id} className="bg-neutral-800/40 rounded-sm p-3">
                                            <div className="flex justify-between">
                                                <h1 className="self-center text-white text-sm font-thin">{doc.title}</h1>
                                                <div>
                                                    <button className="hover:bg-neutral-700 self-center rounded-sm text-xs px-2 py-1 mx-1" onClick={() => setModalUpdate(doc.title)}>
                                                        <i className="bi-plus text-xl text-white"></i>
                                                    </button>
                                                    <button className="hover:bg-neutral-700 self-center rounded-sm text-xs px-2 py-1 mx-1" onClick={() => setModalDelete(doc.title)}>
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



            {ModalPost == true &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white">
                                    <form onSubmit={(e) => e(event.preventDefault())}>
                                        <input className="bg-neutral-700 rounded-sm w-full px-2 py-2 mb-1" placeholder="Title" value={InputTitle} onChange={(e) => setInputTitle(e.target.value)} />
                                        <input className="bg-neutral-700 rounded-sm w-full px-2 py-2 mb-1" placeholder="Description" value={InputDescription} onChange={(e) => setInputDescription(e.target.value)} />
                                        <input className="bg-neutral-700 rounded-sm w-full px-2 py-2 mb-1" placeholder="Image Link" value={InputImage} onChange={(e) => setInputImage(e.target.value)} />
                                        <input className="bg-neutral-700 rounded-sm w-full px-2 py-2 mb-1" placeholder="Embed Link" value={InputEmbed} onChange={(e) => setInputEmbed(e.target.value)} />
                                        <input className="bg-neutral-700 rounded-sm w-full px-2 py-2 mb-1" placeholder="Download Link" value={InputDownload} onChange={(e) => setInputDownload(e.target.value)} />
                                        <input className="bg-neutral-700 rounded-sm w-full px-2 py-2 mb-1" placeholder="Note" value={InputNote} onChange={(e) => setInputNote(e.target.value)} />
                                        <button className="hover:bg-neutral-900 bg-neutral-700 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={AddPosts} >Add Post</button>
                                        <button className="hover:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(e) => setModalPost(false)}>Cancle</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }


            {ModalUpdate  &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white text-center">
                                    <h1>Update Post - {ModalDelete}</h1>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => DeletePost(ModalDelete)}>Delete</button>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(e) => setModalUpdate(false)}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }


            {ModalDelete  &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white text-center">
                                    <h1>Delete Posts - {ModalDelete}</h1>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => DeletePost(ModalDelete)}>Delete</button>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(e) => setModalDelete(false)}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }
           
           

            {Modal == "AddPost"  &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white">
                                    <form className="" onSubmit={(e) => e(event.preventDefault())}>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                        </div>
                                        <input className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-1" placeholder="Title" value={InputTitle} onChange={(e) => setInputTitle(e.target.value)} />
                                        <input className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-1" placeholder="Image Link" value={InputImage} onChange={(e) => setInputImage(e.target.value)} />
                                        <input className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-1" placeholder="Embed Link" value={InputEmbed} onChange={(e) => setInputEmbed(e.target.value)} />
                                        <input className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-1" placeholder="Download Link" value={InputDownload} onChange={(e) => setInputDownload(e.target.value)} />
                                        <textarea className="bg-neutral-700 outline-none rounded-sm w-full px-2 py-2 mb-1" placeholder="Note" value={InputNote} onChange={(e) => setInputNote(e.target.value)} /> 
                                    </form>

                                    <div className="mb-10">
                                        {Ahegao ?
                                            <button className="bg-neutral-900 text-xs font-thin uppercase rounded-sm mr-1 py-2 px-2.5" onClick={(event) => RemoveGenre("Ahegao")}>Ahegao</button>
                                            :  
                                            <button className="hover:bg-neutral-900 bg-neutral-800 text-xs font-thin uppercase rounded-sm mr-1 py-2 px-2.5" onClick={(event) => AddGenre("Ahegao")}>Ahegao</button>  
                                        }

                                        {Anal ?
                                            <button className="bg-neutral-900 text-xs font-thin uppercase rounded-sm mr-1 py-2 px-2.5" onClick={(event) => RemoveGenre("Anal")}>Anal</button>
                                            :  
                                            <button className="hover:bg-neutral-900 bg-neutral-800 text-xs font-thin uppercase rounded-sm mr-1 py-2 px-2.5" onClick={(event) => AddGenre("Anal")}>Anal</button>  
                                        }
                                        
                                        {BDSM ?
                                            <button className="bg-neutral-900 text-xs font-thin uppercase rounded-sm mr-1 py-2 px-2.5" onClick={(event) => RemoveGenre("BDSM")}>BDSM</button>
                                            :  
                                            <button className="hover:bg-neutral-900 bg-neutral-800 text-xs font-thin uppercase rounded-sm mr-1 py-2 px-2.5" onClick={(event) => AddGenre("BDSM")}>BDSM</button>  
                                        }
                                        
                                        {Big_Boobs ?
                                            <button className="bg-neutral-900 text-xs font-thin uppercase rounded-sm mr-1 py-2 px-2.5" onClick={(event) => RemoveGenre("Big Boobs")}>Big Boobs</button>
                                            :  
                                            <button className="hover:bg-neutral-900 bg-neutral-800 text-xs font-thin uppercase rounded-sm mr-1 py-2 px-2.5" onClick={(event) => AddGenre("Big Boobs")}>Big Boobs</button>  
                                        }
                                        
                                    </div>

                                    
                                    <div className="text-center">
                                        <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => setModal("")}>Add Post</button>
                                        <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => setModal("")}>Cancle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }
          
            {Modal == "DeletePost"  &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white text-center">
                                    <h1>Delete Post</h1>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => setModal("")}>Add Post</button>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded-sm px-6 py-2.5 mt-3 mr-1" type="button" onClick={(e) => setModal("")}>Cancle</button>
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