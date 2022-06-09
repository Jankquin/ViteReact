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
            <div className="container lg:w-11/12 mx-auto lg:px-2 px-3 py-5 mt-28">
                <div className="flex mb-10">
                    <div className="lg:w-8/12 p-3">
                        
                        {GetPostDetail != null && (
                            <div className='rounded overflow-hidden mb-10 animate-fadeIn'>
                                <div className="bg-neutral-800 rounded h-[25rem] mb-5">
                                   <iframe className='w-full h-full' src={GetPostDetail.Embed} scrolling="no" frameborder="0" allowfullscreen="true"></iframe>
                                </div>

                                <div className='flex px-3 pb-3'>
                                    <div style={{ backgroundImage: `url(${GetPostDetail.Cover})` }} className='bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10 mr-3'></div>
                                    <div className='md:w-7/12 w-6/12 self-start'>
                                        <h2 className='whitespace-nowrap text-zinc-500 font-medium text-ellipsis text-sm overflow-hidden mb-1'>{GetPostDetail.Title}</h2>
                                        <div className="flex text-zinc-500 text-xs pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{GetPostDetail.View}</div>
                                        </div>
                                    </div>
                                    <a href="#!" className="bg-indigo-500 hover:bg-indigo-700/50 text-white text-xs rounded self-start px-4 py-2 ml-auto">Download</a>
                                </div>
                                
                                <div className='flex md:w-7/12 w-6/12 self-start'>
                                    <h2 className='whitespace-nowrap text-zinc-500 font-medium text-ellipsis text-sm overflow-hidden mb-1 mr-3'>{GetPostDetail.View}</h2>
                                    <div className="flex text-zinc-500 text-xs pb-3">
                                        <i className="bi-clock-fill self-center mr-2"></i>
                                        <div className="self-center">22/22/22</div>
                                    </div>
                                </div>

                                <div className='flex flex-wrap gap-1 px-3 pb-3'>
                                    {GetPostDetail.Genre.sort().map(doc => {
                                        return(
                                            <button key={doc} className="dark:hover:bg-zinc-700/50 text-zinc-500 border-zinc-700/50 border rounded-sm text-xs px-3 py-1">{doc}</button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                    </div>

                    <div className="lg:w-4/12 bg-zinc-800 p-3">
                        {GetSimilar.length != 0 && (
                            <div className='animate-fadeIn'>
                                <div className="text-zinc-500 flex mr-5 mb-5">
                                    <i className="bi-grid-fill text-2xl self-center mr-3"/>    
                                    <span>
                                        <div className="font-medium">Similar Post</div>
                                        <div className="text-xs">21 December 2022</div>
                                    </span>
                                </div>

                                {GetSimilar.map(doc => {
                                    return (
                                        <Link to={`/${doc.Id}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 rounded whitespace-nowrap text-ellipsis text-sm block p-3 mb-1" onClick={OnTop}>
                                            {doc.Title}
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default PostDetail