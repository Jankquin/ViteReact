import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Database from "../../Firebase/Database";

const Hentai = () => {
    const Tb_Hentai  = Database().Tb_Hentai;

    const [Modal, setModal] = useState({});
    const [ArrayBrand, setArrayBrand] = useState(['@ OZ','37c-Binetsu','Almond Collective','Amour','Animac','Arms','Blue Eyes','Bootleg','BreakBottle','BugBug','Bunnywalker','Celeb','Central Park Media','ChiChinoya','ChuChu','Circle Tribute','CoCoans','Collaboration Works','Cosmos','Cranberry','Crimson','D3','Daiei','demodemon','Digital Works','Discovery','EBIMARU-DO','Echo','ECOLONUN','Edge','Erozuki','evee','FINAL FUCK 7','Five Ways','Front Line','fruit','GOLD BEAR','gomasioken','Green Bunny','Hoods Entertainment','Hot Bear','Hykobo','Jellyfish','Jumondo','kate_sai','KENZsoft','King Bee','Knack','Kuril','L.','Lemon Heart','Lilix','Lune Pictures','Magic Bus','Magin Label','Marigold','Mary Jane','Media Blasters','MediaBank','Moon Rock','Moonstone Cherry','MS Pictures','Nihikime no Dozeu','NuTech Digital','Pashmina','Pink Pineapple','Pinkbell','Pixy Soft','Pocomo Premium','PoRO','Project No.9','Queen Bee','Rabbit Gate','sakamotoJ','SANDWICHWORKS','Schoolzone','seismic','SELFISH','Seven','Shadow Prod. Co.','Shinyusha','Showten','Soft on Demand','STARGATE3D','Studio 9 Maiami','Studio Akai Shohosen','Studio Deen','Studio Fantasia','Studio FOW','studio GGB','Studio Zealot','Suzuki Mirano','SYLD','T-Rex','TOHO','Toranoana','TYS Work','Umemaro-3D','Union Cho','Valkyria','Vanilla','White Bear','X City','Y.O.U.C.','yosino','ZIZ']);
    const [ArrayGenre, setArrayGenre] = useState(['3D','Ahegao','Anal','BDSM','Big Boobs','Blow Job','Bondage','Boob Job','Censored','Comedy','Cosplay','Creampie','Dark Skin','Facial','Fantasy','Filmed','Foot Job','Futanari','Gangbang','Glasses','Hand Job','Harem','HD','Horror','Incest','Inflation','Lactation','Loli','Maid','Masturbation','Milf','Mind Break','Mind Control','Monster','Nekomimi','NTR','Nurse','Orgy','Plot','POV','Pregnant','Public Sex','Rape','Reverse Rape','Rimjob','Scat','School Girl','Shota','Softcore','Swimsuit','Teacher','Tentacle','Threesome','Toys','Trap','Tsundere','Ugly Bastard','Uncensored','Vanilla','Virgin','Watersports','X-Ray','Yaoi','Yuri'])

    return (
        <>     
            <div className="dark:bg-zinc-900 bg-white fixed w-full shadow-lg top-0 left-0 z-10">
                <div className="container md:w-10/12 w-full mx-auto md:px-0 px-3 mt-14 py-3">
                    <div className="md:w-6/12 grid grid-cols-5 mx-auto">
                        <button name='Type' className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center gap-2 h-9 px-4" title='Choose Your Type' onClick={(event) => {
                            Modal.Modal == "Type" ?
                                setModal((doc) => ({...doc, Modal: false})) :
                                setModal((doc) => ({...doc, Modal: "Type"}))
                            }}>
                            <i className="bi-exclude self-center"></i>
                            <div className='self-center text-xs font-medium uppercase lg:block hidden'>Type</div>
                        </button>
                        <button name='Genre' className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center gap-2 h-9 px-4" title='Choose Your Genre' onClick={(event) => {
                            Modal.Modal == "Genre" ?
                                setModal((doc) => ({...doc, Modal: false})) :
                                setModal((doc) => ({...doc, Modal: "Genre"}))
                            }}>
                            <i className="bi-layers-fill self-center"></i>
                            <div className='self-center text-xs font-medium uppercase lg:block hidden'>Genre</div>
                        </button>
                        <button name='Brand' className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center gap-2 h-9 px-4" title='Choose Your Brand' onClick={(event) => {
                            Modal.Modal == "Brand" ?
                                setModal((doc) => ({...doc, Modal: false})) :
                                setModal((doc) => ({...doc, Modal: "Brand"}))
                            }}>
                            <i className="bi-exclude self-center"></i>
                            <div className='self-center text-xs font-medium uppercase lg:block hidden'>Brand</div>
                        </button>
                        <button name='Filter' className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center gap-2 h-9 px-4" title='Order List' onClick={(event) => {
                            Modal.Modal == "Filter" ?
                                setModal((doc) => ({...doc, Modal: false})) :
                                setModal((doc) => ({...doc, Modal: "Filter"}))
                            }}>
                            <i className="bi-sort-down self-center"></i>
                            <div className='self-center text-xs font-medium uppercase lg:block hidden'>Filter</div>
                        </button>
                        <button name='Reset' className="hover:bg-indigo-700 bg-indigo-800 text-white text-xs font-medium uppercase rounded justify-center h-9 px-4" title='Reset List' onClick={(event) => setModal({})}>Reset</button>
                    </div>

                    <div className="md:w-6/12 mx-auto">
                        {Modal.Modal == 'Type' &&
                            <div className="grid grid-cols-5 gap-1 py-3">
                                <Link to={`/hentai`} className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4">
                                    <div className="text-xs self-center">Hentai</div>
                                </Link>
                                <Link to={`/manga`} className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4">
                                    <div className="text-xs self-center">Manga</div>
                                </Link>
                            </div>
                        }
                        
                        {Modal.Modal == 'Genre' &&
                            <div className="grid grid-cols-5 gap-1 max-h-48 overflow-scroll my-3">
                                {ArrayGenre.map((doc, index) => {
                                    return(
                                        <button key={index} className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4" title={doc}>
                                            <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden self-center">{doc}</div>
                                        </button>
                                    )
                                })}
                            </div>
                        }
                        
                        {Modal.Modal == 'Brand' &&
                            <div className="grid grid-cols-5 gap-1 max-h-48 overflow-scroll my-3">
                                {ArrayBrand.map((doc, index) => {
                                    return(
                                        <button key={index} className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4" title={doc}>
                                            <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden self-center">{doc}</div>
                                        </button>
                                    )
                                })}
                            </div>
                        }

                        {Modal.Modal == 'Filter' &&
                            <div className="grid grid-cols-5 gap-1 py-3">
                                <button className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4" title='New Release'>
                                    <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden self-center">New Release</div>
                                </button>
                                <button className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4" title='New Upload'>
                                    <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden self-center">New Upload</div>
                                </button>
                                <button className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4" title='Oldest'>
                                    <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden self-center">Oldest</div>
                                </button>
                                <button className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4" title='A-Z'>
                                    <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden self-center">A-Z</div>
                                </button>
                                <button className="dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-white text-zinc-900 rounded flex justify-center border gap-2 h-9 px-4" title='Z-A'>
                                    <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden self-center">Z-A</div>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="w-full min-h-screen">
                <div className="container md:w-10/12 w-full relative mx-auto md:px-0 px-3 pt-48">
                    <div className="grid md:grid-cols-6 grid-cols-3 gap-2 mb-5">
                        {Tb_Hentai.map(doc => {
                            return (
                                <Link to={`/hentai/${doc.Slug}`} key={doc.Id} className="dark:hover:bg-zinc-700/50 text-zinc-500 flex-none group rounded first:ml-0 last:mr-0 overflow-hidden">
                                    <div style={{ backgroundImage: `url(${doc.Image})` }} className="lg:h-64 lg:w-44 md:h-52 md:w-36 h-44 w-28 bg-cover bg-center rounded"></div>
                                    <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm font-medium text-center lg:w-36 md:w-36 w-28 px-2 py-1">{doc.Title}</div>
                                    <div className="flex text-xs justify-center pb-3">
                                        <i className="bi-eye-fill self-center mr-2"></i>
                                        <div className="self-center">Chapter 1</div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    
                    {Tb_Hentai &&
                        <center>
                            <button className="dark:hover:bg-zinc-700 dark:text-white text-zinc-900 flex gap-2 justify-center rounded w-[7rem] h-9">
                                <div className="text-sm self-center">More</div>
                            </button>
                        </center>
                    }
                </div>
            </div>
        </>
    )
}

export default Hentai