import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Tb_Post from '../Firebase/Tb_Post'

const PagePost = () => {
    const [Carousel, setCarousel] = useState([0, 1]);
    const DataMostView   = Tb_Post().UseMostView;
    const DataRecomended = Tb_Post().UseRecomended;
    const CarouselSlice  = DataRecomended.slice(Carousel[0], Carousel[1])
    
    const CarouselBtn = (event) => {
        if(event == 'Next'){
            if(Carousel[0] >= 2){
                var Start = 0
                var End   = 1
            }else{
                var Start = Carousel[0] * 1 + 1
                var End   = Carousel[1] * 1 + 1
            }
            setCarousel([Start, End])
        }else{
            if(Carousel[0] <= 0){
                var Start = 2
                var End   = 3
            }else{
                var Start = Carousel[0] * 1 - 1
                var End   = Carousel[1] * 1 - 1
            }
            setCarousel([Start, End])
        }
    }
    
    console.log(DataMostView)
    return (
        <>

            {/* <div className='container mx-auto'> */}
                {CarouselSlice.map(doc => {
                    return (
                        <div key={doc.Id} className="relative mb-24 mt-16">
                            <div className="bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 overflow-hidden w-full h-48">
                                <div style={{ backgroundImage: `url(${doc.Cover})` }} className="bg-cover bg-center blur-[100px] w-full h-full"></div>
                            </div>

                            <div className='absolute flex w-full h-full top-0 z-10'>
                                <div className='container flex self-center mx-auto'>
                                    <div className='lg:w-10/12 w-full flex justify-between mx-auto'>
                                        <button className="text-white self-center rounded-full w-10 h-10" onClick={(event) => CarouselBtn('Prev')}>
                                            <i className="bi-chevron-left text-2xl font-bold"/>
                                        </button>
                                        <button className="text-white self-center rounded-full w-10 h-10" onClick={(event) => CarouselBtn('Next')}>
                                            <i className="bi-chevron-right text-2xl font-bold"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='absolute flex w-full -bottom-12'>
                                <div className='container mx-auto'>
                                    <div className='lg:w-8/12 w-10/12 flex justify-between mx-auto'>
                                        <div className=''>
                                            <div className='text-white mb-5'>
                                                <div className='text-xs'>10231 | 22/2/2222</div>
                                                <div className="whitespace-nowrap text-ellipsis overflow-hidden text-lg font-medium lg:w-44 md:w-36 w-44 mb-3">{doc.Title} asdasdasd</div>
                                                <div className='text-xs'>{doc.Genre}</div>
                                            </div>
                                            <div className="flex mb-3">
                                                <div className='bg-white md:w-2 md:h-2 w-1 h-1 m-1'></div>
                                                <div className='bg-white md:w-2 md:h-2 w-1 h-1 m-1'></div>
                                                <div className='bg-white md:w-2 md:h-2 w-1 h-1 m-1'></div>
                                            </div>
                                            <button className="bg-indigo-500 text-white self-center rounded-full w-12 h-12 mr-3">
                                                <i className="bi-caret-right-fill text-2xl"/>
                                            </button>
                                            <button className="bg-white text-zinc-900 self-center rounded-full w-12 h-12">
                                                <i className="bi-bookmark-plus-fill text-2xl"/>
                                            </button>
                                        </div>

                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className="bg-cover rounded shadow-lg bg-top md:h-48 md:w-36 h-40 w-24"></div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className='absolute flex w-full h-full top-0'>
                                <div className='container self-end mx-auto px-3'>
                                    <div className='w-10/12 mx-auto'>
                                        <div className='flex justify-between'>
                                            <div className='self-end -mb-6'>
                                                <div className='text-white mb-5'>
                                                    <div className='text-xs'>10231 | 22/2/2222</div>
                                                    <div className='font-medium text-2xl mb-3'>{doc.Title}</div>
                                                    <div className='text-xs'>{doc.Genre}</div>
                                                </div>
                                                <button className="bg-indigo-500 text-white self-center rounded-full w-12 h-12 mr-3">
                                                    <i className="bi-caret-right-fill text-2xl"/>
                                                </button>
                                                <button className="bg-white text-zinc-900 self-center rounded-full w-12 h-12">
                                                    <i className="bi-bookmark-plus-fill text-2xl"/>
                                                </button>
                                            </div>

                                            <div className='flex'>
                                                <div style={{ backgroundImage: `url(${doc.Cover})` }} className="bg-cover rounded shadow-lg bg-top md:h-52 md:w-36 h-44 w-28 -mb-20 md:mr-28 mr-5"></div>
                                                <div className="flex self-end">
                                                    <div className='bg-white w-2 h-2 m-1'></div>
                                                    <div className='bg-white w-2 h-2 m-1'></div>
                                                    <div className='bg-white w-2 h-2 m-1'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    )}
                )}
            {/* </div> */}

            {/* <div className='mt-16'>
                {CarouselSlice.map(doc => {
                    return (
                        <div key={doc.Id} className="relative mb-10">
                            <div className="shadow-lg relative block overflow-hidden w-full lg:h-[32rem] md:h-[24rem] h-[16rem] md:animate-fadeIn">
                                <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 absolute left-0 top-0 h-full w-full z-10"></div>
                                <div style={{ backgroundImage: `url(${doc.Cover})` }} className="bg-cover bg-top absolute right-0 top-0 h-full w-2/4 z-0"></div>
                            </div>

                            <div className='absolute flex top-0 left-0 w-full h-full z-10'>
                                <div className='w-1/12 self-center'>
                                    <button className='text-zinc-500 self-center w-8 h-8' onClick={(event) => CarouselBtn('Next')}>
                                        <i className='bi-chevron-left'></i>
                                    </button>
                                </div>
                                <div className='w-7/12 text-zinc-500  self-end mb-5 animate-fadeIn'>
                                    <div className='flex text-sm'>
                                        <div className="flex border border-zinc-500 rounded-sm px-2 mb-3 mr-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>

                                        <Link to={`/${doc.Id}`} className="whitespace-nowrap text-ellipsis overflow-hidden font-medium">{doc.Title}</Link>
                                    </div>

                                    <div className='flex'>
                                        {doc.Genre.slice(0, 4).map(docs => {
                                            return (
                                                <div key={docs} className="text-zinc-500 self-center rounded-sm text-xs mr-3">
                                                    {docs}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='w-6/12 self-center flex'>
                                    <button className='text-zinc-500 self-center ml-auto w-8 h-8' onClick={(event) => CarouselBtn('Prev')}>
                                        <i className='bi-chevron-right'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> */}

            <div className="container mx-auto lg:px-2 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:w-10/12 md:w-8/12x w-full">

                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="text-zinc-500 flex mr-5">
                                    <i className="bi-clock-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">New Release</div>
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
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                <i className="bi-arrow-right"/>
                            </button>
                        </div>
                    
                        <div className="flex overflow-x-scroll no-scrollbar mb-10">
                            {DataMostView.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded mr-2 first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className="lg:h-64 lg:w-44 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-44 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
                                        <div className="flex text-xs justify-center pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        
                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="text-zinc-500 flex mr-5">
                                    <i className="bi-layers-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Trending</div>
                                        <div className="text-xs">Most view last week</div>
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
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                <i className="bi-arrow-right"/>
                            </button>
                        </div>
                    
                        <div className="flex overflow-x-scroll no-scrollbar mb-10">
                            {DataMostView.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded mr-2 first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className="lg:h-64 lg:w-44 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-44 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
                                        <div className="flex text-xs justify-center pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="text-zinc-500 flex mr-5">
                                    <i className="bi-stars text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Popular</div>
                                        <div className="text-xs">Most view</div>
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
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                <i className="bi-arrow-right"/>
                            </button>
                        </div>

                        <div className="flex overflow-x-scroll no-scrollbar mb-10">
                            {DataMostView.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded mr-2 first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className="lg:h-64 lg:w-44 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-44 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
                                        <div className="flex text-xs justify-center pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        
                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="text-zinc-500 flex mr-5">
                                    <i className="bi-hearts text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Romace Selection</div>
                                        <div className="text-xs">Romantic & cute couple</div>
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
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                <i className="bi-arrow-right"/>
                            </button>
                        </div>

                        <div className="flex overflow-x-scroll no-scrollbar mb-10">
                            {DataMostView.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded mr-2 first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className="lg:h-64 lg:w-44 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-44 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
                                        <div className="flex text-xs justify-center pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
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

export default PagePost