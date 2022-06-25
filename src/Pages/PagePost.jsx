import { setDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom'
import Database from '../Firebase/Database'

const PagePost = () => {
    const DataCarousel   = Database().UseDataCarousel;
    const DataNewRelease = Database().UseDataNewRelease;
    const DataPopular    = Database().UseDataPopular;
    const Tb_Manga       = Database().Tb_Manga;

    const [CarouselIndicator, setCarouselIndicator] = useState(0);
    const Carousel = DataCarousel[CarouselIndicator]
    const [Modal, setModal] = useState({ Modal: false, Alert: false})

    const [InputType, setInputType] = useState('')
    const [InputGenre, setInputGenre] = useState([])
    const [InputBrand, setInputBrand] = useState([])
    const [ArrayGenre, setArrayGenre] = useState(['3D','Ahegao','Anal','BDSM','Big Boobs','Blow Job','Bondage','Boob Job','Censored','Comedy','Cosplay','Creampie','Dark Skin','Facial','Fantasy','Filmed','Foot Job','Futanari','Gangbang','Glasses','Hand Job','Harem','HD','Horror','Incest','Inflation','Lactation','Loli','Maid','Masturbation','Milf','Mind Break','Mind Control','Monster','Nekomimi','NTR','Nurse','Orgy','Plot','POV','Pregnant','Public Sex','Rape','Reverse Rape','Rimjob','Scat','School Girl','Shota','Softcore','Swimsuit','Teacher','Tentacle','Threesome','Toys','Trap','Tsundere','Ugly Bastard','Uncensored','Vanilla','Virgin','Watersports','X-Ray','Yaoi','Yuri'])
    const [ArrayBrand, setArrayBrand] = useState(['@ OZ','37c-Binetsu','Almond Collective','Amour','Animac','Arms','Blue Eyes','Bootleg','BreakBottle','BugBug','Bunnywalker','Celeb','Central Park Media','ChiChinoya','ChuChu','Circle Tribute','CoCoans','Collaboration Works','Cosmos','Cranberry','Crimson','D3','Daiei','demodemon','Digital Works','Discovery','EBIMARU-DO','Echo','ECOLONUN','Edge','Erozuki','evee','FINAL FUCK 7','Five Ways','Front Line','fruit','GOLD BEAR','gomasioken','Green Bunny','Hoods Entertainment','Hot Bear','Hykobo','Jellyfish','Jumondo','kate_sai','KENZsoft','King Bee','Knack','Kuril','L.','Lemon Heart','Lilix','Lune Pictures','Magic Bus','Magin Label','Marigold','Mary Jane','Media Blasters','MediaBank','Moon Rock','Moonstone Cherry','MS Pictures','Nihikime no Dozeu','NuTech Digital','Pashmina','Pink Pineapple','Pinkbell','Pixy Soft','Pocomo Premium','PoRO','Project No.9','Queen Bee','Rabbit Gate','sakamotoJ','SANDWICHWORKS','Schoolzone','seismic','SELFISH','Seven','Shadow Prod. Co.','Shinyusha','Showten','Soft on Demand','STARGATE3D','Studio 9 Maiami','Studio Akai Shohosen','Studio Deen','Studio Fantasia','Studio FOW','studio GGB','Studio Zealot','Suzuki Mirano','SYLD','T-Rex','TOHO','Toranoana','TYS Work','Umemaro-3D','Union Cho','Valkyria','Vanilla','White Bear','X City','Y.O.U.C.','yosino','ZIZ']);

    const Memek = [];

    const Lela = () => {
        DataNewRelease.map(doc => {
            Memek.push({
                Id          : doc.Id,
                Title       : doc.Title,
                Cover       : doc.Cover,
                Thumbnail   : doc.Thumbnail,
                Download    : doc.Download,
                Embed       : doc.Embed,
                Brand       : doc.Brand,
                Genre       : doc.Genre,
                Release     : doc.Release.toDate().toLocaleDateString('sv'),
                Note        : doc.Note,
                View        : doc.View,
                Created_At  : doc.Created_At.toDate().toLocaleDateString('sv'),
                Updated_At  : doc.Updated_At.toDate().toLocaleDateString('sv'),
            })
        })
    }

    Lela();

    const PostFilter = Memek.filter(( item ) => 
        // InputType ?
        //     item.Type == InputType :
        //     item.Type
        // &&
        InputGenre.every((val) => item.Genre.indexOf(val) > -1) 
    );


    return (
        <>
            <div id='Carousel' className="relative mt-16 h-72">
                <div className="absolute bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-500 overflow-hidden w-full h-full">
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

            <div id='Filter' className="container mx-auto lg:px-2 px-3 py-5 -mt-10">
                <div className="flex justify-center">
                    <div className="dark:bg-zinc-800 bg-white dark:text-zinc-500 md:w-10/12 w-full shadow-lg relative rounded z-10">
                        <div className="flex justify-between p-3">
                            <div className="flex">
                                <button className="hover:bg-zinc-700/50 active:bg-zinc-700/50 focus:bg-zinc-700/50 text-zinc-500 rounded flex justify-center md:min-w-[7rem] px-4 py-2" title='Choose Your Type' onClick={(event) => {
                                    Modal.Modal == "Type" ?
                                        setModal((doc) => ({...doc, Modal: false})) :
                                        setModal((doc) => ({...doc, Modal: "Type"}))
                                    }}>
                                    <i className="bi-exclude text-zinc-500 self-center"></i>
                                    <div className='self-center text-xs font-medium uppercase md:block hidden ml-3'>Type</div>
                                </button>
                                <button className="hover:bg-zinc-700/50 active:bg-zinc-700/50 focus:bg-zinc-700/50 text-zinc-500 rounded flex justify-center md:min-w-[7rem] px-4 py-2" title='Choose Your Genre' onClick={(event) => {
                                    Modal.Modal == "Genre" ?
                                        setModal((doc) => ({...doc, Modal: false})) :
                                        setModal((doc) => ({...doc, Modal: "Genre"}))
                                    }}>
                                    <i className="bi-layers-fill text-zinc-500 self-center"></i>
                                    <div className='self-center text-xs font-medium uppercase md:block hidden ml-3'>Genre</div>
                                </button>
                                <button className="hover:bg-zinc-700/50 active:bg-zinc-700/50 focus:bg-zinc-700/50 text-zinc-500 rounded flex justify-center md:min-w-[7rem] px-4 py-2" title='Choose Your Brand' onClick={(event) => {
                                    Modal.Modal == "Brand" ?
                                        setModal((doc) => ({...doc, Modal: false})) :
                                        setModal((doc) => ({...doc, Modal: "Brand"}))
                                    }}>
                                    <i className="bi-exclude text-zinc-500 self-center"></i>
                                    <div className='self-center text-xs font-medium uppercase md:block hidden ml-3'>Brand</div>
                                </button>
                                <button className="hover:bg-zinc-700/50 active:bg-zinc-700/50 focus:bg-zinc-700/50 text-zinc-500 rounded flex justify-center md:min-w-[7rem] px-4 py-2" title='Order List' onClick={(event) => {
                                    Modal.Modal == "Filter" ?
                                        setModal((doc) => ({...doc, Modal: false})) :
                                        setModal((doc) => ({...doc, Modal: "Filter"}))
                                    }}>
                                    <i className="bi-sort-down text-zinc-500 self-center"></i>
                                    <div className='self-center text-xs font-medium uppercase md:block hidden ml-3'>Filter</div>
                                </button>
                            </div>

                            <button className="hover:bg-indigo-700/50 bg-indigo-700 text-white text-sm rounded justify-center min-w-[7rem] px-4 py-2" title='Reset List' onClick={(event) => {setModal([]), setInputGenre([])}}>Reset</button>
                        </div>
            
                        <div className="max-h-64 overflow-y-scroll">
                            {Modal.Modal == 'Type' &&
                                <div className="text-zinc-500 border-t border-zinc-700/50 p-3">
                                    <div className="uppercase font-medium ml-3">Type</div>
                                    <div className="text-sm mb-10 ml-3">Choose your specific post</div>
                                    <div className="flex flex-wrap gap-1">
                                        <button className="hover:bg-zinc-700/50 text-xs rounded justify-center min-w-[7rem] px-4 py-2">Hentai Anime</button>
                                        <button className="hover:bg-zinc-700/50 text-xs rounded justify-center min-w-[7rem] px-4 py-2">Manga / Doujin</button>
                                        <button className="hover:bg-zinc-700/50 text-xs rounded justify-center min-w-[7rem] px-4 py-2">Asian Video</button>
                                        <button className="hover:bg-zinc-700/50 text-xs rounded justify-center min-w-[7rem] px-4 py-2">Asian Image</button>
                                    </div>
                                </div>
                            }
                            
                            {Modal.Modal == 'Genre' &&
                                <div className="text-zinc-500 border-t border-zinc-700/50 p-3">
                                    <div className="uppercase font-medium ml-3">Include Tags</div>
                                    <div className="text-sm mb-10 ml-3">Find videos that has all selected tags below</div>
                                    <div className="flex flex-wrap gap-1">
                                        {ArrayGenre.map((doc) => 
                                            <div key={doc}>
                                                {InputGenre && doc == InputGenre.find((dom) => dom == doc) ?
                                                    <button className="bg-zinc-700 text-xs rounded flex justify-center min-w-[7rem] px-4 py-2" onClick={(event) => setInputGenre(InputGenre.filter((dos) => dos !== doc))}>{doc}</button> :
                                                    <button className="hover:bg-zinc-700/50 text-xs rounded flex justify-center min-w-[7rem] px-4 py-2" onClick={(event) => setInputGenre((dos) => ([...dos, doc]) )}>{doc}</button>
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                            
                            {Modal.Modal == 'Brand' &&
                                <div className="text-zinc-500 border-t border-zinc-700/50 p-3">
                                    <div className="uppercase font-medium ml-3">Brands / Production (Hentai Anime Only)</div>
                                    <div className="text-sm mb-10 ml-3">Find videos that are owned or produced by the selected brands below</div>
                                    <div className="flex flex-wrap gap-1">
                                        {ArrayBrand.map((doc) => 
                                            <div key={doc}>
                                                {InputBrand == doc ?
                                                    <button className="bg-zinc-700 text-xs rounded flex justify-center min-w-[7rem] px-4 py-2" onClick={(event) => setInputBrand(doc)}>{doc}</button> :
                                                    <button className="hover:bg-zinc-700/50 text-xs rounded flex justify-center min-w-[7rem] px-4 py-2" onClick={(event) => setInputBrand(doc)}>{doc}</button>
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }

                            {Modal.Modal == 'Filter' &&
                                <div className="text-zinc-500 border-t border-zinc-700/50 p-3">
                                    <div className="uppercase font-medium ml-3">Filter</div>
                                    <div className="text-sm mb-10 ml-3">Filter or shorting post with date, view etc</div>
                                    <div className="flex flex-wrap gap-1">
                                        <button className="hover:bg-zinc-700/50 text-xs rounded justify-center min-w-[7rem] px-4 py-2" onClick={(event) => setInputGenre(['Ahegao'])}>Filter</button>
                                        <button className="hover:bg-zinc-700/50 text-xs rounded justify-center min-w-[7rem] px-4 py-2" onClick={(event) => setInputGenre(['Anal'])}>Filter</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div id='FilterModal' className="container mx-auto lg:px-2 px-3 py-5">
                <div className="flex justify-center">
                    <div className="dark:bg-zinc-800 bg-white text-zinc-500 md:w-10/12 w-full shadow-lg relative rounded p-3 z-10">
                        {PostFilter.map((doc, index) => {
                            return (
                                <div className='mb-1' key={index}>{doc.View} - {doc.Title} - {doc.Genre}</div>
                            )
                        })}
                   </div>
                </div>
            </div>

            <div id='Content' className="container mx-auto lg:px-2 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:w-10/12 md:w-8/12x w-full">
                        <div id="HentaiAnime">
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
                        </div>
                        
                        <div id="Manga">
                            <div className="flex justify-between mb-5">
                                <div className='flex'>
                                    <div className="text-zinc-500 flex mr-5">
                                        <i className="bi-images text-2xl self-center mr-3"/>    
                                        <span>
                                            <div className="font-medium">Manga / Doujin</div>
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
                                <Link to={`/manga`} className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                    <i className="bi-arrow-right"/>
                                </Link>
                            </div>
                        
                            <div className="flex overflow-x-scroll mb-10 pb-5">
                                {Tb_Manga.map(doc => {
                                    return (
                                        <Link to={`/manga/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded mr-2 first:ml-0 last:mr-0 overflow-hidden">
                                            <div style={{ backgroundImage: `url(${doc.Cover})` }} className="lg:h-64 lg:w-44 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                            <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-36 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
                                            <div className="flex text-xs justify-center pb-3">
                                                <i className="bi-eye-fill self-center mr-2"></i>
                                                <div className="self-center">Chapter 1</div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        <div id="AsianNude">
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
                        </div>

                        <div id="ImageCollection">
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
            </div>

            <div className="">
                {/* http://cdnasu.xyz/wp-content/uploads/2022/05/01-91.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/02-155.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/03-162.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/04-164.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/05-160.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/06-158.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/07-156.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/08-153.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/09-147.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/10-169.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/11-152.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/12-141.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/13-136.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/14-123.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/15-117.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/16-109.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/17-97.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/18-96.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/19-89.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/20-86.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/21-77.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/22-74.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/23-69.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/24-67.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/25-59.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/26-57.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/27-54.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/28-55.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/29-50.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/30-48.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/31-42.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/32-39.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/33-36.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/34-35.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/35-34.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/36-31.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/37-26.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/38-25.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/39-24.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/40-20.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/41-19.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/42-19.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/43-17.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/999-169.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/Aware-165.jpg
                http://cdnasu.xyz/wp-content/uploads/2022/05/Projek-150.jpg */}
            </div>
        </>
    )
}

export default PagePost