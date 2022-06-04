import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Tb_Post from '../Firebase/Tb_Post'

const PagePost = () => {
    const [Carousel, setCarousel] = useState([0, 1]);
    const [LoadMore, setLoadMore] = useState(8);
    const DataPost       = Tb_Post().UsePost;
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
    
    const LoadMoreBtn = () => {
        const GetLoadMore = LoadMore + 12;
        setLoadMore(GetLoadMore);
    }

    const SliceData = DataPost.slice(0, LoadMore);


    return (
        <>
            <div className='mt-16'>
                {CarouselSlice.map(doc => {
                    return (
                        <div key={doc.Id} className="relative mb-10">
                            <div className="group shadow-lg relative block overflow-hidden w-full lg:h-[32rem] md:h-[24rem] h-[16rem] md:animate-fadeIn">
                                <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 absolute left-0 top-0 h-full w-full z-10"></div>
                                <div style={{ backgroundImage: `url(${doc.Cover})` }} className="group-hover:scale-125 bg-cover bg-top scale-110 duration-500 absolute right-0 top-0 h-full w-2/4 z-0"></div>
                            </div>

                            <div className='absolute flex top-0 left-0 w-full h-full z-10'>
                                <div className='w-1/12 self-center'>
                                    <button className='self-center w-8 h-8' onClick={(event) => CarouselBtn('Next')}>
                                        <i className='bi-chevron-left text-white'></i>
                                    </button>
                                </div>
                                <div className='w-7/12 self-end mb-5 animate-fadeIn'>
                                    <div className='flex text-white text-sm'>
                                        <div className="flex border rounded-sm px-2 mb-3 mr-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>

                                        <Link to={`/${doc.Id}`} className="whitespace-nowrap text-ellipsis overflow-hidden font-medium">{doc.Title}</Link>
                                    </div>

                                    <div className='flex'>
                                        {doc.Genre.slice(0, 4).map(docs => {
                                            return (
                                                <div key={docs} className="text-white self-center rounded-sm text-xs mr-3">
                                                    {docs}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='w-6/12 self-center flex'>
                                    <button className='self-center ml-auto w-8 h-8' onClick={(event) => CarouselBtn('Prev')}>
                                        <i className='bi-chevron-right text-white'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="container mx-auto lg:px-2 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:w-10/12 md:w-8/12x w-full">

                        <div className="flex justify-between mb-5">
                            <div className="text-zinc-500 flex">
                                <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">New Uploaded</div>
                                    <div className="text-xs">Repost content</div>
                                </span>
                            </div>
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                <i className="bi-arrow-right"/>
                            </button>
                        </div>
                    
                        <div className="flex overflow-x-scroll no-scrollbar mb-10">
                            {DataMostView.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded mr-1 first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className='bg-zinc-700 bg-cover bg-top rounded h-52 w-36 animate-fadeIn'></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center w-36 px-2 py-1">{doc.Title}</div>
                                        <div className="flex text-xs justify-center pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="flex justify-between mb-5">
                            <div className="text-zinc-500 flex">
                                <i className="bi-lightning-charge-fill text-2xl self-center mr-3"/>    
                                <span>
                                    <div className="font-medium">New Updated</div>
                                    <div className="text-xs">Repost content</div>
                                </span>
                            </div>
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                <i className="bi-arrow-right"/>
                            </button>
                        </div>

                        <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-1 rounded overflow-hidden mb-10">
                            {SliceData.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 group rounded first:ml-0 last:mr-0 overflow-hidden">
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className='bg-zinc-700 bg-cover bg-top rounded lg:h-64 md:h-56 h-52 w-full animate-fadeIn'></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center w-36 px-2 py-1">{doc.Title}</div>
                                        <div className="flex text-xs justify-center pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        {LoadMore < DataPost.length && (
                            <button className="flex hover:bg-indigo-800 hover:text-white text-zinc-500 rounded justify-center min-w-[7rem] px-4 py-2 mx-auto" onClick={LoadMoreBtn}>
                                <span className="text-sm self-center">Load More</span>
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default PagePost