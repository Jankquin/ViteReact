import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, Timestamp, getDocs, getDoc, query, orderBy, doc, setDoc, limit, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/Config";

const List = () => {

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
            setInputId(doc.data().id + 1)
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

    return (
        <>
            <div className="mb-10">
                <button className="hover:bg-neutral-900 focus:bg-neutral-900 bg-neutral-700 text-white font-medium text-xs uppercase rounded mx-auto px-6 py-2.5 mt-3" type="button" onClick={(e) => setModalPost(true)}>Add Post</button>
            </div>


            <div className="flex justify-between text-white font-semibold mb-3">
                <span>Dashboard</span>
                <Link to="/" className="hover:bg-neutral-700 text-xs uppercase rounded px-6 py-2.5"> Post </Link>
            </div>

            <div className="grid grid-cols-1 gap-1 mb-10">
                {Posts.map((doc) => {
                    return (
                        <div key={doc.id} className="bg-neutral-700 rounded px-3 py-2.5">
                            <div className="flex justify-between">
                                <h1 className="self-center text-white">{doc.title}</h1>
                                <div>
                                    <button className="hover:bg-neutral-800 self-center rounded text-xs px-3 py-2 mx-1">
                                        <i className="bi-plus text-xl text-white"></i>
                                    </button>
                                    <button className="hover:bg-neutral-800 self-center rounded text-xs px-3 py-2 mx-1" onClick={() => setModalDelete(doc.title)}>
                                        <i className="bi-x text-xl text-white"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>


            {ModalDelete  &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white text-center">
                                    <h1>Delete Posts - {ModalDelete}</h1>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded px-6 py-2.5 mt-3 mr-1" type="button" onClick={() => DeletePost(ModalDelete)}>Delete</button>
                                    <button className="hover:bg-neutral-700 focus:bg-neutral-900 text-white font-medium text-xs uppercase rounded px-6 py-2.5 mt-3 mr-1" type="button" onClick={(e) => setModalDelete(false)}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }

            {ModalPost == true &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white">
                                    <form onSubmit={(e) => e(event.preventDefault())}>
                                        <input className="bg-neutral-700 rounded w-full px-2 py-2 mb-1" placeholder="Title" value={InputTitle} onChange={(e) => setInputTitle(e.target.value)} />
                                        <input className="bg-neutral-700 rounded w-full px-2 py-2 mb-1" placeholder="Description" value={InputDescription} onChange={(e) => setInputDescription(e.target.value)} />
                                        <input className="bg-neutral-700 rounded w-full px-2 py-2 mb-1" placeholder="Image Link" value={InputImage} onChange={(e) => setInputImage(e.target.value)} />
                                        <input className="bg-neutral-700 rounded w-full px-2 py-2 mb-1" placeholder="Embed Link" value={InputEmbed} onChange={(e) => setInputEmbed(e.target.value)} />
                                        <input className="bg-neutral-700 rounded w-full px-2 py-2 mb-1" placeholder="Download Link" value={InputDownload} onChange={(e) => setInputDownload(e.target.value)} />
                                        <input className="bg-neutral-700 rounded w-full px-2 py-2 mb-1" placeholder="Note" value={InputNote} onChange={(e) => setInputNote(e.target.value)} />
                                        <button className="hover:bg-neutral-900 bg-neutral-700 text-white font-medium text-xs uppercase rounded px-6 py-2.5 mt-3 mr-1" type="button" onClick={AddPosts} >Add Post</button>
                                        <button className="hover:bg-neutral-900 text-white font-medium text-xs uppercase rounded px-6 py-2.5 mt-3 mr-1" type="button" onClick={(e) => setModalPost(false)}>Cancle</button>
                                    </form>
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


export default List;