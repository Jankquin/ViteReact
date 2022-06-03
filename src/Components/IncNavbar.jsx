import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import Tb_Post from "../Firebase/Tb_Post";
// import useDarkMode from '../Components/useDarkMode';

const IncNavbar = () => {
    const [DarkMode, setDarkMode] = useState(false);
    const [Modal, setModal] = useState({})
    const [Search, setSearch] = useState(""); 
    const [LabelSearch, setLabelSearch] = useState(true);
    const [Found, setFound] = useState([]);   
    const DataPost = Tb_Post().UsePost;
    const [InputData, setInputData] = useState({ Title: '', Cover: '', Thumbnail: '', Download: '', Embed: '', Brand: '', Genre: [], Release: '', View: '1', Note: '', Created_At: '23', Updated_At: '23', })
 
    
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

    const Filter = (event) => {
        const SearchWord = event.target.value;  
        setSearch(SearchWord); 
        if (SearchWord === "") {
            setLabelSearch(true);
        } else {
            setLabelSearch(false);
        }
        setFound(DataPost.filter(doc => doc.Title.toLowerCase().includes(SearchWord.toLowerCase())));
        setModal({})
    }

    const ModalSearchClose = () => {
        setSearch([]);
        setLabelSearch(true);
    }

    const Validation    = {
        ValidTitle      : { border: InputData.Title ? "1px solid #e5e7eb" : "1px solid #ef4444" }
    }

    return (
        <>
            <div className="dark:bg-zinc-900 bg-white fixed w-full top-0 p-3 z-50">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="dark:md:bg-transparent dark:bg-zinc-800 lg:w-3/12 md:w-2/12 flex">
                            <Link to={`/`}className="flex px-3">
                                <img src={Logo} alt="Logo" className="md:w-[24px] w-[46px]" />
                            </Link>
                        </div>
                        
                        <div className="lg:w-5/12 md:w-8/12 relative h-12">
                            <div className="dark:bg-zinc-800  bg-zinc-200 relative rounded w-full min-h-full">
                                <input id="SearchBar" className="bg-transparent text-zinc-600 relative font-medium outline-none w-full min-h-full z-10 p-3" type="text" value={Search} onChange={Filter}/>
                                {LabelSearch ? 
                                    <label htmlFor="SearchBar" className="text-zinc-600 text-sm font-medium uppercase absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">Search</label>
                                    : 
                                    <button className="text-zinc-600 absolute top-0 right-0 p-3 z-10" onClick={ModalSearchClose}>
                                        <i className="bi-x"></i>
                                    </button>
                                }
                                {Search.length !== 0 && (
                                    <div className="shadow-lg p-3">
                                        {Found.length !== 0 ?
                                            <>
                                                {Found.slice(0, 5).map((doc, key) => {
                                                    return (
                                                        <a href={`/${doc.Id}`} key={doc.Id} className="dark:bg-zinc-800 dark:hover:bg-zinc-700/50 bg-zinc-200 hover:bg-zinc-300 text-zinc-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({})}>
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
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="dark:md:bg-transparent dark:bg-zinc-800 lg:w-3/12 md:w-2/12 flex justify-end">
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-600 lg:block hidden rounded-full self-center w-10 h-10 mr-5" onClick={DarkModBtn}>
                                {DarkMode ? 
                                    <i className="bi-moon-stars-fill text-xl self-center"></i> :
                                    <i className="bi-moon-stars text-xl self-center"></i>
                                }
                            </button>
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-600 rounded-full self-center w-10 h-10" 
                                onClick={Modal.Menu == true ? 
                                    (event) => {
                                        setModal({Menu: false})
                                        ModalSearchClose() } : 
                                    (event) => {
                                        setModal({Menu: true})
                                        ModalSearchClose()} }>
                                <i className="bi-grid-fill text-xl self-center"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {Modal.Menu == true && (
                <div className="fixed bg-zinc-900/50 flex top-0 left-0 w-full h-full z-40">
                    <div className="container md:px-0 px-3 py-2 mx-auto mt-20">
                        <div className="dark:bg-zinc-900 bg-white lg:w-5/12 md:w-8/12 w-10/12 rounded self-center mx-auto p-5 animate-fadeIn">
                            <div className="flex justify-between mb-5">
                                <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-600 rounded-full w-10 h-10" onClick={DarkModBtn}>
                                    {DarkMode ? 
                                        <i className="bi-moon-stars-fill text-xl self-center"></i> :
                                        <i className="bi-moon-stars text-xl self-center"></i>
                                    }
                                </button>
                                <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-600 rounded-full w-10 h-10" onClick={(event) => setModal({})}>
                                    <i className="bi-x"/>
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-1">
                                <button className="dark:bg-zinc-800 dark:hover:bg-zinc-700/50 bg-zinc-200 hover:bg-zinc-300 text-zinc-600 text-left flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Login: true})}>
                                    <i className="bi-person-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Login</div>
                                        <div className="text-xs">Insert Username & Password</div>
                                    </span>
                                </button>
                                <button className="dark:bg-zinc-800 dark:hover:bg-zinc-700/50 bg-zinc-200 hover:bg-zinc-300 text-zinc-600 text-left flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Register: true})}>
                                    <i className="bi-person-plus-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Register</div>
                                        <div className="text-xs">Make your account</div>
                                    </span>
                                </button>
                            </div>
                            <Link to="/" className="dark:bg-zinc-800 dark:hover:bg-zinc-700/50 bg-zinc-200 hover:bg-zinc-300 text-zinc-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-star-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">Recomended</div>
                                    <div className="text-xs">Most View</div>
                                </span>
                            </Link>
                            <Link to="/more" className="dark:bg-zinc-800 dark:hover:bg-zinc-700/50 bg-zinc-200 hover:bg-zinc-300 text-zinc-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">Genre</div>
                                    <div className="text-xs">Choose your Genre</div>
                                </span>
                            </Link>
                            <Link to="/" className="dark:bg-zinc-800 dark:hover:bg-zinc-700/50 bg-zinc-200 hover:bg-zinc-300 text-zinc-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-star-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">Recomended</div>
                                    <div className="text-xs">Most View</div>
                                </span>
                            </Link>
                            <Link to="/more" className="dark:bg-zinc-800 dark:hover:bg-zinc-700/50 bg-zinc-200 hover:bg-zinc-300 text-zinc-600 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">Genre</div>
                                    <div className="text-xs">Choose your Genre</div>
                                </span>
                            </Link>

                            <div className="text-zinc-600 text-xs mt-5">Powered by : Valonime</div>
                        </div>
                    </div>
                </div>
            )}

            {Modal.Login == true && (
                <div className="fixed bg-zinc-900/50 flex top-0 left-0 w-full h-full z-40">
                    <div className="container md:px-0 px-3 py-2 mx-auto mt-20">
                        <div className="dark:bg-zinc-900 bg-white lg:w-5/12 md:w-8/12 w-10/12 rounded self-center mx-auto p-5 animate-fadeIn">
                            <div className="flex justify-between mb-5">
                                <div className="text-zinc-600 flex px-4 py-2 mb-1">
                                    <i className="bi-person-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Login</div>
                                        <div className="text-xs">Insert Username & Password</div>
                                    </span>
                                </div>
                                <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-600 rounded-full w-10 h-10" onClick={(event) => setModal({})}>
                                    <i className="bi-x"/>
                                </button>
                            </div>

                            <div className="relative rounded z-0 w-full mb-3 group ValidTitle" style={Validation.ValidTitle}>
                                <input type="text" name="Title" className="bg-transparent focus:border-indigo-600 text-slate-600 text-sm outline-none w-full px-10 p-3 peer" placeholder=" " required 
                                    value={InputData.Title} onChange={(event) => setInputData((doc) => ({ ...doc, Title: event.target.value }) )}/>
                                <i className="bi bi-type absolute peer-focus:text-indigo-600 text-slate-400 left-3 top-2"></i>
                                <label htmlFor="Title" className="absolute bg-white text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-10 peer-focus:-top-3 peer-focus:scale-75 peer-focus:left-0 peer-focus:text-indigo-600 -top-3 scale-75 left-0 duration-300 text-sm px-2 -z-10">Username</label>
                            </div>
                            <div className="relative rounded z-0 w-full mb-3 group ValidTitle" style={Validation.ValidTitle}>
                                <input type="text" name="Title" className="bg-transparent focus:border-indigo-600 text-slate-600 text-sm outline-none w-full px-10 p-3 peer" placeholder=" " required 
                                    value={InputData.Title} onChange={(event) => setInputData((doc) => ({ ...doc, Title: event.target.value }) )}/>
                                <i className="bi bi-type absolute peer-focus:text-indigo-600 text-slate-400 left-3 top-2"></i>
                                <label htmlFor="Title" className="absolute bg-white text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-10 peer-focus:-top-3 peer-focus:scale-75 peer-focus:left-0 peer-focus:text-indigo-600 -top-3 scale-75 left-0 duration-300 text-sm px-2 -z-10">Password</label>
                            </div>

                            <button className="bg-indigo-800 hover:bg-indigo-700 flex text-white rounded justify-center min-w-[7rem] px-4 py-2 mx-1">
                                <i className="bi bi-check text-white self-center mr-2"></i>
                                <span className="text-sm self-center">Login</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {Modal.Register == true && (
                <div className="fixed bg-zinc-900/50 flex top-0 left-0 w-full h-full z-40">
                    <div className="container md:px-0 px-3 py-2 mx-auto mt-20">
                        <div className="dark:bg-zinc-900 bg-white lg:w-5/12 md:w-8/12 w-10/12 rounded self-center mx-auto p-5 animate-fadeIn">
                            <div className="flex justify-between mb-5">
                                <div className="text-zinc-600 flex px-4 py-2 mb-1">
                                    <i className="bi-person-plus-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Register</div>
                                        <div className="text-xs">Make your account</div>
                                    </span>
                                </div>
                                <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-600 rounded-full w-10 h-10" onClick={(event) => setModal({})}>
                                    <i className="bi-x"/>
                                </button>
                            </div>

                            <div className="relative rounded z-0 w-full mb-3 group ValidTitle" style={Validation.ValidTitle}>
                                <input type="text" name="Title" className="bg-transparent focus:border-indigo-600 text-slate-600 text-sm outline-none w-full px-10 p-3 peer" placeholder=" " required 
                                    value={InputData.Title} onChange={(event) => setInputData((doc) => ({ ...doc, Title: event.target.value }) )}/>
                                <i className="bi bi-type absolute peer-focus:text-indigo-600 text-slate-400 left-3 top-2"></i>
                                <label htmlFor="Title" className="absolute bg-white text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-10 peer-focus:-top-3 peer-focus:scale-75 peer-focus:left-0 peer-focus:text-indigo-600 -top-3 scale-75 left-0 duration-300 text-sm px-2 -z-10">Username</label>
                            </div>
                            <div className="relative rounded z-0 w-full mb-3 group ValidTitle" style={Validation.ValidTitle}>
                                <input type="text" name="Title" className="bg-transparent focus:border-indigo-600 text-slate-600 text-sm outline-none w-full px-10 p-3 peer" placeholder=" " required 
                                    value={InputData.Title} onChange={(event) => setInputData((doc) => ({ ...doc, Title: event.target.value }) )}/>
                                <i className="bi bi-type absolute peer-focus:text-indigo-600 text-slate-400 left-3 top-2"></i>
                                <label htmlFor="Title" className="absolute bg-white text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-10 peer-focus:-top-3 peer-focus:scale-75 peer-focus:left-0 peer-focus:text-indigo-600 -top-3 scale-75 left-0 duration-300 text-sm px-2 -z-10">E-Mail</label>
                            </div>
                            <div className="relative rounded z-0 w-full mb-3 group ValidTitle" style={Validation.ValidTitle}>
                                <input type="text" name="Title" className="bg-transparent focus:border-indigo-600 text-slate-600 text-sm outline-none w-full px-10 p-3 peer" placeholder=" " required 
                                    value={InputData.Title} onChange={(event) => setInputData((doc) => ({ ...doc, Title: event.target.value }) )}/>
                                <i className="bi bi-type absolute peer-focus:text-indigo-600 text-slate-400 left-3 top-2"></i>
                                <label htmlFor="Title" className="absolute bg-white text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-10 peer-focus:-top-3 peer-focus:scale-75 peer-focus:left-0 peer-focus:text-indigo-600 -top-3 scale-75 left-0 duration-300 text-sm px-2 -z-10">Password</label>
                            </div>

                            <button className="bg-indigo-800 hover:bg-indigo-700 flex text-white rounded justify-center min-w-[7rem] px-4 py-2 mx-1">
                                <i className="bi bi-check text-white self-center mr-2"></i>
                                <span className="text-sm self-center">Register</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default IncNavbar