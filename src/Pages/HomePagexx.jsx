import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Database from "../Firebase/Database";

const HomePage = () => {
    const Session   = JSON.parse(localStorage.getItem(btoa('Auth')));
    const Tb_Manga  = Database().Tb_Manga;

    const [Modal, setModal] = useState({});
    const [CarouselDot, setCarouselDot] = useState(0);
    const Carousel  = Tb_Manga[CarouselDot];
    
    // console.log(Modal)
    return (
        <>
            <div style={{backgroundImage: `url(${Carousel && (Carousel.Cover)})`, backgroundPosition: 'center 25%'}} className="bg-cover fixed w-full top-0 left-0 h-52 -z-10">
                <div className="bg-gradient-to-l from-zinc-900/50 to-zinc-900/20 w-full h-full lg:backdrop-blur-[3px] backdrop-blur-[1px]"></div>
            </div>
          
            <div className="bg-gradient-to-t lg:from-zinc-900/50 from-zinc-900 to-zinc-900/20 flex h-52 w-full">
                <div className="container md:w-10/12 w-full h-full flex relative self-center mx-auto">
                    <div className='absolute w-full flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <button className="text-white self-center rounded-full w-8 h-8" onClick={(event) => setCarouselDot(CarouselDot == 0 ?  20 : CarouselDot * 1 - 1)}>
                            <i className="bi-chevron-left text-2xl font-bold"/>
                        </button>
                        <button className="text-white self-center rounded-full w-8 h-8" onClick={(event) => setCarouselDot(CarouselDot == 20 ?  0 : CarouselDot * 1 + 1)}>
                            <i className="bi-chevron-right text-2xl font-bold"/>
                        </button>
                    </div>
                        
                    <div className="w-10/12 flex gap-3 mx-auto md:mt-16 mt-20">
                        <div style={{ backgroundImage: `url(${Carousel && (Carousel.Cover)})` }} className="bg-cover bg-center md:block hidden rounded-full h-12 w-12"></div>

                        <div className="animate-fadeIn">
                            <div id="Title" className="text-white md:text-3xl text-xl font-bold lg:w-72 md:w-64 w-56 mb-3">{Carousel && (Carousel.Title)}</div>

                            <div className="text-white flex">
                                {Carousel && 
                                    Carousel.Genre.slice(0, 4).map(doc => {
                                        return (
                                            <div key={doc} className="text-xs px-1 mr-1">{doc}</div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='md:w-8/12 w-10/12 flex justify-between absolute left-1/2 -translate-x-1/2 -bottom-5'>
                        <div className="flex gap-2">
                            <button className="bg-indigo-800 hover:bg-indigo-700 text-white rounded-full left-0 w-10 h-10">
                                <i className="bi bi-caret-right-fill text-xl self-center"></i>
                            </button>
                            {Session &&
                                <button className="bg-zinc-200 hover:bg-zinc-300 text-indigo-700 rounded-full left-0 w-10 h-10">
                                    <i className="bi bi-bookmark-plus-fill text-xl self-center"></i>
                                </button>
                            }
                        </div>

                        <div className="flex">
                            <button className='border rounded-full w-2 h-2 mr-1 bg-white'></button>
                            <button className='border rounded-full w-2 h-2 mr-1 bg-white'></button>
                            <button className='border rounded-full w-2 h-2 mr-1 bg-white'></button>
                            <button className='border rounded-full w-2 h-2 mr-1 bg-white'></button>
                            <button className='border rounded-full w-2 h-2 mr-1 bg-white'></button>
                            <button className='border rounded-full w-2 h-2 mr-1 bg-white'></button>
                            <button className='border rounded-full w-2 h-2 mr-1 bg-white'></button>
                            <button className='border rounded-full w-2 h-2 mr-1 bg-white'></button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="dark:bg-zinc-900 bg-zinc-200 w-full min-h-screen">
                <div className="container md:w-10/12 w-full relative mx-auto md:px-0 px-3 pt-20">
                    <div className="dark:bg-zinc-800 bg-white absolute flex justify-between rounded left-0 -top-5 w-full p-3 hidden">
                        <div className="flex">
                            <button name='Type' className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center md:min-w-[7rem] px-4 py-2" title='Choose Your Type' onClick={(event) => {
                                Modal.Modal == "Type" ?
                                    setModal((doc) => ({...doc, Modal: false})) :
                                    setModal((doc) => ({...doc, Modal: "Type"}))
                                }}>
                                <i className="bi-exclude self-center"></i>
                                <div className='self-center text-xs font-medium uppercase md:block hidden ml-3'>Type</div>
                            </button>
                            <button name='Genre' className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center md:min-w-[7rem] px-4 py-2" title='Choose Your Genre' onClick={(event) => {
                                Modal.Modal == "Genre" ?
                                    setModal((doc) => ({...doc, Modal: false})) :
                                    setModal((doc) => ({...doc, Modal: "Genre"}))
                                }}>
                                <i className="bi-layers-fill self-center"></i>
                                <div className='self-center text-xs font-medium uppercase md:block hidden ml-3'>Genre</div>
                            </button>
                            <button name='Brand' className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center md:min-w-[7rem] px-4 py-2" title='Choose Your Brand' onClick={(event) => {
                                Modal.Modal == "Brand" ?
                                    setModal((doc) => ({...doc, Modal: false})) :
                                    setModal((doc) => ({...doc, Modal: "Brand"}))
                                }}>
                                <i className="bi-exclude self-center"></i>
                                <div className='self-center text-xs font-medium uppercase md:block hidden ml-3'>Brand</div>
                            </button>
                            <button name='Filter' className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center md:min-w-[7rem] px-4 py-2" title='Order List' onClick={(event) => {
                                Modal.Modal == "Filter" ?
                                    setModal((doc) => ({...doc, Modal: false})) :
                                    setModal((doc) => ({...doc, Modal: "Filter"}))
                                }}>
                                <i className="bi-sort-down self-center"></i>
                                <div className='self-center text-xs font-medium uppercase md:block hidden ml-3'>Filter</div>
                            </button>
                        </div>

                        <button name='Reset' className="hover:bg-indigo-700 bg-indigo-800 text-white text-xs font-medium uppercase rounded justify-center min-w-[7rem] px-4 py-2" title='Reset List'>Reset</button>
                    </div>

                    <div className="">
                        {Modal.Modal == 'Type' &&
                            <div className="dark:bg-zinc-800 bg-white text-white rounded p-3 mb-3">Type</div>
                        }
                        {Modal.Modal == 'Genre' &&
                            <div className="dark:bg-zinc-800 bg-white text-white rounded p-3 mb-3">Genre</div>
                        }
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
                            <Link to={`/manga`} className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded-full flex justify-center w-10 h-10">
                                <i className="bi-arrow-right self-center"/>
                            </Link>
                        </div>

                        <div className="flex overflow-x-scroll mb-10 pb-5">
                            {Tb_Manga.map(doc => {
                                return (
                                    <Link to={`/manga/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded mr-2 first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className="lg:h-52 lg:w-36 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
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