import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Database from "../../Firebase/Database";


const HentaiDetail = () => {
    const {Slug} = useParams();
    const Tb_Hentai         = Database().Tb_Hentai; 

    const [Modal, setModal] = useState({});
    const Tb_HentaiDetail   = Tb_Hentai.find(doc => doc.Slug == Slug);
    const Tb_HentaiFilter   = []
    
    
    if(Tb_HentaiDetail && Tb_HentaiDetail.Title.split(' ').length > 3){
        const Tb_HentaiSplit   = Tb_HentaiDetail && Tb_HentaiDetail.Title.split(' ', 3).join(" ").toString().toLowerCase()
        const Tb_HentaiSimilar = Tb_Hentai.filter(doc => doc.Title.toLowerCase().includes(Tb_HentaiSplit));
        Tb_HentaiFilter.push(Tb_HentaiSimilar)
    }else{
        const Tb_HentaiSplit   = Tb_HentaiDetail && Tb_HentaiDetail.Title.split(' ', 1).join(" ").toString().toLowerCase()
        const Tb_HentaiSimilar = Tb_Hentai.filter(doc => doc.Title.toLowerCase().includes(Tb_HentaiSplit));
        Tb_HentaiFilter.push(Tb_HentaiSimilar)
    }


    return (
        <>
            {Tb_HentaiDetail &&
                <>
                    <div className={`bg-gradient-to-bl from-indigo-700/90 to-purple-700/90 md:h-72 h-48 w-full relative shadow-xl mx-auto`}>
                        <div style={{backgroundImage: `url(${Tb_HentaiDetail.Image})`, backgroundPosition: 'center 30%'}} className="bg-cover absolute top-0 left-0 h-full w-full -z-10"/>
                    </div>
                    
                    <div className="container md:w-10/12 relative mx-auto md:px-0 px-3 md:-mt-48 -mt-20">
                        <div className="dark:bg-zinc-800 bg-white lg:w-8/12 md:w-10/12 rounded shadow mx-auto mb-14">
                            <iframe  className='w-full lg:h-[26rem] h-[20rem] animate-fadeIn delay-500' scrolling="no" frameBorder="0" allowFullScreen={true}></iframe>

                            <div className="dark:border-zinc-700 border-zinc-200 border-t relative p-3">
                                <div className="flex gap-2 justify-between">
                                    <div className="w-10/12 flex gap-3">
                                        <div style={{ backgroundImage: `url(${Tb_HentaiDetail.Image})` }} className="bg-no-repeat bg-cover bg-center shadow rounded-full self-center w-12 h-12"></div>
                                        
                                        <div className="w-10/12 grid">
                                            <div className="dark:text-white text-zinc-900 font-bold whitespace-nowrap text-ellipsis text-lg overflow-hidden mb-2">{Tb_HentaiDetail.Title}</div>
                                            <div className="dark:text-white text-zinc-900 flex gap-2 h-9">
                                                <i className='bi-eye-fill self-center'></i>
                                                <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis overflow-hidden">{Tb_HentaiDetail.View}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="dark:hover:bg-zinc-700 dark:text-white hover:bg-zinc-200 text-zinc-900 hover:shadow flex gap-2 justify-center rounded-full h-9 w-9" 
                                        onClick={(event) => {
                                            Modal.Genre ? 
                                                setModal({}) :
                                                setModal({Genre: true})
                                            }
                                        }>
                                        <i className='bi-chevron-down self-center'></i>
                                    </button>

                                    <div className="absolute flex gap-1 bottom-3 right-3">
                                        <button className="dark:hover:bg-zinc-700 dark:text-white hover:bg-zinc-200 text-zinc-900 hover:shadow flex gap-2 justify-center rounded h-9 px-3">
                                            <i className='bi-flag-fill self-center'></i>
                                            <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis md:block hidden overflow-hidden">Report</div>
                                        </button>
                                        <button className="dark:hover:bg-zinc-700 dark:text-white hover:bg-zinc-200 text-zinc-900 hover:shadow flex gap-2 justify-center rounded h-9 px-3">
                                            <i className='bi-cloud-arrow-down-fill self-center'></i>
                                            <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis overflow-hidden">Download</div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={`${!Modal.Genre && 'hidden'} p-3`}>
                                <div className={`dark:bg-zinc-700 bg-zinc-200 grid grid-cols-2 gap-5 p-5 rounded animate-fadeDown delay-500`}>
                                    <div className="dark:text-white text-zinc-900 rounded text-left">
                                        <div className="flex gap-2">
                                            <i className='bi-person-fill'></i>
                                            <div className="">Brand</div>
                                        </div>
                                        <div className="font-bold whitespace-nowrap text-ellipsis overflow-hidden animate-fadeDown delay-500">{Tb_HentaiDetail.Brand}</div>
                                    </div>

                                    <div className="dark:text-white text-zinc-900 rounded text-left">
                                        <div className="flex gap-2">
                                            <i className='bi-calendar-fill'></i>
                                            <div className="">Released</div>
                                        </div>
                                        <div className="font-bold whitespace-nowrap text-ellipsis overflow-hidden animate-fadeDown delay-500">{Tb_HentaiDetail.Released.toDate().toLocaleDateString('sv')}</div>
                                    </div>
                                    
                                    <div className="dark:text-white text-zinc-900 rounded text-left">
                                        <div className="flex gap-2">
                                            <i className='bi-eye-fill'></i>
                                            <div className="">Genre</div>
                                        </div>
                                        <div className='flex flex-wrap gap-2 rounded animate-fadeDown delay-500'>
                                            <button className="dark:text-white text-zinc-900 text-xs font-bold">Ahegao</button>
                                            <button className="dark:text-white text-zinc-900 text-xs font-bold">Ahegao</button>
                                            <button className="dark:text-white text-zinc-900 text-xs font-bold">Ahegao</button>
                                            <button className="dark:text-white text-zinc-900 text-xs font-bold">Ahegao</button>
                                        </div>
                                    </div>
                                    
                                    <div className="dark:text-white text-zinc-900 rounded text-left">
                                        <div className="flex gap-2">
                                            <i className='bi-clock-fill'></i>
                                            <div className="">Uploaded</div>
                                        </div>
                                        <div className="font-bold whitespace-nowrap text-ellipsis overflow-hidden animate-fadeDown delay-500">{Tb_HentaiDetail.Created_At.toDate().toLocaleDateString('sv')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-8/12 overflow-hidden mx-auto">
                            <div className="flex gap-5 mb-5 animate-fadeIn delay-500">
                                <div className="dark:text-white text-zinc-900 flex gap-3">
                                    <i className="bi-list text-2xl self-center"/>    
                                    <div className="font-bold self-center">Other</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 animate-fadeIn delay-500">
                                {Tb_HentaiFilter[0].slice(0, 5).map((doc, index) => {
                                    return(
                                        <Link key={index} to={`/hentai/${doc.Slug}`} className="hover:bg-zinc-800 text-white flex gap-3 rounded p-3">     
                                            <div style={{ backgroundImage: `url(${doc.Image})` }} className="bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10"></div>
                                            <div className="w-10/12 self-center">
                                                <div className="text-sm text-ellipsis whitespace-nowrap font-bold overflow-hidden">{doc.Title}</div>

                                                <div className="flex gap-2 text-xs">
                                                    <div className="bi-eye-fill self-center"></div>
                                                    <div className="self-center">{doc.View}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default HentaiDetail