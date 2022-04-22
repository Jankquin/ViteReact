import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import Tb_Post from '../Firebase/Tb_Post'
import Tb_Recomended from '../Firebase/Tb_Recomended'
import IncNavbar from "../Components/IncNavbar";

const PagePost = () => {
    const [LoadMore, setLoadMore] = useState(4);
    const DataPost = Tb_Post().UsePost;
    const DataRecomended = Tb_Recomended().UseRecomended;

    const LoadMoreBtn = () => {
        const GetLoadMore = LoadMore + 4;
        setLoadMore(GetLoadMore);
    }

    const sliceData = DataPost.slice(0, LoadMore);

    return (
        <>
            <IncNavbar />

            <div className="container mx-auto mt-28 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:basis-5/12 md:basis-8/12 basis-full">

                        {DataRecomended.map(doc => {
                            return (
                                <Link to={`/${doc.Id}`} key={doc.Id} className="group hover:drop-shadow-lg relative block w-full rounded-sm overflow-hidden h-48 mb-10">
                                    <div className="bg-gradient-to-r from-neutral-700 via-neutral-700 absolute flex h-full w-full top-0 z-10">
                                        <div className="self-end w-2/4 pl-5 pb-5">
                                            <div className="bg-[url('https://git-covers.pages.dev/images/victorian-maid-maria.jpg')] bg-no-repeat bg-cover bg-center border-2 rounded-full drop-shadow-sm w-10 h-10 mb-3"></div>
                                            <h2 className="whitespace-nowrap text-ellipsis text-left overflow-hidden text-white md:text-xl text-sm font-medium">{doc.title}</h2>
                                            <p className="text-yellow-400 md:text-sm text-xs text-left font-light">Lorem ipsum dolor sit amet, consectetur.</p>
                                        </div>
                                    </div>

                                    <div className="bg-[url('https://git-covers.pages.dev/images/victorian-maid-maria.jpg')] bg-cover bg-top group-hover:scale-125 scale-110 duration-500 absolute right-0 h-full top-0 w-2/4 z-0"></div>
                                </Link>
                            )
                        })}

                        <h2 className="text-white font-medium mb-3">New Uploaded</h2>

                        <div className="grid grid-cols-4 gap-1 mb-10">
                            {sliceData.map(doc => {
                                return (
                                    <Link to={`/${doc.Id}`} key={doc.Id} className="group hover:bg-neutral-700 hover:drop-shadow-sm rounded-sm overflow-hidden w-full mb-3">    
                                        <img src="https://git-covers.pages.dev/images/victorian-maid-maria.jpg" className="rounded-sm" alt={doc.Title} height="40"/> 
                                        <h3 className="whitespace-nowrap text-ellipsis overflow-hidden text-white text-sm font-thin px-2 py-1">{doc.Title} Lorem ipsum dolor sit amet.</h3>
                                        <div className="flex justify-center pb-3">
                                            <i className="bi-eye-fill text-white text-sm self-center mr-3"></i>
                                            <div className="text-white text-xs self-center font-light">{doc.View}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        {LoadMore < DataPost.length && (
                            <button className="hover:bg-neutral-700 active:bg-neutral-900 text-white font-medium block text-xs uppercase rounded-sm mx-auto px-6 py-2.5" onClick={LoadMoreBtn} >
                                <span>Load More</span>
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default PagePost