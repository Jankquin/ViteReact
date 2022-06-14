import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Tb_Post from '../Firebase/Tb_Post'


const PostDetail = () => {
    const {id} = useParams();
    
    const DataPost          = Tb_Post().UseDataPost;  
    const DataNewRelease    = Tb_Post().UseDataNewRelease;
    const DataSimilar       = Tb_Post().UseDataSimilar;

    const GetPostDetail     = DataPost.find(doc => doc.Id == id);
    const GetSimilar        = DataPost.filter(doc => doc.Title.toLowerCase().includes(DataSimilar.toString().toLowerCase()));

    const OnTop             = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <div className="container lg:w-11/12 mx-auto md:mt-20 mt-16 lg:px-0 md:px-3">
                {GetPostDetail && (
                    <div className="dark:bg-zinc-800 bg-white shadow-lg md:flex block rounded overflow-hidden mb-5">
                        <div className="lg:w-9/12 md:w-8/12 lg:h-[30rem] h-[20rem] w-full rounded"> 
                            <iframe className='w-full h-full animate-fadeIn' src={GetPostDetail.Embed} scrolling="no" frameBorder="0" allowFullScreen={true}></iframe>
                        </div>

                        <div className="lg:w-3/12 md:w-4/12 lg:h-[30rem] md:h-[20rem] h-[30rem] w-full overflow-hidden">
                            <div className="md:h-[5rem] h-[6rem] px-3 pt-3">
                                <div className="grid grid-cols-3 animate-fadeIn">
                                    <button className='dark:hover:bg-zinc-700/50 text-zinc-500 rounded p-2'>
                                        <i className="bi-eye-fill text-lg mb-2"/>
                                        <div className='text-xs'>{GetPostDetail.View}</div>
                                    </button>
                                    <button className='dark:hover:bg-zinc-700/50 text-zinc-500 rounded p-2'>
                                        <i className="bi-flag-fill text-lg mb-2"/>
                                        <div className='text-xs'>Report</div>
                                    </button>
                                    <button className='dark:hover:bg-zinc-700/50 text-zinc-500 rounded p-2'>
                                        <i className="bi-cloud-arrow-down-fill text-lg mb-2"/>
                                        <div className='text-xs'>Download</div>
                                    </button>
                                </div>
                            </div>

                            <div className="h-[8rem] md:hidden animate-fadeIn px-3">
                                <div className='flex mb-5'>
                                    <div style={{ backgroundImage: `url(${GetPostDetail.Cover})` }} className='bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10 mr-3'></div>
                                    <div className='w-10/12 self-start'>
                                        <div className='text-zinc-500 whitespace-nowrap font-medium text-ellipsis overflow-hidden'>{GetPostDetail.Title}</div>
                                        <div className="text-zinc-500 flex text-xs">
                                            <i className="bi-clock-fill self-center mr-2"></i>
                                            <div className="self-center mr-3">{GetPostDetail.Release.toDate().toLocaleDateString('sv')}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-wrap gap-1'>
                                    {GetPostDetail.Genre.sort().map(doc => {
                                        return(
                                            <button key={doc} className="dark:hover:bg-zinc-700/50 text-zinc-500 border-zinc-700/50 border rounded-sm text-xs px-3 py-1">{doc}</button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="h-[2rem] text-zinc-500 flex justify-between px-5">
                                <div className="text-right text-xs self-center font-medium">Similar Post</div>
                                <i className="bi-list text-xl self-center"></i>
                            </div>
                            
                            {GetSimilar.length != 0 && (
                                <div className="lg:h-[22rem] md:h-[12rem] h-[13rem] overflow-y-scroll overflow-x-hidden px-3 animate-fadeIn">
                                    {GetSimilar.map(doc => {
                                        return (
                                            <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex rounded p-3" title={doc.Title} onClick={OnTop}>
                                                <div style={{ backgroundImage: `url(${doc.Cover})` }} className='bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10 mr-3'></div>
                                                <div className='md:w-8/12 w-10/12'>
                                                    <div className='text-zinc-500 self-center whitespace-nowrap text-sm text-ellipsis overflow-hidden'>{doc.Title}</div>
                                                    <div className="text-zinc-500 flex text-xs">
                                                        <i className="bi-eye-fill self-center mr-2"></i>
                                                        <div className="self-center mr-3">{doc.View}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                <div className="flex">
                    {GetPostDetail && (
                        <div className="rounded lg:w-9/12 md:w-8/12 w-full h-full md:block hidden">
                            <div className='rounded overflow-hidden animate-fadeIn'>
                                <div className='flex mb-5'>
                                    <div style={{ backgroundImage: `url(${GetPostDetail.Cover})` }} className='bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10 mr-3'></div>
                                    <div className='w-10/12 self-start'>
                                        <div className='text-zinc-500 whitespace-nowrap font-medium text-ellipsis overflow-hidden'>{GetPostDetail.Title}</div>
                                        <div className="text-zinc-500 flex text-xs">
                                            <i className="bi-clock-fill self-center mr-2"></i>
                                            <div className="self-center mr-3">{GetPostDetail.Release.toDate().toLocaleDateString('sv')}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-wrap gap-1'>
                                    {GetPostDetail.Genre.sort().map(doc => {
                                        return(
                                            <button key={doc} className="dark:hover:bg-zinc-700/50 text-zinc-500 border-zinc-700/50 border rounded-sm text-xs px-3 py-1">{doc}</button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className='lg:w-3/12 md:w-4/12 w-full md:p-0 p-3'>
                        <div className="flex justify-between mb-5">
                            <div className='flex'>
                                <div className="text-zinc-500 flex mr-5">
                                    <i className="bi-clock-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">New Release</div>
                                        <div className="text-xs">21 December 2022</div>
                                    </span>
                                </div>
                            </div>
                            <button className="dark:hover:bg-zinc-700/50 hover:bg-zinc-300 text-zinc-500 self-center rounded-full w-10 h-10">
                                <i className="bi-arrow-right"/>
                            </button>
                        </div>

                        {DataNewRelease.map(doc => {
                            return (
                                <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex rounded p-3" title={doc.Title} onClick={OnTop}>
                                    <div style={{ backgroundImage: `url(${doc.Cover})` }} className='bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10 mr-3'></div>
                                    <div className='md:w-8/12 w-10/12'>
                                        <div className='text-zinc-500 self-center whitespace-nowrap text-sm text-ellipsis overflow-hidden'>{doc.Title}</div>
                                        <div className="text-zinc-500 flex text-xs">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center mr-3">{doc.View}</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetail