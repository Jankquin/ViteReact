import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Database from "../Firebase/Database";
import DLogo from "../Assets/Logo.svg";
import LSite from "../Assets/LSite.svg";



const Navbar = () => {
    const DataManga = Database().Tb_Manga;

    const [DarkMode, setDarkMode] = useState(true);
    const [Navbar, setNavbar] = useState(false);
    const [Search, setSearch] = useState("");
    const [Result, setResult] = useState("");
    const [Modal, setModal] = useState({})

    useEffect(() => {
        NavbarBg()
        window.addEventListener("scroll", NavbarBg)

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

    const NavbarBg = () => {
        if (window.scrollY >= 5) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const css = ` body { overflow: hidden } `

    return (
        <>
            <div className={`${Navbar && "dark:bg-zinc-900 bg-white shadow"} fixed flex top-0 left-0 w-full py-2 md:px-0 px-3 z-20 duration-500`}>
                <div className="container md:w-10/12 w-full relative flex justify-center mx-auto h-10">
                    <div className="absolute flex gap-2 self-center top-0 left-0 z-30">
                        <Link to={`/`} className="flex self-center justify-center w-10 h-10">
                            <img src={DLogo} alt="Logo" className="self-center h-5" />
                        </Link>
                        <Link to={'/'} className="md:flex gap-2 w-10 h-10 hidden">
                            <img src={LSite} alt="Site" className="self-center h-5" />
                        </Link>
                    </div>
                    
                    <div className="dark:bg-zinc-800/80 bg-zinc-200/80 md:w-6/12 w-full h-10 relative flex justify-center rounded">
                        <input type="text" className="bg-transparent dark:text-white text-zinc-900 relative text-sm tracking-wide outline-none h-10 w-full pl-10 pr-20 z-20" placeholder="Search" value={Search} 
                            onChange={(event) => {
                                setSearch(event.target.value),
                                setResult(DataManga.filter(doc => doc.Title.toLowerCase().includes(event.target.value.toLowerCase())))
                            }}/>

                        <button className={`${!Search && 'hidden'} dark:text-white text-zinc-900 absolute md:right-0 right-10 w-10 h-10 z-20`} 
                            onClick={(event) => {
                                setSearch(''), 
                                setResult('')}
                            }><i className='bi-x text-xl'></i></button>
                        
                        {Search.length !== 0 &&
                            <div className="dark:bg-zinc-800 bg-zinc-200 absolute rounded top-0 left-0 w-full z-10 shadow">
                                <div className="dark:border-zinc-700 border-zinc-300 border-t p-3 mt-10">
                                    {Result.length !== 0 ? 
                                        Result.slice(0, 5).map((doc, index) => {
                                            var TotalView = 0;
                                            for (var i = 0; i < doc.Chapter.length; i++) {
                                                TotalView = TotalView + doc.Chapter[i].View;
                                            }
                                            return(
                                                <Link to={`manga/${doc.Id}`} key={index} className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 flex gap-3 rounded px-3 py-2 mb-1">
                                                    <div style={{ backgroundImage: `url(${doc.Cover})` }} className='bg-cover bg-center rounded-full shadow self-center w-10 h-10'></div> 
                                                    
                                                    <div className='self-center w-10/12'>
                                                        <div className='text-sm text-ellipsis whitespace-nowrap overflow-hidden mb-1'>{doc.Title}</div>
                                                        <div className="flex gap-2">
                                                            <div className='text-[11px] font-thin gap-1 flex'>
                                                                <i className='bi-eye-fill self-center'></i>
                                                                {TotalView}
                                                            </div>
                                                            <div className='text-[11px] font-thin gap-1 flex'>
                                                                <i className='bi-bookmark-fill self-center'></i>
                                                                12
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                        :
                                        <div className="dark:text-white text-zinc-900 text-2xl text-center font-medium p-5">Not Found</div>
                                    }
                                </div>
                            </div>
                        }   
                    </div>
                    
                    <div className="absolute self-center flex gap-5 justify-end top-0 right-0 z-20">
                        <button name='DarkModBtn' className={`${Navbar ? "dark:text-white dark:hover:bg-white/20 text-zinc-900 hover:bg-zinc-900/20" : "hover:bg-white/20 dark:text-white text-zinc-900"}  rounded-full self-center md:block hidden w-10 h-10`}  onClick={DarkModBtn}>            
                            {DarkMode ? 
                                <i className="bi-moon-stars-fill text-xl self-center"></i> :
                                <i className="bi-brightness-high-fill text-xl self-center"></i>
                            }
                        </button>
                        <button name='ModalBtn' className={`${Navbar ? "dark:text-white dark:hover:bg-white/20 text-zinc-900 hover:bg-zinc-900/20" : "hover:bg-white/20 dark:text-white text-zinc-900"}  md:rounded-full self-center w-10 h-10`}
                            onClick={Modal.Menu == true ? 
                                (event) => { setModal({Menu: false}) } : 
                                (event) => { setModal({Menu: true}) }
                            }>
                            <i className='bi-list text-xl'></i>
                        </button>
                    </div>
                </div>
            </div>

            {Modal.Menu == true && (
                <div className="bg-zinc-800/80 fixed flex top-0 left-0 w-full h-full z-40">
                    <div className="container md:px-0 px-3 py-2 mx-auto mt-20">
                        <div className="dark:bg-zinc-900 bg-white lg:w-5/12 md:w-8/12 w-full rounded self-center mx-auto p-5 animate-fadeIn">
                            <div className="flex justify-between mb-5">
                                <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded-full w-10 h-10" onClick={DarkModBtn}>
                                    {DarkMode ? 
                                        <i className="bi-moon-stars-fill text-xl self-center"></i> :
                                        <i className="bi-moon-stars text-xl self-center"></i>
                                    }
                                </button>
                                <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded-full w-10 h-10" onClick={(event) => setModal({})}>
                                    <i className="bi-x text-xl"/>
                                </button>
                            </div>
                            <Link to="/" className="dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-200 hover:bg-zinc-300 dark:text-white text-zinc-900 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-star-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">Recomended</div>
                                    <div className="text-xs">Most View</div>
                                </span>
                            </Link>
                            <Link to="/more" className="dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-200 hover:bg-zinc-300 dark:text-white text-zinc-900 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">Genre</div>
                                    <div className="text-xs">Choose your Genre</div>
                                </span>
                            </Link>
                            <Link to="/" className="dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-200 hover:bg-zinc-300 dark:text-white text-zinc-900 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-star-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">Recomended</div>
                                    <div className="text-xs">Most View</div>
                                </span>
                            </Link>
                            <Link to="/more" className="dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-200 hover:bg-zinc-300 dark:text-white text-zinc-900 flex group rounded px-4 py-2 mb-1" onClick={(event) => setModal({Alert: false})}>
                                <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">Genre</div>
                                    <div className="text-xs">Choose your Genre</div>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            )}
        </>
    )
}

export default Navbar