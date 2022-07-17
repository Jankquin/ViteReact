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
                        <div style={{backgroundImage: `url(${Tb_HentaiDetail.Image})`, backgroundPosition: 'center 30%'}} className="bg-cover absolute rounded-xl top-0 left-0 h-full w-full -z-10 duration-500"/>
                    </div>
                    
                    <div className="container md:w-10/12 relative mx-auto md:px-0 -mt-32 px-3 mb-96">
                        <div className="dark:bg-zinc-800 bg-white md:w-8/12 rounded shadow overflow-hidden mx-auto mb-14">
                            <iframe src={Tb_HentaiDetail.Embed} className='w-full lg:h-[26rem] h-[20rem] animate-fadeIn delay-500' scrolling="no" frameBorder="0" allowFullScreen={true}></iframe>

                            <div className="border-t dark:border-zinc-700 border-zinc-200 p-3">
                                <div className="flex gap-3 mb-3">
                                    <div style={{ backgroundImage: `url(${Tb_HentaiDetail.Image})` }} className="bg-no-repeat bg-cover bg-center shadow rounded-full self-start w-12 h-12"></div>
                                    
                                    <div className="w-10/12 self-start">
                                        <div className="dark:text-white text-zinc-900 whitespace-nowrap font-bold text-ellipsis overflow-hidden">Kansen - Inyoku no Rensa</div>
                                        <div className="dark:text-white text-zinc-900 flex gap-2 text-xs">
                                            <i className="bi-clock-fill self-center"></i>
                                            <div className="self-center">2022-05-28</div>
                                        </div>
                                    </div>

                                    <button className='dark:hover:bg-zinc-700 dark:text-white hover:bg-zinc-200 text-zinc-900 hover:shadow self-center rounded-full h-10 w-10' 
                                        onClick={(event) => {
                                            Modal.Genre ? 
                                                setModal({}) :
                                                setModal({Genre: true})
                                            }
                                        }>

                                        <i className='bi-chevron-down self-center'></i>
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                                    <button className="dark:hover:bg-zinc-700 hover:bg-zinc-200 dark:text-white text-zinc-900 hover:shadow flex gap-2 justify-center rounded h-10 px-3">
                                        <i className='bi-person-fill self-center'></i>
                                        <div className="text-sm font-bold self-center">Marry Jane</div>
                                    </button>
                                    <button className="dark:hover:bg-zinc-700 hover:bg-zinc-200 dark:text-white text-zinc-900 hover:shadow flex gap-2 justify-center rounded h-10 px-3">
                                        <i className='bi-eye-fill self-center'></i>
                                        <div className="text-sm font-bold self-center">12312</div>
                                    </button>
                                    <button className="dark:hover:bg-zinc-700 hover:bg-zinc-200 dark:text-white text-zinc-900 hover:shadow flex gap-2 justify-center rounded h-10 px-3">
                                        <i className='bi-flag-fill self-center'></i>
                                        <div className="text-sm font-bold self-center">Report</div>
                                    </button>
                                    <button className="dark:bg-zinc-700 bg-zinc-200 dark:text-white text-zinc-900 shadow flex gap-2 justify-center rounded h-10 px-3">
                                        <i className='bi-cloud-arrow-down-fill self-center'></i>
                                        <div className="text-sm font-bold self-center">Download</div>
                                    </button>
                                </div>

                                <div className={`${!Modal.Genre && 'hidden'} flex flex-wrap rounded mt-3 animate-fadeDown`}>
                                    <button className="dark:hover:bg-zinc-700 dark:text-white hover:bg-zinc-200 text-zinc-900 text-xs rounded-sm px-4 py-1">Ahegao</button>
                                    <button className="dark:hover:bg-zinc-700 dark:text-white hover:bg-zinc-200 text-zinc-900 text-xs rounded-sm px-4 py-1">Ahegao</button>
                                    <button className="dark:hover:bg-zinc-700 dark:text-white hover:bg-zinc-200 text-zinc-900 text-xs rounded-sm px-4 py-1">Ahegao</button>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-8/12 overflow-hidden mx-auto">
                            <div className="flex gap-5 mb-5">
                                <div className="dark:text-white text-zinc-900 flex gap-3">
                                    <i className="bi-list text-2xl self-center"/>    
                                    <div className="font-bold self-center">Other</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 animate-fadeIn">
                                {Tb_HentaiFilter[0].slice(0, 5).map((doc, index) => {
                                    return(
                                        <Link key={index} to={`/hentai/${doc.Slug}`} className="hover:bg-zinc-800 text-white flex gap-3 rounded p-3">     
                                            <div style={{ backgroundImage: `url(${doc.Image})` }} className="bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10"></div>
                                            <div className="w-10/12 self-center">
                                                <div className="text-sm text-ellipsis whitespace-nowrap font-bold overflow-hidden">{doc.Title} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, illo.</div>

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