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
                    <div className="lg:basis-5/12 md:basis-8/12 basis-full">
                        
                        {GetPostDetail != null && (
                            <div className="bg-white shadow-lg rounded-sm overflow-hidden mb-10">   
                                <div className="bg-neutral-700 h-80 mb-3">
                                    {/* <iframe className='w-full h-full' src={GetPostDetail.embed} scrolling="no" frameborder="0" allowfullscreen="true"></iframe> */}
                                </div>

                                <div className="flex justify-between p-3">
                                    <div className="flex">
                                        <div className="bg-[url('https://git-covers.pages.dev/images/victorian-maid-maria.jpg')] bg-no-repeat bg-cover bg-center self-center border-2 rounded-full drop-shadow-sm w-10 h-10  mr-5"></div>
                                        <div>
                                            <h3 className='text-slate-800 font-medium'>{GetPostDetail.Title}</h3>
                                            <div className="text-slate-600 flex pb-3">
                                                <i className="bi-eye-fill text-sm self-center mr-3"></i>
                                                <div className="text-xs font-thin self-center">{GetPostDetail.View}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex self-center">
                                        <a href="#!" className="bg-indigo-600 self-center text-white text-xs font-medium uppercase rounded-sm px-3 py-2">Download</a>
                                    </div>
                                </div>

                                <div className='px-3 pb-3'>
                                    {/* {GetPostDetail.Genre} */}
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                    <button className="hover:bg-slate-200/50 text-slate-800 self-center rounded-sm text-xs font-thin px-3 py-1 mr-1 mb-1">aadasd</button>
                                </div>
                            </div>
                        )}



                        {GetSimilar.length != 0 && (
                            <>
                                <div className='flex mb-5'>
                                    <div className='bg-indigo-200 flex rounded-full w-10 h-10 mr-3'>
                                        <i className='bi-justify text-indigo-500 self-center mx-auto'></i>
                                    </div>
                                    <h2 className="text-slate-500 self-center font-medium">Related Post</h2>
                                </div>

                                <div className='bg-white shadow-lg rounded-sm overflow-hidden p-3 mb-10'>
                                    {GetSimilar.map(doc => {
                                        return (
                                            <Link to={`/${doc.Id}`} key={doc.Id} className="hover:bg-slate-200/50 text-slate-800 text-sm font-thin rounded-sm block p-3" onClick={OnTop}>
                                                {doc.Title}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetail