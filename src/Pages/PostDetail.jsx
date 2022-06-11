import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Tb_Post from '../Firebase/Tb_Post'
import Tb_Similar from '../Firebase/Tb_Similar'


const PostDetail = () => {
    const {id} = useParams();
    
    const DataPost          = Tb_Post().UsePost;  
    const DataSimilar       = Tb_Similar().UseSimilar;
    const GetPostDetail     = DataPost.find(doc => doc.Id == id);
    const SetSimilar        = DataSimilar.slice(0, -4);
    const GetSimilar        = DataPost.filter(doc => doc.Title.toLowerCase().includes(SetSimilar.toString().toLowerCase()));

    const OnTop             = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <div className="container lg:w-11/12 mx-auto mt-20 lg:px-0 px-3">
                <div className="dark:bg-zinc-800 md:flex rounded lg:overflow-hidden block mb-5">
                    <div className="rounded md:w-8/12 lg:h-[30rem] h-[20rem] w-full"> 
                        {GetPostDetail != null && (
                            <iframe className='w-full h-full rounded animate-fadeIn' src={GetPostDetail.Embed} scrolling="no" frameBorder="0" allowFullScreen={true}></iframe>
                        )}
                    </div>

                    <div className="md:w-4/12 lg:h-[30rem] h-[20rem] w-full overflow-hidden p-3">
                        <div className="h-2/6 md:hidden">
                            {GetPostDetail != null && (
                                <div className='rounded overflow-hidden animate-fadeIn'>
                                    <div className="px-3">
                                        <div className='flex mb-5'>
                                            <div style={{ backgroundImage: `url(${GetPostDetail.Cover})` }} className='bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10 mr-3'></div>
                                            <div className='md:w-7/12 w-6/12 self-start'>
                                                <div className="text-zinc-500 flex text-xs">
                                                    <i className="bi-clock-fill self-center mr-2"></i>
                                                    <div className="self-center mr-3">{GetPostDetail.Release.toDate().toLocaleDateString('sv')}</div>
                                                    <i className="bi-eye-fill self-center mr-2"></i>
                                                    <div className="self-center mr-3">{GetPostDetail.View}</div>
                                                </div>
                                                <div className='text-zinc-500 whitespace-nowrap font-medium text-ellipsis overflow-hidden'>{GetPostDetail.Title}</div>
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
                        </div>

                        <div className="h-1/6 grid grid-cols-4">
                            <button className='dark:hover:bg-zinc-700/50 text-zinc-500 rounded'>
                                <i className="bi-heart-fill text-xl mb-2"/>
                                <div className='text-sm lg:block hidden'>Like</div>
                            </button>
                            <button className='dark:hover:bg-zinc-700/50 text-zinc-500 rounded'>
                                <i className="bi-bookmark-plus-fill text-xl mb-2"/>
                                <div className='text-sm lg:block hidden'>Bookmark</div>
                            </button>
                            <button className='dark:hover:bg-zinc-700/50 text-zinc-500 rounded'>
                                <i className="bi-flag-fill text-xl mb-2"/>
                                <div className='text-sm lg:block hidden'>Report</div>
                            </button>
                            <button className='dark:hover:bg-zinc-700/50 text-zinc-500 rounded'>
                                <i className="bi-cloud-arrow-down-fill text-xl mb-2"/>
                                <div className='text-sm lg:block hidden'>Download</div>
                            </button>
                        </div>

                        <div className="md:h-5/6 h-3/6 overflow-y-scroll">
                            {GetSimilar.length != 0 && (
                                <div className='animate-fadeIn'>
                                    <div className="text-zinc-500 flex my-5">
                                        <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                                        <div className="font-medium self-center">Similar Post</div>
                                    </div>

                                    {GetSimilar.map(doc => {
                                        return (
                                            <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 rounded whitespace-nowrap text-ellipsis text-sm font-medium block p-3" onClick={OnTop}>
                                                {doc.Title}
                                            </Link>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="rounded md:w-9/12 w-full h-full bg-zinc-800 md:block hidden">
                    {GetPostDetail != null && (
                        <div className='rounded overflow-hidden animate-fadeIn'>
                            <div className="px-3">
                                <div className='flex mb-5'>
                                    <div style={{ backgroundImage: `url(${GetPostDetail.Cover})` }} className='bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10 mr-3'></div>
                                    <div className='md:w-7/12 w-6/12 self-start'>
                                        <div className="text-zinc-500 flex text-xs">
                                            <i className="bi-clock-fill self-center mr-2"></i>
                                            <div className="self-center mr-3">{GetPostDetail.Release.toDate().toLocaleDateString('sv')}</div>
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center mr-3">{GetPostDetail.View}</div>
                                        </div>
                                        <div className='text-zinc-500 whitespace-nowrap font-medium text-ellipsis overflow-hidden'>{GetPostDetail.Title}</div>
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
                </div>
            </div>
        </>
    )
}

export default PostDetail