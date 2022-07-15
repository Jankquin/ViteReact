import React from 'react'
import { Link } from 'react-router-dom'



const HomePage = () => {
    return (
        <>
            {/* <div style={{backgroundImage: `url(https://mangadex.org/covers/39e52698-160c-4f1a-b368-8fa4ac461c03/589bdf70-bca1-4e02-bef9-ebc1ec895bcc.jpg.512.jpg)`, backgroundPosition: 'center 40%'}} className="bg-cover fixed w-full top-0 left-0 h-52 -z-10">
                <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-900/20 w-full h-full lg:backdrop-blur-[3px] backdrop-blur-[1px]"></div>
            </div> */}
 
            <div className="relative">
                <div className="bg-gradient-to-t from-zinc-900/50 to-zinc-900/20 flex h-52 w-full md:p-0 px-3">
                    <div className="container md:w-10/12 w-full self-end flex mx-auto -mb-14">
                        <div style={{ backgroundImage: `url(https://mangadex.org/covers/39e52698-160c-4f1a-b368-8fa4ac461c03/589bdf70-bca1-4e02-bef9-ebc1ec895bcc.jpg.512.jpg)` }} className="bg-cover bg-center shadow-lg rounded md:h-52 md:w-36 h-40 w-28 mr-3"></div>

                        <div className="grid content-between">
                            <div className="grid">
                                <div id="Title" className="text-white md:text-4xl text-lg font-bold lg:w-96 md:w-72 w-60 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatum.</div>

                                <div className="text-white flex mb-2">
                                    <div className="flex font-thin text-xs mr-3">
                                        <i className="bi-person-fill self-center mr-2"/>    
                                        <div className="self-center">Lorem, ipsum.</div>
                                    </div>
                                    <div className="flex font-thin text-xs mr-3">
                                        <i className="bi-eye-fill self-center mr-2"/>    
                                        <div className="self-center">
                                        123123
                                        </div>
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
                                    <Link to={`/manga`} className="hover:bg-zinc-700/50 text-white text-center text-xs font-thin rounded px-1 mr-1">asdas</Link>
                                </div>
                            </div>

                            <div className="flex self-end">
                                <button className="hover:bg-indigo-700 bg-indigo-800 text-white rounded flex justify-center md:px-10 px-4 py-2 mr-2" title='Choose Your Genre' >
                                    <i className="bi-bookmark-fill text-white self-center"></i>
                                    <div className='self-center text-xs font-medium md:block hidden ml-2'>Bookmark</div>
                                </button>
                                <button className="hover:bg-zinc-700 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre' >
                                    <i className="bi-heart-fill text-white self-center"></i>
                                    <div className='self-center text-xs font-medium md:block hidden ml-2'>7.5</div>
                                </button>
                                <button className="hover:bg-zinc-700 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre' >
                                    <i className="bi-flag-fill text-white self-center"></i>
                                </button>
                                <button className="hover:bg-zinc-700 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre' >
                                    <i className="bi-book-fill text-white self-center"></i>
                                    <div className='self-center text-xs font-medium md:block hidden ml-2'>Start Reading</div>
                                </button>
                                <Link to={`/manga`} className="hover:bg-zinc-700 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre'>
                                    <i className="bi-chevron-left text-white self-center"></i>
                                    <div className='self-center text-xs font-medium md:block hidden ml-2'>Back</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dark:bg-zinc-900 bg-white h-[150vh] w-full"></div>
            </div>
        </>
    )
}

export default HomePage