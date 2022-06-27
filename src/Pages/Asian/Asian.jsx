import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Database from '../../Firebase/Database'

const Asian = () => {   
    const [Load, setLoad]  = useState(6);

    const Tb_AsianNude      = Database().Tb_AsianNude;
    const GetTb_AsianNude   = Tb_AsianNude.slice(0, Load);


    return (
        <>
            <div className="container mx-auto lg:px-2 px-3 py-5 mt-16">
                <div className="flex justify-center mb-10">
                    <div className="md:w-10/12 w-full">
                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="text-zinc-500 flex mr-5">
                                    <i className="bi-images text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Asian Nude</div>
                                        <div className="text-xs">21 December 2022</div>
                                    </span>
                                </div>
                                <div className="text-zinc-500 text-sm text-center md:grid grid-cols-5 hidden divide-x divide-zinc-500 self-center">
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700/50 rounded-sm px-2 block'>Loli</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700/50 rounded-sm px-2 block'>Milf</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700/50 rounded-sm px-2 block'>Romace</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700/50 rounded-sm px-2 block'>School</Link>
                                    </div>
                                    <div className='px-1'>
                                        <Link to={`/`} className='dark:hover:bg-zinc-700/50 rounded-sm px-2 block'>Vanilla</Link>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/asian`} className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                <i className="bi-arrow-right"/>
                            </Link>
                        </div>

                        <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-2 mb-10">
                            {GetTb_AsianNude &&
                                GetTb_AsianNude.map((doc, index) => {
                                    return (
                                        <Link to={`/asian/${doc.Id}`} key={index} className="hover:bg-zinc-700/50 text-zinc-500 rounded">
                                            <img src={doc.Cover} height="245" width="172" className="rounded object-cover min-h-max w-full" />
                                            <div className="text-ellipsis text-sm font-medium text-center whitespace-nowrap overflow-hidden px-2 py-1">{doc.Title}</div>
                                            <div className="flex text-xs justify-center pb-3">
                                                <i className="bi-eye-fill self-center mr-2"></i>
                                                <div className='text-xs self-center'>{doc.View}</div>
                                            </div>
                                        </Link>
                                    )
                                }) 
                            }
                        </div>
                        
                        {Load < Tb_AsianNude.length &&
                            <button className="flex hover:bg-indigo-700 hover:text-white text-zinc-500 rounded justify-center min-w-[7rem] px-4 py-2 mx-auto" onClick={(event) => setLoad(Load + 6)}>
                                <span className="text-sm self-center">Load More</span>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Asian