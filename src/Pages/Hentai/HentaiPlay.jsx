import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { db } from "../../Firebase/Config";
import { Timestamp, setDoc, collection } from "firebase/firestore";
import Database from "../../Firebase/Database";


const HentaiDetail = () => {
    const {Slug} = useParams();
    const Tb_Report            = Database().Tb_Report;
    const Tb_Hentai            = Database().Tb_Hentai; 

    const [Modal, setModal]    = useState({Alert: false, Report: false,});
    const [Report, setReport]  = useState({Report: 'Broken'});
    const Tb_HentaiDetail      = Tb_Hentai.find(doc => doc.Slug == Slug);
    const Tb_HentaiFilter      = []
    
    
    if(Tb_HentaiDetail && Tb_HentaiDetail.Title.split(' ').length > 3){
        const Tb_HentaiSplit   = Tb_HentaiDetail && Tb_HentaiDetail.Title.split(' ', 3).join(" ").toString().toLowerCase()
        const Tb_HentaiSimilar = Tb_Hentai.filter(doc => doc.Title.toLowerCase().includes(Tb_HentaiSplit));
        Tb_HentaiFilter.push(Tb_HentaiSimilar)
    }else{
        const Tb_HentaiSplit   = Tb_HentaiDetail && Tb_HentaiDetail.Title.split(' ', 1).join(" ").toString().toLowerCase()
        const Tb_HentaiSimilar = Tb_Hentai.filter(doc => doc.Title.toLowerCase().includes(Tb_HentaiSplit));
        Tb_HentaiFilter.push(Tb_HentaiSimilar)
    }

    const Register = () => {
        event.preventDefault();

        const Data      = doc(collection(db, "Tb_Report"));
        setDoc(Data, { 
            Id          : Tb_Report.slice(0, 1).map(doc => doc.Id) * 1 + 1,
            Url         : window.location.href,
            Title       : Tb_HentaiDetail.Title,
            Report      : Report.Report,
            Comment     : Report.Comment,
            Created_At  : Timestamp.fromDate(new Date()), 
            Updated_At  : Timestamp.fromDate(new Date()), 
        });

        setModal((doc) => ({...doc, Alert: true}))
    }

    const css = ` body { overflow: hidden } `

    return (
        <>
            {Tb_HentaiDetail &&
                <>
                    <div className={`bg-gradient-to-bl from-indigo-700/90 to-purple-700/90 md:h-72 h-48 w-full relative shadow-xl mx-auto`}>
                        <div style={{backgroundImage: `url(${Tb_HentaiDetail.Image})`, backgroundPosition: 'center 30%'}} className="bg-cover absolute top-0 left-0 h-full w-full -z-10"/>
                    </div>
                    
                    <div className="container md:w-10/12 relative mx-auto md:px-0 px-3 md:-mt-48 -mt-20">
                        <div className="dark:bg-zinc-800 bg-white lg:w-8/12 md:w-10/12 rounded shadow mx-auto mb-14">
                            <iframe  className='w-full lg:h-[26rem] h-[20rem] animate-fadeIn delay-500' scrolling="no" frameBorder="0" allowFullScreen={true}></iframe>

                            <div className="dark:border-zinc-700 border-zinc-200 border-t relative p-3">
                                <div className="flex gap-3">
                                    <div style={{ backgroundImage: `url(${Tb_HentaiDetail.Image})` }} className="flex-none bg-no-repeat bg-cover bg-center shadow rounded-full self-center w-14 h-14"></div>

                                    <div className="flex-auto overflow-hidden">
                                        <div className="dark:text-zinc-100 text-zinc-700 font-bold whitespace-nowrap text-ellipsis text-lg overflow-hidden">{Tb_HentaiDetail.Title}</div>
                                        
                                        <div className="flex justify-between">
                                            <div className="dark:text-zinc-100 text-zinc-700 flex gap-2">
                                                <i className='bi-eye-fill self-center'></i>
                                                <div className="whitespace-nowrap text-ellipsis font-bold self-center overflow-hidden">{Tb_HentaiDetail.View}</div>
                                            </div>

                                            <div className="flex gap-1">
                                                <button className="dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-200 text-zinc-700 flex gap-2 justify-center rounded h-8 px-3"
                                                    onClick={(event) => {
                                                        Modal.Report ? 
                                                            setModal({}) :
                                                            setModal({Report: true})
                                                        }
                                                    }>
                                                    <i className='bi-flag-fill self-center'></i>
                                                    <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis md:block hidden overflow-hidden">Report</div>
                                                </button>
                                                <button className="dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-200 text-zinc-700 flex gap-2 justify-center rounded h-8 px-3">
                                                    <i className='bi-cloud-arrow-down-fill self-center'></i>
                                                    <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis overflow-hidden">Download</div>
                                                </button>
                                                <button className="dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-200 text-zinc-700 flex gap-2 justify-center rounded h-8 w-8" 
                                                    onClick={(event) => {
                                                        Modal.Detail ? 
                                                            setModal({}) :
                                                            setModal({Detail: true})
                                                        }
                                                    }>
                                                    <i className='bi-chevron-down self-center'></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${!Modal.Detail && 'hidden'} p-3`}>
                                <div className={`dark:bg-zinc-700 bg-zinc-100 grid grid-cols-2 gap-5 p-5 rounded animate-fadeDown delay-500`}>
                                    <div className="dark:text-zinc-100 text-zinc-700 rounded text-left">
                                        <div className="flex gap-2">
                                            <i className='bi-person-fill'></i>
                                            <div className="">Brand</div>
                                        </div>
                                        <div className="font-bold whitespace-nowrap text-ellipsis overflow-hidden animate-fadeDown delay-500">{Tb_HentaiDetail.Brand}</div>
                                    </div>

                                    <div className="dark:text-zinc-100 text-zinc-700 rounded text-left">
                                        <div className="flex gap-2">
                                            <i className='bi-calendar-fill'></i>
                                            <div className="">Released</div>
                                        </div>
                                        <div className="font-bold whitespace-nowrap text-ellipsis overflow-hidden animate-fadeDown delay-500">{Tb_HentaiDetail.Released.toDate().toLocaleDateString('sv')}</div>
                                    </div>
                                    
                                    <div className="dark:text-zinc-100 text-zinc-700 rounded text-left">
                                        <div className="flex gap-2">
                                            <i className='bi-eye-fill'></i>
                                            <div className="">Genre</div>
                                        </div>
                                        <div className='flex flex-wrap gap-2 rounded animate-fadeDown delay-500'>
                                            <button className="dark:text-zinc-100 text-zinc-700 text-xs font-bold">Ahegao</button>
                                            <button className="dark:text-zinc-100 text-zinc-700 text-xs font-bold">Ahegao</button>
                                            <button className="dark:text-zinc-100 text-zinc-700 text-xs font-bold">Ahegao</button>
                                            <button className="dark:text-zinc-100 text-zinc-700 text-xs font-bold">Ahegao</button>
                                        </div>
                                    </div>
                                    
                                    <div className="dark:text-zinc-100 text-zinc-700 rounded text-left">
                                        <div className="flex gap-2">
                                            <i className='bi-clock-fill'></i>
                                            <div className="">Uploaded</div>
                                        </div>
                                        <div className="font-bold whitespace-nowrap text-ellipsis overflow-hidden animate-fadeDown delay-500">{Tb_HentaiDetail.Created_At.toDate().toLocaleDateString('sv')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="md:w-8/12 overflow-hidden mx-auto mb-14">
                            <div className="flex gap-5 mb-5 animate-fadeIn delay-500">
                                <div className="dark:text-zinc-100 text-zinc-700 flex gap-3">
                                    <i className="bi-list text-2xl self-center"/>    
                                    <div className="font-bold self-center">Other</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-2 animate-fadeIn delay-500 p-1">
                                {Tb_HentaiFilter[0].slice(0, 5).map((doc, index) => {
                                    return(
                                        <Link key={index} to={`/hentai/${doc.Slug}`} className="flex dark:bg-zinc-800 bg-white dark:text-zinc-100 text-zinc-700 shadow gap-3 rounded p-3">     
                                            <div style={{ backgroundImage: `url(${doc.Image})` }} className="flex-none bg-no-repeat bg-cover bg-center rounded-full self-start w-10 h-10"></div>
                                            <div className="flex-auto self-center overflow-hidden">
                                                <div className="text-sm text-ellipsis whitespace-nowrap font-bold overflow-hidden">{doc.Title}</div>

                                                <div className="flex gap-2 text-xs">
                                                    <div className="bi-eye-fill self-center"></div>
                                                    <div className="self-center">{doc.View}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>


                    {Modal.Report && (
                        <div className="fixed flex bg-zinc-900/80 top-0 left-0 w-full h-full z-40">
                            <div className="container md:px-0 px-3 py-2 m-auto">
                                <div className="dark:bg-zinc-800 bg-white lg:w-5/12 md:w-8/12 w-full rounded self-center mx-auto p-5 animate-fadeUp">
                                    
                                    {!Modal.Alert ?
                                        <form className="grid gap-3" onSubmit={Register}>
                                            <div className="flex gap-5 mb-5">
                                                <div className="dark:text-zinc-100 text-zinc-700 flex gap-3">
                                                    <i className="bi-exclamation-triangle text-2xl self-center"/>    
                                                    <div className="font-bold self-center">Report</div>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <div className={`${Report.Report == 'Broken' && 'bg-zinc-700'} dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-200 text-zinc-700 flex gap-2 justify-center cursor-pointer rounded h-8 px-3`}
                                                    onClick={(event) => {
                                                        Report.Report == 'Broken' ?
                                                            setReport({}) :
                                                            setReport((doc) => ({...doc, Report: 'Broken'}))
                                                    }}>
                                                    <i className={`${Report.Report == 'Broken' ? 'bi-circle-fill' : 'bi-circle'} self-center`}></i>
                                                    <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis overflow-hidden">Broken Link</div>
                                                </div>
                                                
                                                <div className={`${Report.Report == 'Other' && 'bg-zinc-700'} dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-200 text-zinc-700 flex gap-2 justify-center cursor-pointer rounded h-8 px-3`}
                                                    onClick={(event) => {
                                                        Report.Report == 'Other' ?
                                                            setReport({}) :
                                                            setReport((doc) => ({...doc, Report: 'Other'}))
                                                    }}>
                                                    <i className={`${Report.Report == 'Other' ? 'bi-circle-fill' : 'bi-circle'} self-center`}></i>
                                                    <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis overflow-hidden">Other</div>
                                                </div>
                                            </div>

                                            <input defaultValue={Tb_HentaiDetail.Title} className='dark:bg-zinc-700 dark:text-zinc-100 bg-zinc-200 text-zinc-700 rounded outline-none w-full p-3' disabled/>

                                            <textarea className='dark:bg-zinc-700 dark:text-zinc-100 bg-zinc-200 text-zinc-700 rounded outline-none w-full h-32 p-3' 
                                                defaultValue={Report.Comment} 
                                                onChange={(event) => 
                                                    setReport((doc) => ({
                                                        ...doc, Comment: event.target.value 
                                                    }) 
                                                )}>
                                            </textarea>
                                            
                                            <div className="flex gap-2 justify-center">
                                                <button className="dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-200 text-zinc-700 flex gap-2 justify-center rounded h-8 min-w-[7rem] px-3">
                                                    <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis overflow-hidden">Report</div>
                                                </button>

                                                <button className="dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-200 text-zinc-700 flex gap-2 justify-center rounded h-8 min-w-[7rem] px-3"
                                                    onClick={(event) => setModal({Alert: false, Report: false})}>
                                                    <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis overflow-hidden">Back</div>
                                                </button>
                                            </div>
                                        </form> 
                                        :
                                        <center>
                                            <div className='flex bg-zinc-100 rounded-full mx-auto w-14 h-14 mb-5'>
                                                <i className='bi bi-check text-zinc-700 text-4xl self-center mx-auto'></i>
                                            </div>
                                            <div className="text-zinc-100 text-2xl self-center font-medium mb-5">Succesful</div>
                                            <div className="text-zinc-100 text-sm font-light mb-5">Report succesfully saved we will fix it soon</div>

                                            <button className="dark:hover:bg-zinc-700 dark:text-zinc-100 hover:bg-zinc-200 text-zinc-700 flex gap-2 justify-center rounded h-8 min-w-[7rem] px-3"
                                                onClick={(event) => {
                                                    window.location.href = `/hentai/${Slug}`
                                                }}>
                                                <div className="text-sm font-bold self-center whitespace-nowrap text-ellipsis overflow-hidden">Back</div>
                                            </button>
                                        </center>
                                    }

                                </div>
                            </div>

                            <style>{css}</style>
                        </div>
                    )}

                </>
            }
        </>
    )
}

export default HentaiDetail