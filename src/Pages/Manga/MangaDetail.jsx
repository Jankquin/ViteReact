import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Database from '../../Firebase/Database'

const PostDetail = () => {
    const {id} = useParams();
    
    const DataTb_manga       = Database().Tb_Manga;  
    const DataTb_MangaDetail = DataTb_manga && DataTb_manga.find(doc => doc.Id == id);

    var TotalView = 0
    return (
        <>
            {DataTb_MangaDetail &&
                <div className="">                   
                    <div style={{backgroundImage: `url(${DataTb_MangaDetail.Cover})`, backgroundPosition: 'center 25%'}} className="bg-cover fixed w-full h-52 -z-10">
                        <div className="bg-gradient-to-r from-zinc-900/40 to-zinc-900/10 w-full h-full lg:backdrop-blur-[3px] backdrop-blur-[1px]"></div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-t md:from-zinc-900/70 from-zinc-900 to-transparent flex h-52 w-full">
                            <div className="container mx-auto self-end">
                                <div className="flex lg:w-10/12 w-full mx-auto -mb-14 md:p-0 px-3">
                                    <div style={{ backgroundImage: `url(${DataTb_MangaDetail.Cover})` }} className="bg-cover bg-center shadow-lg rounded md:h-52 md:w-36 h-40 w-28 mr-3"></div>

                                    <div className="grid content-between">
                                        <div className="grid">
                                            <div id="Title" className="text-white md:text-4xl text-2xl font-bold lg:w-96 md:w-72 w-60 mb-3">{DataTb_MangaDetail.Title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatum.</div>

                                            <div className="text-white flex mb-2">
                                                <div className="flex font-thin text-xs mr-3">
                                                    <i className="bi-person-fill self-center mr-2"/>    
                                                    <div className="self-center">{DataTb_MangaDetail.Author}</div>
                                                </div>
                                                <div className="flex font-thin text-xs mr-3">
                                                    <i className="bi-eye-fill self-center mr-2"/>    
                                                    <div className="self-center">
                                                        {DataTb_MangaDetail && 
                                                            DataTb_MangaDetail.Chapter.map(() => {
                                                                var TotalView = 0;
                                                                for (var i = 0; i < DataTb_MangaDetail.Chapter.length; i++) {
                                                                    TotalView = TotalView + DataTb_MangaDetail.Chapter[i].View;
                                                                }
                                                                return TotalView
                                                            }).slice(0, 1)
                                                        }
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
                                                {DataTb_MangaDetail.Genre.slice(0, 4).map(doc => {
                                                    return (
                                                        <Link to={`/manga`} className="hover:bg-zinc-700/50 text-white text-center text-xs font-thin rounded px-1 mr-1" title={DataTb_MangaDetail.Author}>{doc}</Link>
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
                                            <Link to={`/manga`} className="hover:bg-zinc-700/50 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre'>
                                                <i className="bi-chevron-left text-white self-center"></i>
                                                <div className='self-center text-xs font-medium md:block hidden ml-2'>Back</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="dark:bg-zinc-900 bg-white h-[50rem] w-full pt-14 px-3">
                            <div className="container mx-auto self-end mt-5">
                                <div className="flex md:flex-row flex-col lg:w-10/12 w-full mx-auto mb-5">
                                    <div className="md:w-3/12 md:mb-0 mb-5">
                                        <div className="text-zinc-500 flex mb-3">
                                            <i className="bi-info-circle-fill text-xl self-center mr-3"/>    
                                            <div className="font-medium self-center">Info</div>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <div className='text-zinc-500 font-medium mb-1'>Author</div>
                                            <Link to={`/manga`} className="hover:bg-zinc-700/50 bg-zinc-800 text-white text-xs font-thin rounded p-1" title={DataTb_MangaDetail.Author}>
                                                {DataTb_MangaDetail.Author}
                                            </Link>
                                        </div>

                                        <div className="mb-3">
                                            <div className='text-zinc-500 font-medium mb-1'>Genre</div>
                                            <div className='grid grid-cols-4 gap-1 text-white'>
                                                {DataTb_MangaDetail.Genre.map(doc => {
                                                    return (
                                                        <Link to={`/manga`} className="hover:bg-zinc-700/50 bg-zinc-800 text-white text-center text-xs font-thin rounded p-1" title={DataTb_MangaDetail.Author}>
                                                            {doc}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:w-9/12 md:ml-5">
                                        <div className="text-zinc-500 flex mb-3">
                                            <i className="bi-grid-fill text-xl self-center mr-3"/>    
                                            <div className="font-medium self-center">Last Added</div>
                                        </div>
                                        <div className="rounded overflow-hidden">
                                            {DataTb_MangaDetail.Chapter.map((doc, index) =>                        
                                                <Link to={`/manga/${id}/${doc.Title}`} key={index} className="hover:bg-zinc-700/50 bg-zinc-800 text-zinc-500 block p-3">
                                                    {doc.Title} - {doc.View} 
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <>
                    {/* <div className="bg-zinc-900 ">
                        <div className="container mx-auto lg:px-2 px-3 py-5">
                            <div className="flex justify-center mb-10 md:-mt-48 -mt-28">
                                <div className="md:w-10/12 w-full">
                                    <div className="flex mb-5">
                                        <div style={{ backgroundImage: `url(${DataTb_MangaDetail.Cover})` }} className="bg-cover bg-center shadow-lg rounded md:h-56 md:w-36 h-36 w-24 mr-3"></div>

                                        <div className="grid">
                                            <div id="Title" className="text-white md:text-4xl text-2xl font-bold lg:w-96 md:w-72 w-60">{DataTb_MangaDetail.Title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatum.</div>
                                            
                                            <div className='self-center'>
                                                <div className="text-white md:flex mb-2 hidden">
                                                    <i className="bi-person-fill self-center mr-2"/>    
                                                    <div className="text-xs self-center">{DataTb_MangaDetail.Author}</div>
                                                    <div className="mx-3">|</div>
                                                    <i className="bi-eye-fill self-center mr-2"/>    
                                                    <div className="text-xs self-center">
                                                        {DataTb_MangaDetail && 
                                                            DataTb_MangaDetail.Chapter.map(() => {
                                                                var TotalView = 0;
                                                                for (var i = 0; i < DataTb_MangaDetail.Chapter.length; i++) {
                                                                    TotalView = TotalView + DataTb_MangaDetail.Chapter[i].View;
                                                                }
                                                                return TotalView
                                                            }).slice(0, 1)
                                                        }
                                                    </div>
                                                    <div className="mx-3">|</div>
                                                    <i className="bi-bookmark-fill self-center mr-2"/>    
                                                    <div className="text-xs self-center">123123</div>
                                                    <div className="mx-3">|</div>
                                                    <i className="bi-heart-fill self-center mr-2"/>    
                                                    <div className="text-xs self-center">123123</div>
                                                </div>
                                                <div className='flex text-white'>
                                                    {DataTb_MangaDetail.Genre.slice(0, 4).map(doc => {
                                                        return (
                                                            <div key={doc} className="text-xs px-1 mr-1">{doc}</div>
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
                                                </button>
                                                <button className="hover:bg-zinc-700/50 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre' >
                                                    <i className="bi-flag-fill text-white self-center"></i>
                                                </button>
                                                <button className="hover:bg-zinc-700/50 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre' >
                                                    <i className="bi-book-fill text-white self-center"></i>
                                                    <div className='self-center text-xs font-medium md:block hidden ml-2'>Start Reading</div>
                                                </button>
                                                <Link to={`/manga`} className="hover:bg-zinc-700/50 bg-zinc-800 text-white rounded flex justify-center px-4 py-2 mr-2" title='Choose Your Genre'>
                                                    <i className="bi-chevron-left text-white self-center"></i>
                                                    <div className='self-center text-xs font-medium md:block hidden ml-2'>Back</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="flex md:flex-row flex-col mb-5">
                                        <div className="md:w-3/12 md:mb-0 mb-5">
                                            <div className="text-zinc-500 flex mb-3">
                                                <i className="bi-info-circle-fill text-xl self-center mr-3"/>    
                                                <div className="font-medium self-center">Info</div>
                                            </div>
                                            
                                            <div className="mb-3">
                                                <div className='text-zinc-500 font-medium mb-1'>Author</div>
                                                <Link to={`/manga`} className="hover:bg-zinc-700/50 bg-zinc-800 text-white text-xs font-thin rounded p-1" title={DataTb_MangaDetail.Author}>
                                                    {DataTb_MangaDetail.Author}
                                                </Link>
                                            </div>

                                            <div className="mb-3">
                                                <div className='text-zinc-500 font-medium mb-1'>Genre</div>
                                                <div className='grid grid-cols-4 gap-1 text-white'>
                                                    {DataTb_MangaDetail.Genre.map(doc => {
                                                        return (
                                                            <Link to={`/manga`} className="hover:bg-zinc-700/50 bg-zinc-800 text-white text-center text-xs font-thin rounded p-1" title={DataTb_MangaDetail.Author}>
                                                                {doc}
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:w-9/12 md:ml-5">
                                            <div className="text-zinc-500 flex mb-3">
                                                <i className="bi-grid-fill text-xl self-center mr-3"/>    
                                                <div className="font-medium self-center">Last Added</div>
                                            </div>
                                            <div className="rounded overflow-hidden">
                                                {DataTb_MangaDetail.Chapter.map((doc, index) =>                        
                                                    <Link to={`/manga/${id}/${doc.Title}`} key={index} className="hover:bg-zinc-700/50 bg-zinc-800 text-zinc-500 block p-3">
                                                        {doc.Title} - {doc.View} 
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </>
                </div>
            }
        </>
    )
}

export default PostDetail