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
                    <div className="relative mt-16 w-full h-48">
                        <div className="absolute top-0 left-0 w-full h-full -z-10">
                            <div style={{backgroundImage: `url(${DataTb_MangaDetail.Cover})`, backgroundPosition: 'center 25%'}} className="bg-cover fixed w-full h-48">
                                <div className="bg-gradient-to-t lg:from-zinc-900/70 from-zinc-900 lg:to-zinc-900/10 to-zinc-900/50 w-full h-full lg:backdrop-blur-[3px] backdrop-blur-[1px]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 ">
                        <div className="container mx-auto lg:px-2 px-3 py-5">
                            <div className="flex justify-center mb-10 -mt-48">
                                <div className="md:w-10/12 w-full">
                                    <div className="flex mb-10">
                                        <div style={{ backgroundImage: `url(${DataTb_MangaDetail.Cover})` }} className="bg-cover bg-center shadow-lg rounded h-56 w-36 mr-3"></div>

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
                                            </div>
                                        </div>
                                    </div>
                            
                       
                                    <Link to={`/manga`} className="bg-zinc-700 flex rounded p-3 mb-1">
                                        {DataTb_MangaDetail.Title}
                                    </Link>

                                    {DataTb_MangaDetail.Chapter.map((doc, index) =>                        
                                        <Link to={`/manga/${id}/${doc.Title}`} key={index} className="bg-zinc-700 flex rounded p-3 mb-1">
                                            {doc.Title} - {doc.View} 
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PostDetail