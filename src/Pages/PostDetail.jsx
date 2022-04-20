import React from 'react'
import { useParams, Link } from 'react-router-dom'
import IncNavbar from "../Components/IncNavbar";
import Tb_Post from '../Firebase/Tb_Post'
import Tb_Similar from '../Firebase/Tb_Similar'


const PostDetail = () => {
    const {id} = useParams();
    
    const DataPost          = Tb_Post().UsePost;  
    const DataSimilar       = Tb_Similar()._Post;
    const GetPostDetail     = DataPost.find(doc => doc.id == id);
    const SetSimilar        = DataSimilar.slice(0, -4);
    const GetSimilar        = DataPost.filter(doc => doc.title.toLowerCase().includes(SetSimilar.toString().toLowerCase()));
        
    const OnTop             = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



    return (
        <>
            <IncNavbar />

            <div className="container mx-auto mt-28 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:basis-5/12 md:basis-8/12 basis-full">
                        
                        {GetPostDetail != null && (
                            <div className="mb-10">   
                                <div className="bg-neutral-700 rounded-sm h-80 mb-3">
                                    <iframe className='w-full h-full' src={GetPostDetail.embed} scrolling="no" frameborder="0" allowfullscreen="true"></iframe>
                                </div>

                                <div className="flex justify-between py-3">
                                    <div className="flex">
                                        <div className="bg-[url('https://git-covers.pages.dev/images/victorian-maid-maria.jpg')] bg-no-repeat bg-cover bg-center self-center border-2 rounded-full drop-shadow-sm w-10 h-10  mr-5"></div>
                                        <div>
                                            <h3 className="text-white">{GetPostDetail.title}</h3>
                                            <div className="flex pb-3">
                                                <i className="bi-eye-fill text-white text-sm self-center mr-3"></i>
                                                <div className="text-white text-xs self-center font-light">{GetPostDetail.view}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex self-center">
                                        <button className="bg-neutral-700 hover:bg-neutral-900 self-center rounded-sm text-white text-xs font-medium uppercase px-3 py-2">Download</button>
                                        <Link to={`/`} className="bg-neutral-700 hover:bg-neutral-900 self-center rounded-sm text-white text-xs font-medium uppercase px-3 py-2 ml-1">Back</Link>
                                    </div>
                                </div>

                                <div>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                    <button className="bg-neutral-700 hover:bg-neutral-900 text-white self-center rounded-sm text-xs font-thin px-3 py-1 ml-1 mb-1">aadasd</button>
                                </div>
                            </div>
                        )}

                        {GetSimilar.length != 0 && (
                            <div className='bg-neutral-700 rounded-sm p-3 mb-10'>
                                {GetSimilar.map(doc => {
                                    return (
                                        <Link to={`/${doc.id}`} key={doc.id} className="hover:bg-neutral-800 text-white text-sm font-thin rounded-sm block p-3" onClick={OnTop}>
                                            {doc.title}
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