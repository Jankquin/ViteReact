import React from 'react'
import { useState } from "react";

const AdminPanel = () => {
    // Create Function
    
    const css = `
        body {
            overflow: hidden;
        }
    `


    return (
        <>
            <div className="mb-10">
                <button className="hover:bg-neutral-900 focus:bg-neutral-900 bg-neutral-700 text-white font-medium text-xs uppercase rounded mx-auto px-6 py-2.5 mt-3" type="button">Add Post</button>
            </div>

        </>
    )
}

export default AdminPanel