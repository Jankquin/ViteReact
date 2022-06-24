import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Database from '../../Firebase/Database'

const PostDetail = () => {
    const {id} = useParams();
    
    const DataTb_manga       = Database().Tb_Manga;  
    const DataTb_MangaDetail = DataTb_manga && DataTb_manga.find(doc => doc.Id == id);


    return (
        <>
            <div className="container mx-auto lg:px-2 px-3 py-5 mt-16">
                <div className="flex justify-center mb-10">
                    <div className="bg-zinc-800 lg:w-6/12 md:w-8/12x w-full rounded p-3">
                        {DataTb_MangaDetail &&
                            <>
                                <Link to={`/manga`} className="bg-zinc-700 flex rounded p-3 mb-1">
                                    {DataTb_MangaDetail.Title}
                                </Link>

                                <img  src={DataTb_MangaDetail.Cover} height="245" width="172" className="rounded object-cover h-auto w-44 mb-5 mx-auto" />

                                {DataTb_MangaDetail.Chapter.map((doc, index) =>                        
                                    <Link to={`/manga/${id}/${doc.Title}`} key={index} className="bg-zinc-700 flex rounded p-3 mb-1">
                                        {doc.Title} - {doc.View} 
                                    </Link>
                                )}
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetail