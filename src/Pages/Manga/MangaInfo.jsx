import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Database from "../../Firebase/Database";


const HomePage = () => {
    const {Slug} = useParams();
    const Tb_Manga           = Database().Tb_Manga; 

    const Tb_MangaDetail      = Tb_Manga.find(doc => doc.Slug == Slug);

    return (
        <>
            {Tb_MangaDetail &&
                <>
                    <div className="relative">
                        <div className="bg-gradient-to-bl from-indigo-700/90 to-purple-700/90 flex h-52 w-full md:p-0 px-3">
                            <div className="container md:w-10/12 w-full self-end flex mx-auto -mb-14">
                                <div style={{backgroundImage: `url(${Tb_MangaDetail.Cover})`, backgroundPosition: 'center 30%'}} className="bg-cover bg-center shadow-lg rounded md:h-52 md:w-36 h-40 w-28 mr-3"></div>

                                <div className="grid content-between">
                                    <div className="grid">
                                        <div id="Title" className="text-white md:text-4xl text-lg font-bold lg:w-96 md:w-72 w-60 mb-3">{Tb_MangaDetail.Title}</div>

                                        <div className="text-white flex mb-2">
                                            <div className="flex font-thin text-xs mr-3">
                                                <i className="bi-person-fill self-center mr-2"/>    
                                                <div className="self-center">{Tb_MangaDetail.Author}</div>
                                            </div>
                                            <div className="flex font-thin text-xs mr-3">
                                                <i className="bi-eye-fill self-center mr-2"/>    
                                                <div className="self-center">123123</div>
                                            </div>
                                        </div>

                                        <div className='flex'>
                                            <Link to={`/manga`} className="hover:bg-zinc-700/50 text-white text-center text-xs font-thin rounded px-1 mr-1">Genre</Link>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 self-end">
                                        <button className="hover:bg-indigo-700 bg-indigo-800 text-white rounded flex gap-3 justify-center md:px-10 px-4 py-2" title='Choose Your Genre' >
                                            <i className="bi-book-fill text-white self-center"></i>
                                            <div className='self-center text-xs font-medium md:block hidden'>Start Reading</div>
                                        </button>
                                        <Link to={`/manga`} className="hover:bg-zinc-700 bg-zinc-800 text-white rounded flex gap-3 justify-center px-4 py-2" title='Choose Your Genre'>
                                            <div className='self-center text-xs font-medium md:block hidden'>Back</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dark:bg-zinc-900 bg-white h-[150vh] w-full">
                            <div className="dark:bg-zinc-900 bg-white h-[50rem] w-full pt-14 px-3">
                                <div className="container mx-auto self-end mt-5">
                                    <div className="flex md:flex-row flex-col md:w-10/12 w-full mx-auto mb-5">
                                        <div className="md:w-3/12 md:pr-5 md:mb-0 mb-5">
                                            <div className="dark:text-zinc-100 text-zinc-700 flex mb-3">
                                                <i className="bi-info-circle-fill text-xl self-center mr-3"/>    
                                                <div className="font-medium self-center">Info</div>
                                            </div>
                                            
                                            <div className="mb-3">
                                                <div className='dark:text-zinc-100 text-zinc-700 font-medium mb-1'>Author</div>
                                                <Link to={`/manga`} className="hover:bg-zinc-700/50 bg-zinc-800 text-white text-xs font-thin rounded p-1" title={Tb_MangaDetail.Author}>
                                                    {Tb_MangaDetail.Author}
                                                </Link>
                                            </div>

                                            <div className="mb-3">
                                                <div className='dark:text-zinc-100 text-zinc-700 font-medium mb-1'>Genre</div>
                                                <div className='grid grid-cols-4 gap-1 text-white'>
                                                    {Tb_MangaDetail.Genre.map((doc, index) => {
                                                        return (
                                                            <Link to={`/manga`} key={index} className="hover:bg-zinc-700/50 bg-zinc-800 text-white text-center text-xs font-thin rounded p-1" title={Tb_MangaDetail.Author}>
                                                                {doc}
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:w-9/12">
                                            <div className="dark:text-zinc-100 text-zinc-700 flex mb-3">
                                                <i className="bi-grid-fill text-xl self-center mr-3"/>    
                                                <div className="font-medium self-center">Last Added</div>
                                            </div>
                                            <div className="rounded overflow-hidden">
                                                {Tb_MangaDetail.Chapter.map((doc, index) =>                        
                                                    <Link to={`/mangaread/${Slug}/${index}`} key={index} className="hover:bg-zinc-700/50 bg-zinc-800 dark:text-zinc-100 text-zinc-700 block p-3">
                                                        {doc.Title} - {doc.View}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> 
            }
        </>
    )
}

export default HomePage