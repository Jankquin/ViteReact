import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Tb_Post from '../Firebase/Tb_Post'
import Tb_Recomended from '../Firebase/Tb_Recomended'

const PagePost = () => {
    const [Carousel, setCarousel] = useState([0, 1]);
    const [LoadMore, setLoadMore] = useState(12);
    const DataPost       = Tb_Post().UsePost;
    const DataMostView   = Tb_Post().UseMostView;
    const DataRecomended = Tb_Recomended().UseRecomended;
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
            <div className="container mx-auto mt-28 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:w-5/12 md:w-8/12 w-full">

                        {CarouselSlice.map(doc => {
                            return (
                                <div key={doc.Id} className="relative mb-10">
                                    <div className="group shadow-lg relative block rounded-sm overflow-hidden w-full h-48 animate-fadeIn">
                                        <div className="bg-gradient-to-r from-neutral-700 via-neutral-700 absolute left-0 top-0 h-full w-full z-10"></div>
                                        <div style={{ backgroundImage: `url(${doc.Image})` }} className="group-hover:scale-125 bg-cover bg-top scale-110 duration-500 absolute right-0 top-0 h-full w-2/4 z-0"></div>
                                    </div>

                                    <div className='absolute flex top-0 left-0 w-full h-full z-10'>
                                        <div className='w-1/12 self-center'>
                                            <button className='self-center w-8 h-8' onClick={(event) => CarouselBtn('Next')}>
                                                <i className='bi-chevron-left text-white'></i>
                                            </button>
                                        </div>
                                        <div className='w-5/12 self-end mb-3 ml-3 animate-fadeIn'>
                                            <div style={{ backgroundImage: `url(${doc.Image})` }} className="bg-no-repeat bg-cover bg-center border-2 rounded-full drop-shadow-sm w-12 h-12 mb-3"></div>
                                            <h3 className="whitespace-nowrap text-ellipsis overflow-hidden text-slate-200 font-medium mb-1">{doc.Title}</h3>
                                            <div className="flex text-white text-xs">
                                                <i className="bi-eye-fill text-sm self-center mr-2"></i>
                                                <div className="self-center">{doc.View}</div>
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

                        <div className='flex mb-5'>
                            <div className='bg-red-200 flex rounded-full w-10 h-10 mr-3'>
                                <i className='bi-eye-fill text-red-500 self-center mx-auto'></i>
                            </div>
                            <h2 className="text-slate-500 self-center font-medium">Most View</h2>
                        </div>
                    
                        <div className="flex overflow-x-scroll no-scrollbar mb-10">
                            {DataMostView.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="flex-none group mr-2 first:mr-2 last:mr-0 animate-fadeIn">
                                        <img src={doc.Image}  className="group-hover:opacity-90 rounded-sm w-28" />
                                        <h3 className="whitespace-nowrap text-ellipsis overflow-hidden text-slate-800 text-sm text-center w-28 px-2 py-1">{doc.Title}</h3>
                                        <div className="flex text-slate-600 text-xs font-thin justify-center pb-3">
                                            <i className="bi-eye-fill text-sm self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className='flex mb-5'>
                            <div className='bg-indigo-200 flex rounded-full w-10 h-10 mr-3'>
                                <i className='bi-grid-fill text-indigo-500 self-center mx-auto'></i>
                            </div>
                            <h2 className="text-slate-500 self-center font-medium">New Uploaded</h2>
                        </div>

                        <div className="grid md:grid-cols-4 grid-cols-3 gap-2 rounded-sm overflow-hidden mb-10">
                            {SliceData.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="group rounded-sm overflow-hidden w-full animate-fadeIn">    
                                        <img src={doc.Image} className="group-hover:opacity-90 rounded-sm" alt={doc.Title} height="40"/> 
                                        <h3 className="whitespace-nowrap text-ellipsis overflow-hidden text-slate-800 text-sm text-center px-2 py-1">{doc.Title}</h3>
                                        <div className="flex text-slate-600 text-xs font-thin justify-center pb-3">
                                            <i className="bi-eye-fill text-sm self-center mr-2"></i>
                                            <div className="self-center">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        {LoadMore < DataPost.length && (
                            <button className="hover:bg-indigo-600 hover:text-white text-slate-800 text-xs font-medium block uppercase rounded-sm mx-auto px-4 py-2" onClick={LoadMoreBtn} >
                                <span>Load More</span>
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default PagePost