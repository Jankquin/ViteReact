import React from 'react'
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../Firebase/Config";
import { async } from '@firebase/util';



const PageMore = () => {
    const [UsePost, setUsePost] = useState([]);
    const [InputGenre, setInputGenre] = useState([])
    const [InputBrand, setInputBrand] = useState(['Vanilla', 'Poro'])
    const [Modal, setModal] = useState()
    
    useEffect(() => {
        const QPost           = query(collection(db, "Tb_Post"), orderBy("Id", "desc"));
        
        const FirstLoadAsync  = async () => {       
            const DPost       = await getDocs(QPost);   

            setUsePost(DPost.docs.map((doc) => ({ ...doc.data()})));
        };

        FirstLoadAsync();
    }, []);
    
    const PostFilter = UsePost.filter(( item ) => 
        InputBrand.find(val => item.Brand.indexOf(val) > -1 ) &&
        InputGenre.every(val => item.Genre.indexOf(val) > -1 ) 
    );

    const GetGenre  = (event) => {
        const Check = InputGenre.includes(event) 
        if(Check){
            setInputGenre(InputGenre.filter(doc => doc !== event));
        }else{
            setInputGenre( arr => [...arr, `${event}`]);
        }
    }
   
    const GetBrand  = (event) => {
        const Check = InputBrand.includes(event) 
        if(Check){
            setInputBrand(InputBrand.filter(doc => doc !== event));
        }else{
            setInputBrand( arr => [...arr, `${event}`]);
        }
    }

    console.log(InputGenre)

    return (
        <>
            <div className="container mx-auto mt-28 lg:px-2 px-3 py-5">
                <div className="flex justify-center mb-10">
                    <div className="lg:w-5/12 md:w-8/12 w-full">

                        <div className='grid grid-cols-4 gap-2 mb-3'>
                            {Modal == 'Genre' ?
                                <button className='bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2' onClick={(event) => setModal()}>Genre {InputGenre.length}</button> :
                                <button className='hover:bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2' onClick={(event) => setModal('Genre')}>Genre {InputGenre.length}</button>
                            }
                            {Modal == 'Brand' ?
                                <button className='bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2' onClick={(event) => setModal()}>Brand {InputBrand.length}</button> :
                                <button className='hover:bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2' onClick={(event) => setModal('Brand')}>Brand {InputBrand.length}</button>
                            }
                            <button className='hover:bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2'>Reset</button>
                            {Modal == 'Short' ?
                                <button className='bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2' onClick={(event) => setModal()}>Short</button> :
                                <button className='hover:bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2' onClick={(event) => setModal('Short')}>Short</button>
                            }
                        </div>

                        {Modal == 'Genre' &&
                            <div className='bg-white shadow-lg p-3'> 
                                <div className='grid md:grid-cols-6 grid-cols-5 gap-2'>
                                    {InputGenre.find(doc => doc == 'Ahegao') == 'Ahegao' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetGenre('Ahegao')}>Ahegao</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetGenre('Ahegao')}>Ahegao</button>
                                    }
                                    {InputGenre.find(doc => doc == 'Anal') == 'Anal' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetGenre('Anal')}>Anal</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetGenre('Anal')}>Anal</button>
                                    }
                                    {InputGenre.find(doc => doc == 'Facial') == 'Facial' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetGenre('Facial')}>Facial</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetGenre('Facial')}>Facial</button>
                                    }
                                    {InputGenre.find(doc => doc == 'Loli') == 'Loli' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetGenre('Loli')}>Loli</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetGenre('Loli')}>Loli</button>
                                    }                                    
                                </div>
                            </div>
                        }
                        
                        {Modal == 'Brand' &&
                            <div className='bg-white shadow-lg p-3'> 
                                <div className='grid md:grid-cols-5 grid-cols-4 gap-2'>
                                    {InputBrand.find(doc => doc == 'Poro') == 'Poro' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('Poro')}>Poro</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('Poro')}>Poro</button>
                                    }
                                    {InputBrand.find(doc => doc == 'Queen') == 'Queen' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('Queen')}>Queen</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('Queen')}>Queen</button>
                                    }
                                    {InputBrand.find(doc => doc == 'Lantis') == 'Lantis' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('Lantis')}>Lantis</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('Lantis')}>Lantis</button>
                                    }
                                    {InputBrand.find(doc => doc == 'MarryJane') == 'MarryJane' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('MarryJane')}>MarryJane</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('MarryJane')}>MarryJane</button>
                                    }
                                    {InputBrand.find(doc => doc == 'Vanilla') == 'Vanilla' ?
                                        <button className='bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('Vanilla')}>Vanilla</button> :
                                        <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2' onClick={(event) => GetBrand('Vanilla')}>Vanilla</button>
                                    }
                                </div>
                            </div>
                        }
                        
                        {Modal == 'Short' &&
                            <div className='bg-white shadow-lg p-3'> 
                                <div className='grid md:grid-cols-6 grid-cols-5 gap-2'>
                                    <button className='hover:bg-slate-200 text-slate-700 text-xs uppercase rounded-sm p-2'>Short</button>
                                </div>
                            </div>
                        }

                        <div className='bg-white shadow-lg mt-5 p-3'>
                            {PostFilter.map(doc => {
                                return(
                                    <div key={doc.Id} className="text-slate-700 text-sm">
                                        {doc.Title}
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PageMore