import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import Tb_Post from "../Firebase/Tb_Post";
// import useDarkMode from '../Components/useDarkMode';

const IncNavbar = () => {
    const [DarkMode, setDarkMode] = useState(false);
    const [Modal, setModal] = useState({Alert: false})
    const [Search, setSearch] = useState(""); 
    const [LabelSearch, setLabelSearch] = useState(true);
    const [Found, setFound] = useState([]);   

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setDarkMode(true);
            document.querySelector('html').classList.add('dark');
        } else {
            setDarkMode(false);
            document.querySelector('html').classList.remove('dark');
        }
    }, []);

    const DarkModBtn = () => {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.remove('dark');
            setDarkMode(false);
            localStorage.setItem('theme', 'light');
        } else {
            document.querySelector('html').classList.add('dark');
            setDarkMode(true);
            localStorage.setItem('theme', 'dark');
        }
    }
    
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
        setModal({Alert: false})
    }

    const ModalSearchClose = () => {
        setSearch([]);
        setLabelSearch(true);
    }


    return (
        <>
            <div className="dark:bg-zinc-900 bg-white shadow fixed w-full top-0 p-3 z-50">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="lg:w-3/12 md:w-2/12 flex">
                            <Link to={`/`}className="flex px-3">
                                <img src={Logo} alt="Logo" className="md:w-[24px] w-[46px]" />
                            </Link>
                        </div>
                        
                        <div className="lg:w-5/12 md:w-8/12 w-full">
                            <form className="dark:bg-zinc-800 relative md:rounded">
                                {LabelSearch ? 
                                    <div className="absolute flex text-zinc-600 text-sm font-medium uppercase h-full w-full">
                                        <div className="mx-auto self-center">
                                            <i className="bi-search mr-3"></i> Search
                                        </div>
                                    </div>
                                    : 
                                    <div className="absolute flex text-zinc-600 h-full w-full z-30" onClick={ModalSearchClose}>
                                        <button className="ml-auto self-center p-3">
                                            <i className="bi-x"></i>
                                        </button>
                                    </div>
                                }
                                <input className="bg-transparent text-zinc-600 rounded text-sm relative outline-none w-full z-10 p-3" type="text" value={Search} onChange={Filter}/>
                            </form>
                        </div>

                        <div className="lg:w-3/12 md:w-2/12 flex justify-end">
                            <button className="dark:hover:bg-zinc-800 dark:text-zinc-600 flex rounded-full px-3 mr-5" onClick={DarkModBtn}>
                                {DarkMode ? 
                                    <i className="bi-moon-stars-fill text-xl self-center"></i> :
                                    <i className="bi-moon-stars text-xl self-center"></i>
                                }
                            </button>
                            <button className="dark:hover:bg-zinc-800 dark:text-zinc-600 flex rounded-full px-3" onClick={Modal.Alert == true ? (event) => setModal({Alert: false}) : (event) => setModal({Alert: true})}>
                                <i className="bi-grid-fill text-xl self-center"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      
            {Search.length !== 0 && (
                <div className="bg-zinc-900/50 fixed w-full h-full top-0 left-0 z-30 animate-fadeIn">
                    <div className="container md:px-0 px-3 py-2 mx-auto mt-16">
                        <div className="flex justify-center">
                            <div className="lg:basis-5/12 md:basis-8/12 basis-full dark:bg-zinc-900 shadow-lg rounded-sm p-5 overflow-hidden block">
                                {Found.length !== 0 ?
                                    <>
                                        {Found.slice(0, 5).map((doc, key) => {
                                            return (
                                                <a href={`/${doc.Id}`} key={doc.Id} className="dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:text-indigo-600 text-zinc-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                                    <div style={{ backgroundImage: `url(${doc.Cover})` }} className='bg-no-repeat bg-cover bg-center rounded-full shadow self-center w-10 h-10 mr-3'></div> 
                                                    <span>
                                                        <div className="font-medium">{doc.Title}</div>
                                                        <div className="flex">
                                                            <i className="bi-eye-fill self-center mr-3" />
                                                            <div className="self-center text-xs">{doc.View}</div>
                                                        </div>
                                                    </span>
                                                </a>    
                                            );
                                        })}
                                    </> 
                                    :
                                    <>
                                        <h2 className="text-zinc-600 text-2xl text-center font-medium">Not Found</h2>
                                    </>
                                }
                                <div className="text-zinc-600 text-xs mt-5">Powered by : Valonime</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {Modal.Alert == true && (
                <div className="fixed bg-zinc-900/50 flex top-0 left-0 w-full h-full z-40">
                    <div className="dark:bg-zinc-900 bg-white lg:w-5/12 w-10/12 rounded self-center mx-auto p-5 animate-fadeIn">
                        <div className="flex justify-between mb-5">
                            <button className="text-zinc-600 text-xl font-medium" onClick={(event) => setModal({Alert: false})}>Valonime</button>
                            <button className="dark:hover:bg-zinc-800 text-zinc-600 rounded-full px-2 py-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-x"/>
                            </button>
                        </div>

                        <Link to="/" className="dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 hover:text-indigo-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                            <i className="bi-star-fill text-2xl self-center mr-3"/>    
                            <span>
                                <div className="font-medium">Recomended</div>
                                <div className="text-xs">Most View</div>
                            </span>
                        </Link>
                        <Link to="/more" className="dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 hover:text-indigo-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                            <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                            <span>
                                <div className="font-medium">Genre</div>
                                <div className="text-xs">Choose your Genre</div>
                            </span>
                        </Link>
                        <Link to="/" className="dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 hover:text-indigo-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                            <i className="bi-star-fill text-2xl self-center mr-3"/>    
                            <span>
                                <div className="font-medium">Recomended</div>
                                <div className="text-xs">Most View</div>
                            </span>
                        </Link>
                        <Link to="/more" className="dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 hover:text-indigo-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                            <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                            <span>
                                <div className="font-medium">Genre</div>
                                <div className="text-xs">Choose your Genre</div>
                            </span>
                        </Link>

                        <div className="text-zinc-600 text-xs mt-5">Powered by : Valonime</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default IncNavbar