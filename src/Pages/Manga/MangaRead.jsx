import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Database from '../../Firebase/Database'

const PostDetail = () => {
    const {Id} = useParams();
    const {Slug} = useParams();
    
    const DataTb_manga       = Database().Tb_Manga;  
    const DataTb_MangaDetail = DataTb_manga && DataTb_manga.find(doc => doc.Slug == Slug);
    const DataTb_MangaRead   = DataTb_MangaDetail && DataTb_MangaDetail.Chapter[Id];

    return (
        <>
            <div className="container mx-auto lg:px-2 px-3 py-5 mt-16">
                <div className="flex justify-center mb-10">
                    <div className="bg-zinc-800 lg:w-8/12 md:w-8/12x w-full rounded p-3 text-white">
                        {DataTb_MangaRead &&
                            <>
                                {DataTb_MangaRead.Title}

                                <div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-2">
                                    {DataTb_MangaRead.Image.map((doc, index) => 
                                        <img  src={doc} key={index} height="245" width="172" className="rounded object-cover h-auto w-full" />
                                    )}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetail