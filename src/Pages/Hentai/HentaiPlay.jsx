import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Database from "../../Firebase/Database";


const HentaiDetail = () => {
    const {Slug} = useParams();

    const Tb_Hentai        = Database().Tb_Hentai; 
    const Tb_HentaiDetail  = Tb_Hentai.find(doc => doc.Slug == Slug);
    const Tb_HentaiFilter  = []    
    
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
                <div className="w-full min-h-screen">
                    <div className="container md:w-10/12 md:flex block w-full relative mx-auto md:px-0 px-3 pt-20 mb-10">
                        <div className="bg-zinc-800 lg:w-9/12 md:w-8/12 w-full rounded overflow-hidden md:mb-0 mb-5"> 
                            <iframe className='w-full lg:h-[26rem] h-[20rem] rounded animate-fadeIn delay-500' scrolling="no" frameBorder="0" allowFullScreen={true}></iframe>

                            <div class="animate-fadeIn p-3">
                                <div class="flex mb-5">
                                    <div style={{ backgroundImage: `url(${Tb_HentaiDetail.Image})` }} class="bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10 mr-3"></div>
                                    <div class="w-10/12 self-start">
                                        <div class="text-zinc-500 whitespace-nowrap font-medium text-ellipsis overflow-hidden">Kansen - Inyoku no Rensa</div>
                                        <div class="text-zinc-500 flex text-xs"><i class="bi-clock-fill self-center mr-2"></i>
                                            <div class="self-center mr-3">2022-05-28</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex flex-wrap gap-1">
                                    <button class="dark:hover:bg-zinc-700/50 text-zinc-500 border-zinc-700/50 border rounded-sm text-xs px-3 py-1">Ahegao</button>
                                    <button class="dark:hover:bg-zinc-700/50 text-zinc-500 border-zinc-700/50 border rounded-sm text-xs px-3 py-1">Ahegao</button>
                                    <button class="dark:hover:bg-zinc-700/50 text-zinc-500 border-zinc-700/50 border rounded-sm text-xs px-3 py-1">Ahegao</button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/12 md:w-4/12 w-full md:pl-3 p-0">
                            <div className="grid grid-cols-2 gap-1">
                                <button className='bg-indigo-700 rounded p-5'>asdas</button>
                                <button className='bg-indigo-700 rounded p-5'>asdas</button>
                                <button className='bg-indigo-700 rounded p-5'>asdas</button>
                                <button className='bg-indigo-700 rounded p-5'>asdas</button>
                            </div>
                        </div>
                    </div>

                    <div className="container md:w-10/12 md:flex block w-full relative mx-auto md:px-0 px-3">
                        <div className="lg:w-9/12 md:w-8/12 w-full mb-5">
                            <div className="rounded grid md:grid-cols-3 grid-cols gap-2 mb-10">
                                {Tb_HentaiFilter[0].map((doc, index) => {
                                    return(
                                        <Link key={index} to={`/hentai/${doc.Slug}`} className="hover:bg-zinc-800 text-white flex gap-3 rounded p-3">     
                                            <div style={{ backgroundImage: `url(${Tb_HentaiDetail.Image})` }} class="bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10"></div>
                                            <div className="self-center text-sm font-medium">
                                                {doc.Title}
                                                <div className="flex gap-2 text-xs font-light">
                                                    <div className="bi-eye-fill"></div>
                                                    {doc.View}
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                
            }
        </>
    )
}

export default HentaiDetail