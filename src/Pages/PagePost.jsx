import { setDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom'
import Tb_Post from '../Firebase/Tb_Post'

const PagePost = () => {
    const DataCarousel   = Tb_Post().UseDataCarousel;
    const DataNewRelease = Tb_Post().UseDataNewRelease;
    const DataPopular    = Tb_Post().UseDataPopular;

    const [CarouselIndicator, setCarouselIndicator] = useState(0);
    const Carousel = DataCarousel[CarouselIndicator]
    
    const [Filter, setFilter] = useState({});
    
    let dodo = [
        { Genre : 'Anal', Title : 'asd1' },
        { Genre : 'Anal', Title : 'asd2' },
        { Genre : 'Ahegao', Title : 'xx' },
        { Genre : 'Ahegao', Title : 'xx' },
        { Genre : 'Ahegao', Title : 'xx' }
    ]

    const dd = dodo.filter(doc => doc.Genre == "Anal" )

    console.log(dd)
    return (
        <>
            <div className="relative mt-16 h-72">
                <div className="absolute bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-400 overflow-hidden w-full h-full">
                    {/* <div style={{ backgroundImage: `url(${Carousel && (Carousel.Cover)})` }} className="bg-cover bg-center blur-[50px] w-full h-full"></div> */}
                </div>

                {Carousel && (
                    <div className='relative flex container mx-auto h-full py-10'>
                        <div className='absolute  w-full flex justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <button className="text-white self-center rounded-full w-8 h-8" onClick={(event) => setCarouselIndicator(CarouselIndicator == 0 ?  2 : CarouselIndicator * 1 - 1)}>
                                <i className="bi-chevron-left text-2xl font-bold"/>
                            </button>
                            <button className="text-white self-center rounded-full w-8 h-8" onClick={(event) => setCarouselIndicator(CarouselIndicator == 7 ?  0 : CarouselIndicator * 1 + 1)}>
                                <i className="bi-chevron-right text-2xl font-bold"/>
                            </button>
                        </div>
                        
                        <div className='md:w-12/12 w-10/12 relative flex self-end mx-auto md:h-28 h-full'>
                            <div style={{ backgroundImage: `url(${Carousel.Cover})` }} className="bg-zinc-800 bg-cover rounded-full shadow-lg self-top h-16 w-16 md:block hidden mr-5"></div>
                            
                            <div className='relative md:w-10/12 w-full self-top'>
                                <div style={{ backgroundImage: `url(${Carousel.Cover})` }} className="bg-zinc-800 bg-cover rounded-full shadow-lg self-center h-12 w-12 md:hidden mb-3"></div>

                                <div className="text-white flex">
                                    <i className="bi-person-fill self-center mr-3"/>    
                                    <div className="text-xs self-center">Marry Jane</div>
                                    <div className="mx-3">|</div>
                                    <i className="bi-eye-fill self-center mr-3"/>    
                                    <div className="text-xs self-center">234234</div>
                                </div>

                                <div id="Title" className='text-white md:w-6/12 md:text-lg font-medium text-sm mb-3'>{Carousel.Title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque velit placeat aliquam sit corporis exercitationem illo magnam delectus necessitatibus.</div>

                                <div className='flex text-white'>
                                    {Carousel.Genre.slice(0, 4).map(doc => {
                                        return (
                                            <div key={doc} className="text-xs px-1 mr-1">{doc}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            
                            <div className="absolute right-0 bottom-0">
                                <div className='flex justify-center mb-3'>
                                    <button className='border rounded-full w-2 h-2 mr-1' style={{ backgroundColor: CarouselIndicator == 0 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(0)}></button>
                                    <button className='border rounded-full w-2 h-2 mr-1' style={{ backgroundColor: CarouselIndicator == 1 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(1)}></button>
                                    <button className='border rounded-full w-2 h-2 mr-1' style={{ backgroundColor: CarouselIndicator == 2 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(2)}></button>
                                    <button className='border rounded-full w-2 h-2 mr-1' style={{ backgroundColor: CarouselIndicator == 3 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(3)}></button>
                                    <button className='border rounded-full w-2 h-2 mr-1' style={{ backgroundColor: CarouselIndicator == 4 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(4)}></button>
                                    <button className='border rounded-full w-2 h-2 mr-1' style={{ backgroundColor: CarouselIndicator == 5 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(5)}></button>
                                    <button className='border rounded-full w-2 h-2 mr-1' style={{ backgroundColor: CarouselIndicator == 6 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(6)}></button>
                                    <button className='border rounded-full w-2 h-2 mr-1' style={{ backgroundColor: CarouselIndicator == 7 ? '#ffffff' : '' }} onClick={() => setCarouselIndicator(7)}></button>
                                </div>

                                <button className="bg-indigo-500 hover:bg-indigo-700/50 text-white md:flex hidden rounded-full justify-center min-w-[7rem] px-4 py-2 mx-1">
                                    <i className="bi bi-caret-right-fill self-center mr-2"></i>
                                    <span className="text-sm self-center">Detail</span>
                                </button>
                            </div>
                        </div>
                    </div> 
                )}
            </div>

            <div className="container mx-auto lg:px-2 px-3 py-5 mb-10 -mt-10">
                <div className="flex justify-center">
                    <div className="bg-zinc-800 text-white md:w-10/12 w-full flex justify-between shadow-lg relative rounded p-3 z-10">
                        <div className="flex">
                            <button className="hover:bg-zinc-700/50 text-white rounded justify-center min-w-[7rem] px-4 py-2"
                                onClick={(event) => setFilter((doc) => ({ ...doc, Genre: 'Anal' }) )} >
                                Anal</button>
                        </div>
                        <button className="bg-indigo-500 hover:bg-indigo-700/50 text-white md:flex hidden rounded justify-center min-w-[7rem] px-4 py-2 mx-1">Advanced Search</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:px-2 px-3 py-5 mb-96 -mt-10">
                <div className="flex justify-center">
                    <div className="bg-zinc-800 text-white md:w-10/12 w-full shadow-lg relative rounded p-3 z-10">
                        {dodo.map((doc, index) => {
                            return (
                                <div className='mb-1' key={index}>{doc.Title}</div>
                            )
                        })}
                   </div>
                </div>
            </div>

            <div className="container mx-auto lg:px-2 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:w-10/12 md:w-8/12x w-full">


                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="text-zinc-500 flex mr-5">
                                    <i className="bi-clock-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Hentai Anime</div>
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
                                        <div style={{ backgroundImage: `url(${doc.Cover})` }} className="lg:h-52 lg:w-36 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-36 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
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
                                    <i className="bi-images text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Doujin</div>
                                        <div className="text-xs">Manga Hentai</div>
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
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded mr-2 first:ml-0 last:mr-0 overflow-hidden">
                                        <div className="flex rounded">
                                            <div style={{ backgroundImage: `url(${doc.Cover})` }} className="h-40 w-28 bg-cover bg-center"></div>
                                            
                                            <div className='w-64 grid content-between p-3'>
                                                <div>
                                                    <div id="Title" className='text-sm font-medium mb-3'>{doc.Title} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque enim eos deleniti neque libero quos in soluta qui placeat architecto.</div>
                                                    <div className="flex text-xs">
                                                        <i className="bi-eye-fill self-center mr-2"></i>
                                                        <div className="self-center">{doc.View}</div>
                                                        <div className='mx-3'>|</div>
                                                        <i className="bi-clock-fill self-center mr-2"></i>
                                                        <div className="self-center">{doc.View}</div>
                                                    </div>
                                                </div>

                                                <div className='flex '>
                                                    {Carousel.Genre.slice(0, 4).map(doc => {
                                                        return (
                                                            <div key={doc} className="border-zinc-700/50 border text-xs rounded-sm px-1 mr-1">{doc}</div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
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