import { setDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Tb_Post from '../Firebase/Tb_Post'

const PagePost = () => {
    const DataCarousel   = Tb_Post().UseDataCarousel;
    const DataNewRelease = Tb_Post().UseDataNewRelease;
    const DataPopular    = Tb_Post().UseDataPopular;

    const [CarouselIndicator, setCarouselIndicator] = useState(0);
    const Carousel = DataCarousel[CarouselIndicator]


    return (
        <>
            <div className="relative my-16 h-48">
                <div className="absolute bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 overflow-hidden w-full h-full">
                    <div style={{ backgroundImage: `url(${Carousel && (Carousel.Cover)})` }} className="bg-cover bg-center blur-[100px] w-full h-full"></div>
                </div>

                {Carousel && (
                    <div className='relative container mx-auto h-full'>
                        <div className='absolute lg:w-10/12 w-full flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <button className="text-white self-center rounded-full w-10 h-10" onClick={(event) => setCarouselIndicator(CarouselIndicator == 0 ?  2 : CarouselIndicator * 1 - 1)}>
                                <i className="bi-chevron-left text-2xl font-bold"/>
                            </button>
                            <button className="text-white self-center rounded-full w-10 h-10" onClick={(event) => setCarouselIndicator(CarouselIndicator == 7 ?  0 : CarouselIndicator * 1 + 1)}>
                                <i className="bi-chevron-right text-2xl font-bold"/>
                            </button>
                        </div>
                        
                        <div className='absolute lg:w-8/12 w-10/12 flex justify-between top-14 left-1/2 -translate-x-1/2'>
                            <span>
                                <div className='text-white mb-3'>
                                    <div className='flex text-xs mb-1'>
                                        <i className="bi-clock-fill self-center mr-2"></i> 
                                        {Carousel.Release.toDate().toLocaleDateString('sv')}
                                    </div>
                                    <div className="whitespace-nowrap text-ellipsis overflow-hidden text-lg font-medium lg:w-96 md:w-72 w-44 mb-1">{Carousel.Title}</div>
                                    <div className='flex'>
                                        {Carousel.Genre.slice(0, 4).map(doc => {
                                            return (
                                                <div key={doc} className="text-xs border rounded-sm px-1 mr-1">{doc}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    <button className='border w-2 h-2 m-1' style={{ backgroundColor: CarouselIndicator == 0 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(0)}></button>
                                    <button className='border w-2 h-2 m-1' style={{ backgroundColor: CarouselIndicator == 1 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(1)}></button>
                                    <button className='border w-2 h-2 m-1' style={{ backgroundColor: CarouselIndicator == 2 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(2)}></button>
                                    <button className='border w-2 h-2 m-1' style={{ backgroundColor: CarouselIndicator == 3 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(3)}></button>
                                    <button className='border w-2 h-2 m-1' style={{ backgroundColor: CarouselIndicator == 4 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(4)}></button>
                                    <button className='border w-2 h-2 m-1' style={{ backgroundColor: CarouselIndicator == 5 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(5)}></button>
                                    <button className='border w-2 h-2 m-1' style={{ backgroundColor: CarouselIndicator == 6 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(6)}></button>
                                    <button className='border w-2 h-2 m-1' style={{ backgroundColor: CarouselIndicator == 7 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(7)}></button>
                                </div>
                                <Link to={`/${Carousel.Id}`} className="bg-indigo-500 text-white flex justify-center rounded-full w-12 h-12">
                                    <i className="bi-caret-right-fill self-center text-2xl"/>
                                </Link>
                            </span>
                        
                            <div style={{ backgroundImage: `url(${Carousel.Cover})` }} className="bg-zinc-800 bg-cover rounded shadow-lg bg-top md:h-48 md:w-36 h-40 w-28"></div>
                        </div>
                    </div> 
                )}
            </div>

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
                    
                        <div className="flex overflow-x-scroll mb-10 pb-5">
                            {DataNewRelease.map(doc => {
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
                                        <div className="text-xs">Most View</div>
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

                        <div className="flex overflow-x-scroll mb-10 pb-5">
                            {DataPopular.map(doc => {
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
                                    <i className="bi-camera-reels-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Asian Collection</div>
                                        <div className="text-xs">Asian Nude Video</div>
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

                        <div className="flex overflow-x-scroll mb-10 pb-5">
                            {DataPopular.map(doc => {
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
                                    <i className="bi-image-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Image Collection</div>
                                        <div className="text-xs">Imageset, Cosplay, Erotic & More</div>
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

                        <div className="flex overflow-x-scroll mb-10 pb-5">
                            {DataPopular.map(doc => {
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