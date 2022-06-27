import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Database from '../../Firebase/Database'

const AsianDetail = () => {
    const {id} = useParams();
    
    const DataTb_AsianNude       = Database().Tb_AsianNude;  
    const DataTb_AsianNudeDetail = DataTb_AsianNude && DataTb_AsianNude.find(doc => doc.Id == id);

    var TotalView = 0
    return (
        <>
            {DataTb_AsianNudeDetail &&
                <div className="">
                    <div style={{backgroundImage: `url(${DataTb_AsianNudeDetail.Cover})`, backgroundPosition: 'center 25%'}} className="bg-cover fixed w-full h-52 -z-10">
                        <div className="bg-gradient-to-r from-zinc-900/70 to-zinc-900/10 w-full h-full lg:backdrop-blur-[3px] backdrop-blur-[1px]"></div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-t md:from-zinc-900/50 from-zinc-900 to-transparent flex h-52 w-full">
                            <div className="container mx-auto self-end">
                                <div className="flex lg:w-10/12 w-full mx-auto -mb-14 md:p-0 px-3">
                                    <div style={{ backgroundImage: `url(${DataTb_AsianNudeDetail.Cover})` }} className="bg-cover bg-center shadow-lg rounded md:h-52 md:w-36 h-40 w-28 mr-3"></div>

                                    <div className="grid content-between">
                                        <div className="grid">
                                            <div id="Title" className="text-white md:text-4xl text-2xl font-bold lg:w-96 md:w-72 w-60 mb-3">{DataTb_AsianNudeDetail.Title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatum.</div>

                                            <div className="text-white flex mb-2">
                                                <div className="flex font-thin text-xs mr-3">
                                                    <i className="bi-person-fill self-center mr-2"/>    
                                                    <div className="self-center">{DataTb_AsianNudeDetail.Author}</div>
                                                </div>
                                                <div className="md:flex hidden font-thin text-xs mr-3">
                                                    <i className="bi-bookmark-fill self-center mr-2"/>    
                                                    <div className="self-center">123123</div>
                                                </div>
                                                <div className="md:flex hidden font-thin text-xs mr-3">
                                                    <i className="bi-heart-fill self-center mr-2"/>    
                                                    <div className="self-center">123123</div>
                                                </div>
                                            </div>

                                            <div className='flex'>
                                                {DataTb_AsianNudeDetail.Genre.slice(0, 4).map(doc => {
                                                    return (
                                                        <Link to={`/manga`} className="hover:bg-zinc-700/50 text-white text-center text-xs font-thin rounded px-1 mr-1" title={DataTb_AsianNude.Author}>{doc}</Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
    
                                        <div className="flex self-end">
                                            <button className="hover:bg-indigo-700/50 bg-indigo-800 text-white rounded flex justify-center md:px-10 px-4 py-2 mr-2" title='Choose Your Genre' >
                                                <i className="bi-bookmark-fill text-white self-center"></i>
                                                <div className='self-center text-xs font-medium md:block hidden ml-2'>Bookmark</div>
                                            </button>
                                            <button className="hover:bg-zinc-700/50 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre' >
                                                <i className="bi-heart-fill text-white self-center"></i>
                                                <div className='self-center text-xs font-medium md:block hidden ml-2'>7.5</div>
                                            </button>
                                            <button className="hover:bg-zinc-700/50 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre' >
                                                <i className="bi-flag-fill text-white self-center"></i>
                                            </button>
                                            <button className="hover:bg-zinc-700/50 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre' >
                                                <i className="bi-book-fill text-white self-center"></i>
                                                <div className='self-center text-xs font-medium md:block hidden ml-2'>Start Reading</div>
                                            </button>
                                            <Link to={`/asian`} className="hover:bg-zinc-700/50 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre'>
                                                <i className="bi-chevron-left text-white self-center"></i>
                                                <div className='self-center text-xs font-medium md:block hidden ml-2'>Back</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="bg-zinc-900 h-[50rem] w-full pt-14">
                            <div className="container mx-auto self-end">
                                <div className="flex lg:w-10/12 w-full mx-auto">
                                    <div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-2">
                                        {DataTb_AsianNudeDetail.Image.map(doc => 
                                            <img  src={doc} height="245" width="172" className="rounded object-cover h-auto w-full" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default AsianDetail