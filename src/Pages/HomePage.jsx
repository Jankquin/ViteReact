import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Database from "../Firebase/Database";



const HomePage = () => {
    const Tb_Hentai = Database().Tb_Hentai;
    const Tb_Manga  = Database().Tb_Manga;
    
    const [CarouselDot, setCarouselDot] = useState(0);
    const [Navbar, setNavbar] = useState(false);
    
    const Carousel  = Tb_Manga[CarouselDot];

    useEffect(() => {
        NavbarBg()
        window.addEventListener("scroll", NavbarBg)
    }, []);

    const NavbarBg = () => {
        if (window.scrollY >= 5) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }


    return (
        <>
            {Carousel &&
                <div className={`${!Navbar && 'p-3'} duration-500`}>
                    <div className={`${!Navbar && 'container md:w-10/12 rounded-xl'} bg-gradient-to-bl from-indigo-700/90 to-purple-700/90 md:h-72 h-48 w-full relative shadow-xl mx-auto mt-14 duration-500`}>
                        
                        <div className="flex w-10/12 gap-5 h-full mx-auto md:pt-16 pt-3"> 
                            <div style={{ backgroundImage: `url(${Carousel.Cover})` }} className="dark:bg-zinc-800 bg-zinc-200 bg-cover bg-center shadow-lg md:block hidden rounded h-64 w-44 duration-500"/>

                            <div className="animate-fadeIn mb-5">
                                <div className="text-white md:text-lg md:mb-3">QueenBee</div>

                                <div id="Title" className="text-white md:text-3xl text-xl font-bold lg:w-72 md:w-64 w-56 mb-3">{Carousel.Title}</div>

                                <div className="text-white flex mb-5">
                                    {Carousel.Genre.slice(0, 4).map(doc => {
                                            return (
                                                <div key={doc} className="text-xs px-1 mr-1">{doc}</div>
                                            )
                                        }
                                    )}
                                </div>

                                <Link to={`manga/${Carousel.Id}`} className="bg-white hover:bg-zinc-200 text-indigo-700 flex gap-2 justify-center rounded-full w-[7rem] h-9">
                                    <div className="text-sm font-bold self-center">Detail</div>
                                </Link>
                            </div>
                        </div>

                        <div className='absolute w-full flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:px-3'>
                            <button className="text-white self-center rounded-full w-8 h-8" onClick={(event) => setCarouselDot(CarouselDot == 0 ?  4 : CarouselDot * 1 - 1)}>
                                <i className="bi-chevron-left text-2xl font-bold"/>
                            </button>
                            <button className="text-white self-center rounded-full w-8 h-8" onClick={(event) => setCarouselDot(CarouselDot == 4 ?  0 : CarouselDot * 1 + 1)}>
                                <i className="bi-chevron-right text-2xl font-bold"/>
                            </button>
                        </div>

                        <div className="absolute right-10 bottom-10 flex">
                            {Tb_Manga.slice(0, 5).map((doc, index) => {
                                return (
                                    <button key={index} className={`${index == CarouselDot ? 'bg-white' : ''} border rounded-full w-2 h-2 mr-1`}></button>
                                )
                            })}
                        </div>

                        <div style={{backgroundImage: `url(${Carousel.Cover})`, backgroundPosition: 'center 30%'}} className="bg-cover absolute rounded-xl top-0 left-0 h-full w-full -z-10 duration-500"/>
                    
                    </div>
                </div>
            }
            
            <div className="w-full min-h-screen">
                <div className="container md:w-10/12 w-full relative mx-auto md:px-0 px-3 pt-20">

                    <div id="hentai">
                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="dark:text-white text-zinc-900 flex mr-5">
                                    <i className="bi-images text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Hentai Anime</div>
                                        <div className="text-xs">21 December 2022</div>
                                    </span>
                                </div>
                                <div className="dark:text-white text-zinc-900 text-sm text-center md:grid grid-cols-5 hidden divide-x divide-zinc-500 self-center">
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>Loli</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>Milf</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>Romace</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>School</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>Vanilla</Link>
                                    </div>
                                </div>
                            </div>
                            <Link to={`hentai`} className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded-full flex justify-center w-10 h-10">
                                <i className="bi-arrow-right self-center"/>
                            </Link>
                        </div>

                        <div className="flex gap-2 overflow-x-scroll mb-10 pb-5">
                            {Tb_Hentai.map(doc => {
                                return (
                                    <Link to={`/hentai/${doc.Slug}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Image})` }} className="lg:h-64 lg:w-44 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-36 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
                                        <div className="flex text-xs justify-center pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div id="manga">
                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="dark:text-white text-zinc-900 flex mr-5">
                                    <i className="bi-images text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Manga / Doujin</div>
                                        <div className="text-xs">21 December 2022</div>
                                    </span>
                                </div>
                                <div className="dark:text-white text-zinc-900 text-sm text-center md:grid grid-cols-5 hidden divide-x divide-zinc-500 self-center">
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>Loli</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>Milf</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>Romace</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>School</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700 text-xs font-thin rounded-sm px-2 block'>Vanilla</Link>
                                    </div>
                                </div>
                            </div>
                            <Link to={`manga`} className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded-full flex justify-center w-10 h-10">
                                <i className="bi-arrow-right self-center"/>
                            </Link>
                        </div>

                        <div className="flex gap-2 overflow-x-scroll mb-10 pb-5">
                            {Tb_Manga.map(doc => {
                                return (
                                    <Link to={`/manga/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className="lg:h-64 lg:w-44 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-36 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
                                        <div className="flex text-xs justify-center pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">Chapter 1</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage