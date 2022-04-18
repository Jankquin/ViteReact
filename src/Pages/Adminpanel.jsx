import { useState, useEffect } from "react";

const AdminPanel = () => {
    // Create Function
    const [ModalPost, setModalPost] = useState(false);
    
    const css = `
        body {
            overflow: hidden;
        }
    `


    return (
        <>
            <div className="mb-10">
                <button className="hover:bg-neutral-900 focus:bg-neutral-900 bg-neutral-700 text-white font-medium text-xs uppercase rounded mx-auto px-6 py-2.5 mt-3" type="button" onClick={(e) => setModalPost(true)}>Add Post</button>
            </div>

            {ModalPost == true &&
                <div className="bg-neutral-900/[.8] fixed w-full h-full top-0 left-0 shadow-lg">
                    <div className="bg-neutral-800 absolute w-full bottom-0 animate-fadeIn">
                        <div className="container mx-auto px-3 py-10">
                            <div className="flex justify-center">
                                <div className="lg:basis-5/12 md:basis-8/12 basis-full relative text-white">
                                    <form onSubmit={(e) => e(event.preventDefault())}>
                                        {/* <button className="hover:bg-neutral-900 bg-neutral-700 text-white font-medium text-xs uppercase rounded px-6 py-2.5 mt-3 mr-1" type="button" onClick={AddPosts} >Add Post</button> */}
                                        <button className="hover:bg-neutral-900 text-white font-medium text-xs uppercase rounded px-6 py-2.5 mt-3 mr-1" type="button" onClick={(e) => setModalPost(false)}>Cancle</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{css}</style>
                </div>
            }
        </>
    )
}

export default AdminPanel