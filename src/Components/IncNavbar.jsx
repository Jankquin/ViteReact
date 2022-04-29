import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import Tb_Post from "../Firebase/Tb_Post";

const IncNavbar = () => {
    const [Search, setSearch] = useState(""); 
    const [LabelSearch, setLabelSearch] = useState(true);
    const [Found, setFound] = useState([]);   
    
    let DataPost = Tb_Post().UsePost;

    const Filter = (event) => {
        const SearchWord = event.target.value;  
        setSearch(SearchWord); 
        if (SearchWord === "") {
            setLabelSearch(true);
        } else {
            setLabelSearch(false);
        }
        setFound(DataPost.filter(doc => doc.Title.toLowerCase().includes(SearchWord.toLowerCase())));
    }

    const ModalSearchClose = () => {
        setSearch([]);
        setLabelSearch(true);
    }


    return (
        <>
            <div className="bg-white shadow-lg fixed w-full top-0 p-3 z-40">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="lg:w-3/12 md:w-2/12 md:bg-transparent bg-slate-200/50 flex">
                            <Link to={`/`}className="flex px-3">
                                <img src={Logo} alt="Logo" width={'26'} />
                            </Link>
                        </div>
                        
                        <div className="lg:w-5/12 md:w-8/12 w-full">
                            <form className="bg-slate-200/50 relative">
                                {LabelSearch ? 
                                    <div className="absolute flex text-slate-900 font-medium uppercase h-full w-full">
                                        <div className="mx-auto self-center">
                                            <i className="bi-search"></i>
                                            <small className="ml-3">Search</small>
                                        </div>
                                    </div>
                                    : 
                                    <div className="absolute flex text-slate-900 h-full w-full z-30" onClick={ModalSearchClose}>
                                        <button className="ml-auto self-center p-3">
                                            <i className="bi-x"></i>
                                        </button>
                                    </div>
                                }
                                <input className="bg-transparent text-slate-900 text-sm font-medium relative outline-none w-full z-10 p-3" type="text" value={Search} onChange={Filter}/>
                            </form>
                        </div>

                        <div className="lg:w-3/12 md:w-2/12 md:bg-transparent bg-slate-200/50 flex justify-end">
                            <Link to="/" className="flex px-3">
                                <i className="bi-list text-xl text-slate-900 self-center"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto pt-2">
                    <div className="flex justify-center">
                        <div className="lg:w-5/12 md:w-8/12 w-full flex overflow-x-scroll mx-auto no-scrollbar"> 
                            <Link to="/" className="hover:bg-slate-200/50 text-slate-900 text-sm rounded-sm mr-2 px-3 py-1 whitespace-nowrap">Recomended</Link>
                            <Link to="/" className="hover:bg-slate-200/50 text-slate-900 text-sm rounded-sm mr-2 px-3 py-1 whitespace-nowrap">New Uploaded</Link>
                            <Link to="/" className="hover:bg-slate-200/50 text-slate-900 text-sm rounded-sm mr-2 px-3 py-1 whitespace-nowrap">Most View</Link>
                            <Link to="/" className="hover:bg-slate-200/50 text-slate-900 text-sm rounded-sm mr-2 px-3 py-1 whitespace-nowrap">New Uploaded</Link>
                            <Link to="/" className="hover:bg-slate-200/50 text-slate-900 text-sm rounded-sm mr-2 px-3 py-1 whitespace-nowrap">New Uploaded</Link>
                            <Link to="/" className="hover:bg-slate-200/50 text-slate-900 text-sm rounded-sm mr-2 px-3 py-1 whitespace-nowrap">New Uploaded</Link>
                            <Link to="/" className="hover:bg-slate-200/50 text-slate-900 text-sm rounded-sm mr-2 px-3 py-1 whitespace-nowrap">New Uploaded</Link>
                        </div>
                    </div>
                </div>
            </div>
      
            {Search.length !== 0 && (
                <div className="bg-slate-500/50 fixed w-full h-full top-0 left-0 z-30">
                    <div className="container md:px-0 px-3 py-2 mx-auto mt-28">
                        <div className="flex justify-center">
                            <div className="lg:basis-5/12 md:basis-8/12 basis-full bg-white shadow-lg rounded-sm px-5 py-10 overflow-hidden block">
                                {Found.length !== 0 ?
                                    <>
                                        {Found.slice(0, 5).map((doc, key) => {
                                            return (
                                                <a href={`/${doc.Id}`} key={doc.Id} className="whitespace-nowrap text-ellipsis hover:bg-slate-200/50 text-slate-900 text-sm block overflow-hidden p-3">{doc.Title} asdasd ada da sda da d</a>
                                            );
                                        })}
                                    </> 
                                    :
                                    <>
                                        <h2 className="text-slate-900 text-center font-medium">Not Found</h2>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default IncNavbar