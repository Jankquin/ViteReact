import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import Tb_Post from "../Firebase/Tb_Post";

const IncNavbar = () => {
    const [Alert, setAlert] = useState({ Alert: false})
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
        setAlert({Alert: false})
    }

    const ModalSearchClose = () => {
        setSearch([]);
        setLabelSearch(true);
    }


    return (
        <>
            <div className="bg-white shadow fixed w-full top-0 p-3 z-50">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="lg:w-3/12 md:w-2/12 md:bg-transparent bg-slate-200/50 flex">
                            <Link to={`/`}className="flex px-3">
                                <img src={Logo} alt="Logo" width={'26'} />
                            </Link>
                        </div>
                        
                        <div className="lg:w-5/12 md:w-8/12 w-full">
                            <form className="bg-slate-200/50 relative rounded">
                                {LabelSearch ? 
                                    <div className="absolute flex text-slate-600 text-sm uppercase h-full w-full">
                                        <div className="mx-auto self-center">
                                            <i className="bi-search mr-3"></i> Search
                                        </div>
                                    </div>
                                    : 
                                    <div className="absolute flex text-slate-600 h-full w-full z-30" onClick={ModalSearchClose}>
                                        <button className="ml-auto self-center p-3">
                                            <i className="bi-x"></i>
                                        </button>
                                    </div>
                                }
                                <input className="bg-transparent text-slate-600 rounded text-sm relative outline-none w-full z-10 p-3" type="text" value={Search} onChange={Filter}/>
                            </form>
                        </div>

                        <div className="lg:w-3/12 md:w-2/12 md:bg-transparent bg-slate-200/50 text-slate-600 flex justify-end">
                            <button className="flex text-slate-600 px-3" onClick={Alert.Alert == true ? (event) => setAlert({Alert: false}) : (event) => setAlert({Alert: true})}>
                                <i className="bi-list text-xl self-center"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      
            {Search.length !== 0 && (
                <div className="bg-slate-600/80 fixed w-full h-full top-0 left-0 z-30 animate-fadeIn">
                    <div className="container md:px-0 px-3 py-2 mx-auto mt-16">
                        <div className="flex justify-center">
                            <div className="lg:basis-5/12 md:basis-8/12 basis-full bg-white shadow-lg rounded-sm px-5 py-10 overflow-hidden block">
                                {Found.length !== 0 ?
                                    <>
                                        {Found.slice(0, 5).map((doc, key) => {
                                            return (
                                                <a href={`/${doc.Id}`} key={doc.Id} className="whitespace-nowrap text-ellipsis hover:bg-slate-100 text-slate-600 text-sm block rounded overflow-hidden p-3">{doc.Title}</a>
                                            );
                                        })}
                                    </> 
                                    :
                                    <>
                                        <h2 className="text-slate-600 text-center font-medium">Not Found</h2>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {Alert.Alert == true && (
                <div className="fixed bg-slate-600/80 flex top-0 left-0 w-full h-full z-40">
                    <div className="bg-white lg:w-5/12 w-10/12 rounded self-center mx-auto p-5 animate-fadeIn">
                        <div className="flex justify-between mb-5">
                            <button className="text-slate-600 text-xl font-medium" onClick={(event) => setAlert({Alert: false})}>Valonime</button>
                            <button className="hover:bg-slate-200 rounded-full px-2 py-1" onClick={(event) => setAlert({Alert: false})}>
                                <i className="bi-x"/>
                            </button>
                        </div>

                        <Link to="/" className="flex bg-slate-200/50 hover:text-indigo-400 text-slate-600 group rounded px-4 py-2 mb-1" onClick={(event) => setAlert({Alert: false})}>
                            <i className="bi-star-fill text-2xl align-center mr-3"/>    
                            <span>
                                <div className="font-medium">Recomended</div>
                                <div className="group-hover:text-indigo-400 text-slate-400 text-xs">Most View</div>
                            </span>
                        </Link>
                        <Link to="/more" className="flex bg-slate-200/50 hover:text-indigo-400 text-slate-600 group rounded px-4 py-2 mb-1" onClick={(event) => setAlert({Alert: false})}>
                            <i className="bi-grid-fill text-2xl align-center mr-3"/>    
                            <span>
                                <div className="font-medium">Genre</div>
                                <div className="group-hover:text-indigo-400 text-slate-400 text-xs">Choose your Genre</div>
                            </span>
                        </Link>
                        <Link to="/" className="flex bg-slate-200/50 hover:text-indigo-400 text-slate-600 group rounded px-4 py-2 mb-1" onClick={(event) => setAlert({Alert: false})}>
                            <i className="bi-star-fill text-2xl align-center mr-3"/>    
                            <span>
                                <div className="font-medium">Recomended</div>
                                <div className="group-hover:text-indigo-400 text-slate-400 text-xs">Most View</div>
                            </span>
                        </Link>
                        <Link to="/more" className="flex bg-slate-200/50 hover:text-indigo-400 text-slate-600 group rounded px-4 py-2 mb-1" onClick={(event) => setAlert({Alert: false})}>
                            <i className="bi-grid-fill text-2xl align-center mr-3"/>    
                            <span>
                                <div className="font-medium">Genre</div>
                                <div className="group-hover:text-indigo-400 text-slate-400 text-xs">Choose your Genre</div>
                            </span>
                        </Link>

                    </div>
                </div>
            )}
        </>
    )
}

export default IncNavbar