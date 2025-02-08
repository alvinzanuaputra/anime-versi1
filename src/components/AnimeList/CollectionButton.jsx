"use client"
import React, { useState } from 'react'
import 'animate.css/animate.min.css';

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false);

    const handleCollection = async (event) => {
        event.preventDefault();
        const data = { anime_mal_id, user_email, anime_image, anime_title }
        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        }
        )

        const Collection = await response.json()

        if (Collection.isCreated) {
            setIsCreated(true)
        }
        return
    }

    return (
        <div className="pt-4 flex justify-center items-center mx-auto animate__animated animate__fadeInRight animate__delay-2s">
            {isCreated
                ?
                <p
                    className="flex justify-center items-center mx-8  w-full px-6 font-bold text-[9px] rounded-[2px] border border-color-accent py-2 bg-color-secondary text-color-primary hover:bg-color-dark hover:text-color-accent duration-500 transition-all hover:border-color-hitam">
                    Success to add
                </p>
                :
                <button
                    onClick={handleCollection}
                    className="w-full mx-8 px-6 font-bold text-[9px] rounded-[2px] border border-color-accent py-2 bg-color-secondary  text-color-primary hover:bg-color-dark hover:text-color-accent duration-500 transition-all hover:border-color-hitam" >
                    Add Collections
                </button>
            }
        </div>
    )
}

export default CollectionButton