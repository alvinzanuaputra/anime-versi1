"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword || keyword.trim() == "") return

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()    
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative animate__animated animate__slideInLeft animate__delay-3.5s">
            <input 
                placeholder="Search Here... "
                className="w-full p-2 rounded-lg border border-color-accent bg-color-dark text-color-primary text-sm hover:border-color-dark duration-500 transition-all"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={22} 
                className=" bg-color-dark fill-color-primary hover:fill-color-blue animate__animated animate__animated animate__zoomIn animate__delay-1s "/>
            </button>
        </div>
    )
}

export default InputSearch