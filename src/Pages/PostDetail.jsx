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
            <div className="container mx-auto mt-28 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:w-5/12 md:w-8/12 w-full overflow-hidden">
                        
                        {GetPostDetail != null && (
                            <div className='bg-white shadow-lg rounded-sm mb-10 animate-fadeIn'>
                                <div className="bg-neutral-700 rounded-sm h-80 mb-5">
                                   {/* <iframe className='w-full h-full' src={GetPostDetail.embed} scrolling="no" frameborder="0" allowfullscreen="true"></iframe> */}
                                </div>

                                <div className='flex overflow-hidden px-3 pb-3'>
                                    <div style={{ backgroundImage: `url(${GetPostDetail.Image})` }} className='bg-no-repeat bg-cover bg-center rounded-full self-start border-slate-500 border-2 w-10 h-10 mr-3'></div>
                                    <div className='md:w-7/12 w-6/12 self-start'>
                                        <h2 className='whitespace-nowrap text-slate-700 text-ellipsis text-sm overflow-hidden mb-1'>{GetPostDetail.Title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, non?</h2>
                                        <div className="flex text-slate-500 text-xs pb-3">
                                            <i className="bi-eye-fill self-center mr-2"></i>
                                            <div className="self-center">{GetPostDetail.View}</div>
                                        </div>
                                    </div>
                                    <a href="#!" className="bg-indigo-600 text-white text-xs uppercase rounded-sm self-start px-4 py-2 ml-auto">Download</a>
                                </div>

                                <div className='grid md:grid-cols-6 grid-cols-5 gap-1 px-3 pb-3'>
                                    {GetPostDetail.Genre.sort().map(doc => {
                                        return(
                                            <button key={doc} className="hover:bg-slate-100 text-slate-500 self-center rounded-sm text-xs px-3 py-2">
                                                {doc}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {GetSimilar.length != 0 && (
                            <div className='animate-fadeIn'>
                                <div className='flex mb-5'>
                                    <div className='bg-slate-200s flex rounded-full w-10 h-10 mr-3'>
                                        <i className='bi-grid-fill text-slate-500 self-center mx-auto'></i>
                                    </div>
                                    <h2 className="text-slate-700 self-center text-lg font-medium">Related Post</h2>
                                </div>

                                <div className='bg-white shadow-lg rounded-sm overflow-hidden p-3 mb-10'>
                                    {GetSimilar.map(doc => {
                                        return (
                                            <Link to={`/${doc.Id}`} key={doc.Id} className="whitespace-nowrap text-ellipsis hover:bg-slate-100 text-slate-700 text-sm block overflow-hidden p-3" onClick={OnTop}>
                                                {doc.Title}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetail